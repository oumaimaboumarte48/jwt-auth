module.exports = (requiredRole) => {
  return (req, res, next) => {
    if (req.auth.role !== requiredRole) {
      return res.status(401).end();
    } else {
      console.log('User meet required role, going to next middleware');
      return next();
    }
  };
};
