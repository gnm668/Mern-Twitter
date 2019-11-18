//require express
const express = require('express');
//create app object
const app = express();


app.get('/', (req, res) => {
    res.send('Hello world!');   
});

const port = process.env.PORT || 5000;

app.listen(port, () => {console.log(`listening on port ${port}`)});  