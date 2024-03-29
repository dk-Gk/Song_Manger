const jwt = require('jsonwebtoken');

const generateToken = (res, userId) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '1h'
      });

      res.cookie('jwt', token, {
        httpOnly: true,
        sameSite: 'None',
        secure: 'true',
        maxAge: 60 * 60 * 1000,
      });
}

module.exports = generateToken;
