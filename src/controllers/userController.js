const timestamp = require('../middleware/timestamp');

exports.getAllUsers = (req, res) => {
  res.status(200).json({
    status: 'success',
    requestedAt: timestamp,
    data: {},
  });
};

exports.getUser = (req, res) => {
  //const { id } = (req.params.id) * 1;
  // const user = users.find(element => element.id === id)
  res.status(200).json({
    status: 'success',
    requestedAt: timestamp,
    data: {
      // user
    },
  });
};

exports.createUser = (req, res) => {
  // const newId = users[users.length - 1].id + 1
  // const newUser = Object.assign({ id: newId }, req.body)
  // users.push(newUser)
  //create the user in the db
  res.status(201).json({
    status: 'success',
    requestedAt: timestamp,
    data: {
      // user: newUser
    },
  });
};

exports.updateUser = (req, res) => {
  //const { id } = (req.params.id) * 1;
  // const user = users.find(element => element.id === id)
  res.status(20).json({
    status: 'success',
    requestedAt: timestamp,
    data: {},
  });
};

exports.deleteUser = (req, res) => {
  //const { id } = (req.params.id) * 1;
  // const user = users.find(element => element.id === id)
  res.status(204).json({
    status: 'success',
    requestedAt: timestamp,
    data: null,
  });
};
