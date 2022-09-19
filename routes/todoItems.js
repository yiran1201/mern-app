const router = require('express').Router();
// 引入Todo Model
const todoItemsModel = require('../models/todoItems');

//lets create our first route -- we will add todo item to our database
router.post('/api/item', async (req, res) => {
  try {
    const newItem = new todoItemsModel({
      item: req.body.item,
    });
    //save this item in database
    const saveItem = await newItem.save();
    res.status(200).json(saveItem);
  } catch (err) {
    res.json(err);
  }
});

//let's create second route -- get data
router.get('/api/items', async (req, res) => {
  try {
    const allTodoItems = await todoItemsModel.find({});
    res.status(200).json(allTodoItems);
  } catch (err) {
    res.json(err);
  }
});

//Let's update item
router.put('/api/item/:id', async (req, res) => {
  try {
    //find the item by it's id and update it
    const updateItem = await todoItemsModel.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json(updateItem);
  } catch (err) {
    res.json(err);
  }
});

//Let's delete item from database
router.delete('/api/item/:id', async (req, res) => {
  try {
    //find the item by its id and delete
    const deleteItem = await todoItemsModel.findByIdAndDelete(req.params.id);
    res.status(200).json('Item Deleted');
  } catch (err) {
    res.json(err);
  }
});
//export router
module.exports = router;
