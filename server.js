const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const cuddles = require('./routes/api/cuddles');

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

//Connect to Mongo
mongoose
	.connect(db)
	.then(() => console.log('MongoDB Connected...'))
	.catch((err) => console.log('Nope: ', err));

//Declare static files path
//app.use(express.static(buildDir));

if(process.env.NODE_ENV === 'production'){
	//Set static folder
	app.use(express.static('views/'));

	app.get('/', (req, res) =>{
		res.send("Hello from Cuddlr's production home");
	})
}

//Use routes
//First parameter is URL route, second is path var above
app.use(express.static('views/'));

app.get('/', (req, res) =>{
	// res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	res.send("Hello from the cuddlr main");
})
app.use('/api/cuddles', cuddles);

const login = require('./routes/login');
app.use('/login', login);

const createUser = require('./routes/create-user');
app.use('/register', createUser);

const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`Server started on port ${port}!`));



