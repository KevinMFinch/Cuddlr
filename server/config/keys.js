require("dotenv").config({ path: ".env" });

module.exports = {
	mongoURI: process.env.MONGO_URI || 'mongodb://mike:princeton6@ds157493.mlab.com:57493/cuddlr',
} 
