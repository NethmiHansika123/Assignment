const express = require('express');
const router = express.Router();
const Todocontroller = require('../controllers/ToDoController');

router.post('/add', Todocontroller.AddDetails);
router.get('/', Todocontroller.getDetails);
router.post('/delete/:id', Todocontroller.deleteDetails);
module.exports = router;  