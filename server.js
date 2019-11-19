const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }
app.use(routes);
// Connect to the Mongo DB
mongoose.connect('mongodb+srv://gerritt:gerritt@planet-of-scrapes-wmmte.mongodb.net/bookDB?retryWrites=true&w=majority', 
{useNewUrlParser: true, useUnifiedTopology: true});


app.listen(PORT, () => console.log(`server listening on ${PORT}`));