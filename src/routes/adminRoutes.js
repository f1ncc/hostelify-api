const express = require('express');
const {
  signupAdmin,
  AdminLogin,
  AdminSignout,
  getAllAdmins,
} = require('../controllers/adminController');

const router = express.Router();
router.route('/signup').post(signupAdmin);
router.route('/login').post(AdminLogin);
router.route('/logout').post(AdminSignout);
router.route('/').get(getAllAdmins);

module.exports = router;
