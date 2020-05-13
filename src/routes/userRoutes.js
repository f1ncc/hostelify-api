const express = require('express');
const userController = require('./../controllers/userController');
const checkID = require('./../middleware/check_id');

const router = express.Router();

router.param('id', checkID);

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
