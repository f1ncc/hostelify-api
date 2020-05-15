const express = require('express');
const {
  signupAdmin,
  AdminLogin,
  AdminSignout,
} = require('../controllers/adminController');
const router = express.Router();
router.route('/signup').post(signupAdmin);
router.route('/login').post(AdminLogin);
router.route('/logout').post(AdminSignout);

module.exports = router;
