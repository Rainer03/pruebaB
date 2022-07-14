const express = require('express');

// initi

const app= express();

//settings 

app.set('port', process.env.PORT || 4000);


app.use(morgan('dev'));

// global variables 

//Routes

//public

//Starting the server 

app.listen(app.get('port'),()  => {
    console.log('Server on port' + app.get('port'))
} );