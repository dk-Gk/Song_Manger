const userModel = require('../models/user');
const bcrypt = require('bcryptjs');
const generateToken = require('../utils/generateToken');

const signUp = async(req, res) => {
    const {username, email, password} = req.body;

        try {
            if (!username || !email || !password) {
                return res.status(400).json({ message: 'Parameters missing' });
            }

            const existingUsername = await userModel.findOne({username: username});
            
            if(existingUsername) {
                return res.status(409).json({ message: 'username already exists' });
            }
            
            const existingemail = await userModel.findOne({email: email});
            
            if(existingemail) {
                return res.status(409).json({ message: 'email already exists, please sign in instead' });
            }
            
            const newUser = new userModel ({
                username,
                email,
                password
            });
            const salt = await bcrypt.genSalt(10);
            newUser.password = await bcrypt.hash(password, salt);

            const user = await newUser.save();
            res.status(201).json({
              _id: user._id,
              name: user.name,
              email: user.email,
              token: generateToken(user._id)
            });
        } catch(error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
}

const signin = async (req, res) => {

    const { email, password } = req.body;
  
    try {
        if (!email || !password) {
            return res.status(400).json({ message: 'Parameters missing' });
        }
      const user = await userModel.findOne({ email }).select('+username +password +email');

      if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
      generateToken(res, user._id);
      res.status(201).json(user);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  }

const getUserProfile = async (req, res) => {

  try {
    const user = {
      _id: req.user._id,
      username: req.user.username,
      email: req.user.email
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}
const updateUserProfile = async (req, res) => {

  try {
    const user = await userModel.findById(req.user._id);

    if (user) {
      user.username = req.body.username || user.username;
      user.email = req.body.email || user.email;

      if (req.body.password) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(req.body.password, salt);
      }

      const updatedUser = await user.save();
      res.status(200).json({
        _id: updatedUser._id,
        username: updatedUser.username,
        email: updatedUser.email,
      });

    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}
const logout = async (req, res) => {

  try {
    res.cookie('jwt', '', {
      httpOnly: true,
      expires: new Date(0),
    });
    res.status(200).json({ message: 'User logged out' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}

module.exports = {
    signUp,
    signin,
    getUserProfile,
    updateUserProfile,
    logout
}