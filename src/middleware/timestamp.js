module.exports = (req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
};
