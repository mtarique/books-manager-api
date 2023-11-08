require('dotenv').config(); 
const port = process.env.PORT; 
const express = require('express'); 
const mongoose = require('mongoose'); 
const app = express(); 

// Connect to mongodb
mongoose.connect(process.env.DB_HOST, {useNewUrlParser: true, useUnifiedTopology: false})
mongoose.connection.on('error', error => console.error(`Oops! could not establish a connection to database: \n${error}`))

app.use(express.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

const apiRoutes = require('./routes/api'); 
app.use('/api', apiRoutes); 

app.listen(port, () => console.log(`Server is listening at port ${port}`)); 