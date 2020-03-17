module.exports = function(app) {
    app.use('/nest' , (req, res, next) => {
        console.log('Request type: ', req.method);
        next();
    });

    app.get('/', (req, res) => {
        res.send('Hello World');
    });
    
    app.use('/healthcheck', require('express-healthcheck')());

}

