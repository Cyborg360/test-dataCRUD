let express = require('express')
let app = express();
var port = process.env.PORT || 8081;

//import body parser
let bodyParser = require('body-parser');
methodOverride = require("method-override");
//import mongoose
let mongoose = require('mongoose');

//configure bodyparser to hande the post requests
app.use(bodyParser.urlencoded({
  extended: false 
}));
app.use(bodyParser.json());
app.use(methodOverride());

//Import routes
let apiRouter = require("./router")
//Use API routes in the App
app.use('/api', apiRouter)

// Welcome message
app.get('/', (req, res) => res.send('Welcome to Service'));
// Launch app to the specified port
app.listen(port, function() {
    console.log("Running Test on Port "+ port);
})

//connect to mongoose
const dbPath = 'mongodb+srv://test-admin:infusion@cluster0.zzpaw.mongodb.net/testDiscord?retryWrites=true&w=majority';
const options = {useNewUrlParser: true, useUnifiedTopology: true}
const mongo = mongoose.connect(dbPath, options);
mongo.then(() => {
    console.log('connected db');
}, error => {
    console.log(error, 'error db');
})