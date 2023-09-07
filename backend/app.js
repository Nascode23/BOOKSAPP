const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
//const path = require ('path');

// routes
const books = require('./routes/api/books');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));


app.get('/', (req, res) => res.send('Hello Folks!'));

// use Routes
app.use('./api/books', books);
//app.use(express.static(path.join(__dirname,'build')));

// app.get('/',function(req,res){
//     res.sendFile(path.join(__dirname, 'build','index.html'))
// })

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server running on port ${port}`));