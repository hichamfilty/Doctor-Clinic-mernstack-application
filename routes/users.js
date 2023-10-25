const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../model/User');

router.get('/test', (req, res, next) => {
  res.send('test hello');
});
router.post('/signup', async (req, res, next) => {
  try {
    const user = await User.findOne({ username });
    if (!user) {
      const newUser = new User({
        username: req.body.username,
        passwordHash: bcrypt.hashSync(req.body.password, 10),
        email: req.body.email,
      });
      await newUser.save();
      return res
        .status(200)
        .json({ message: `you are registered with success` });
    } else {
      return res
        .status(422)
        .json({ message: `you are already registered with us` });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'some error occured' });
  }
});
router.post('/login', async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  const secret = process.env.SECRET;
  if (!user) {
    return res.status(400).send('The user not found');
  }

  if (user && bcrypt.compareSync(req.body.password, user.passwordHash)) {
    const token = jwt.sign(
      {
        userId: user.id,
        isAdmin: user.isAdmin,
      },
      secret,
      { expiresIn: '1d' }
    );

    res.status(200).send({ user: user.email, token: token });
  } else {
    res.status(400).send('password is wrong!');
  }
});
router.get('/user', (req, res) => {
  if (req.user) {
    res.json({
      user: req.user,
      message: `${req.user.username} is authenticated`,
    });
  } else {
    res.json({
      user: req.user,
      message: 'No user is authenticated with this session',
    });
  }
});
router.get(`/:id`, async (req, res) => {
  const user = await User.findById(req.params.id).select('-passwordHash');
  // const user = await User.findById({ id: ObjectID(req.params.id) }).select(
  //   '-passwordHash'
  // );
  if (!user) {
    res
      .status(500)
      .json({ message: 'The user with the given ID was not found.' });
  }
  return res.status(200).send(user);
});
router.get('/logout', (req, res) => {});
router.post('/deleteuser', async (req, res, next) => {
  const { id } = req.body;
  if (req.user.isAdmin) {
    await User.findByIdAndDelete(id, (err) => {
      if (err) throw err;
    });
    res.json({ message: `User ${req.user.username} is deleted` });
  } else {
    res.json({ message: 'you do not have permission to delete users' });
  }
});
router.get('/getallusers', async (req, res, next) => {
  const userList = await User.find().select('-passwordHash');

  if (!userList) {
    res.status(500).json({ success: false });
  }
  res.send(userList);
});
module.exports = router;
