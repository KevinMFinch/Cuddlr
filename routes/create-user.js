const express = require('express');
const router = express.Router();
const path = require('path');


//School Model
const Users = require('../models/Users');

// @route GET api/schools
// @desc Get all schools
// @access Public (for now)
router.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, '../views', 'login', 'login.html'));
});

// @route POST api/schools
// @desc Add a school
// @access Public (for now)
router.post('/', (req, res) => {
	let email = req.body.email;
	let password = req.body.password;
	
	Users.find( { email : email } )
	.then(users =>{
		if (email == undefined){
			console.log('Invalid entry type');
			return;
		} else if (users.length < 1){
			console.log(`Email \"${email}\" isnt taken :-)`);
			return checkRequired();
		} else {
			console.log('An account is already using that email!');
			return;
		}
			
		res.send("This is from the server");
		
		//Make sure required fields are valid
		function checkRequired(){
			let requiredFields = ['email', 'password', 'age', 'positionRankings', 'size', 'name', 'gender', 'preferredGender'];
			let emptyFields = [];
			let fieldsAreOK = true;
			
			requiredFields.forEach(key => {
				// console.log(`Key: ${key}; Value: ${req.body[key]}`);
				if ((req.body[key] == '') || (req.body[key] == undefined)) {
					emptyFields.push(key);
					console.log(`Missing ${key} value`);
					fieldsAreOK = false;
				}
			});
			
			if (fieldsAreOK){
				console.log(`Fields are OK, creating account...`);
				return createUser();
			} else {
				console.log(`Account creation failed, missing these required fields: ${emptyFields}`);
				return;
			}
		}

		function createUser(){
			Users.create({
				'email': email,
				'hashed_password': password,
				'age': req.body.age,
				'university': req.body.university || '',
				'isInUniversity': req.body.isInUniversity || '',
				'positionRankings': [],
				'size': req.body["size"],
				'name': req.body["name"],
				'gender': req.body.gender,
				'preferredGender': req.body.preferredGender
			});

			console.log('User created.');

		}
	});
});

// @route DELETE api/schools
// @desc Delete a school
// @access Public (for now)
router.delete('/:id', (req, res) => {
	
});


module.exports = router;