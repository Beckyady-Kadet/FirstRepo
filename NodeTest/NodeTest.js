const express = require("express");
require('dotenv').config();

//create new express app and save it in 'app'
const app = express();
const port = process.env.PORT || 8000;


//Call the route here from the external file
let routes = require ('./Route')(app);

//make the server listen to request
app.listen(port, () =>{
console.log('App listening on port 8000' );
console.log('The value of PORT is:', process.env.PORT);

})


app.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
})

