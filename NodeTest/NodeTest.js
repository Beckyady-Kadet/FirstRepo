const express = require("express");

//create new express app and save it in 'app'
const app = express();


//Create a route for the app
app.get('/', (req, res) => {
    res.send('Hello World');
});

//make the server listen to request
app.listen(8000, () =>{
console.log('App listening on port 8000');
})


app.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
})

app.use('/nest' , (req, res, next) => {
    console.log('Request type: ', req.method);
    next();
});