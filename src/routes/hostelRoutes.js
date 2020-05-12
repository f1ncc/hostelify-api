const express = require('express');
const hostelController = require('./../controllers/hostelController');

const router = express.Router();

router.param('id', hostelController.checkID);

router
  .route('/')
  .get(hostelController.getAllhostels)
  .post(hostelController.checkBody, hostelController.createhostel);

router
  .route('/:id')
  .get(hostelController.gethostel)
  .patch(hostelController.updatehostel)
  .delete(hostelController.deletehostel);

module.exports = router;
