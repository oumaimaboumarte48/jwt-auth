const User = require('../Models/usermodels');

exports.userById = (req, res, next, id) => {
  console.log(req.auth);
  User.findById(req.auth.id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: 'user not found!',
      });
    }
    req.profile = user;
    next();
  });
};
