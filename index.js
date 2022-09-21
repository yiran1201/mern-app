const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');

const app = express();
//Use express.json() to get data into json format

app.use(express.json());
//Port
const PORT = process.env.PORT || 5500;

//use cors
app.use(cors());
// 链接数据库放最上面，因为之后的route会用到。
mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => console.log('Database connected'))
  .catch((err) => console.log(err));

/****************
 * Routes start *
 ****************/

// lets import routes
const TodoItemRoute = require('./routes/todoItems');
app.use('/', TodoItemRoute);

/**************
 * Routes end *
 **************/

// 星号的route会match所有，因此必须放最下面，用来兜底。
app.use('*', (req, res) => {
  res.json(`something wrong, hit default route!`);
});

//Add port and connect to server
app.listen(PORT, () => console.log('Server connected'));
