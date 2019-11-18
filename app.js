//require express
const express = require('express');
//create app object
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const users = require('./routes/api/users');
const tweets = require('./routes/api/tweets');
const passport = require('passport');

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('connected to mongoDB'))
    .catch(err => console.log(err));


// You can now delete our 'Hello World' route
app.use(passport.initialize());
require('./config/passport')(passport);

app.use('/api/users', users);
app.use('/api/tweets', tweets);

const port = process.env.PORT || 5000;

app.listen(port, () => {console.log(`listening on port ${port}`)});  