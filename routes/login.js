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
	let username = req.body.user;
	let password = req.body.password;
	
	Users.find( { email : username } )
	.then(users =>{

		let tmp = JSON.stringify(users);
		let data = JSON.parse(tmp);
		console.log(data[0]["name"]);
		
		res.send("This is from the server");
	})
});

// @route DELETE api/schools
// @desc Delete a school
// @access Public (for now)
router.delete('/:id', (req, res) => {
	
});


module.exports = router;