const jwt = require('jsonwebtoken');
const userModel = require('../models/user');

const protect = async (req, res, next) => {
  let token;
  
  token = req.cookies.jwt;

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await userModel.findById(decoded.userId).select('-password +email');
    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = {
  protect
}