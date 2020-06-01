const { verify } = require('jsonwebtoken');
const adminModel = require('../models/admin');

module.exports = async (req, res, next) => {
  try {
    // const token = req.headers['Authorization'].split(' ')[1];
    const token = req.headers.authorization.split(' ')[1];

    const { user } = await verify(token, process.env.JWT_SECRET);

    const userExist = await adminModel.findOne({ _id: user._id });
    if (!userExist) {
      throw new Error('invalid Token');
    }
    console.log('user Exist', userExist);
    const tokenExist = userExist.tokens.includes(token);
    if (!tokenExist) {
      throw new Error('invalid token');
    }

    req.user = userExist;

    next();
  } catch (err) {
    res.status(401).json({
      status: 'fail',
      message: err,
    });
  }
};
