const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const StudentSchema = new Schema({
});

class User{
	constructor(data){
		this.data = data;
	}

	verify(){
		return true;
	}

	getUserFirstName(){
		return this.data["student-details"][0]['first-name'];
	}

	getUserLastName(){
		return this.data["student-details"][0]['last-name'];
	}

	getUserFullName(){
		return this.getUserFirstName() + ' ' + this.getUserLastName();
	}

	getParentPhone(){
		return this.data["parent-details"][0].phone;
	}

	getParentFirstName(){
		return this.data["parent-details"][0]['first-name'];
	}

	getParentLastName(){
		return this.data["parent-details"][0]['last-name'];
	}

	getParentFullName(){
		return this.getParentFirstName() + ' ' + this.getParentLastName();
	}
}

module.exports = {
	model: mongoose.model('student', StudentSchema),
	user: User
}

// module.exports = mongoose.model('student', StudentSchema);



