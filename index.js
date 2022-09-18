const express = require('express');
const mongoose = require('mongoose');
const dovtenv = require('dotenv').config();

const app = express();
//Use express.json() to get data into json format

app.use(express.json());
app.use('*', (req, res) => {
  res.json(`hello world`);
});
//Port
const PORT = process.env.PORT || 5500;

//lets import routes
const TodoItemRoute = require('./routes/todoItems')

//Lets connect to mongodb
mongoose.connect(process.env.DB_CONNECT)
.then(()=> console.log("Database connected"))
.catch(err=> console.log(err))

app.use('/', TodoItemRoute)
//Add port and connect to server
app.listen(PORT, () => console.log('Server connected'));
