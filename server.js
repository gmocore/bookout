// import packages
const express = require('express');
const mongoose = require('mongoose');

// import routes
const routes = require('./routes')

// initialize express
const app = express();

// set port
const PORT = process.env.PORT || 3001;

// express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets to heroku
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }
 
//   
app.use(routes);
// Connect to the Mongo DB
mongoose.connect('mongodb+srv://gerritt:gerritt@planet-of-scrapes-wmmte.mongodb.net/bookDB?retryWrites=true&w=majority', 
{useNewUrlParser: true, useUnifiedTopology: true});

// start server
app.listen(PORT, () => console.log(`server listening on ${PORT}`));