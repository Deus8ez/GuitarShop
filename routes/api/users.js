const express = require('express')

const router = require('express').Router();

const UserModel = require('../../models/user')

router.get('/', async (req, res) => {
  try {
    const users = await UserModel.find();
    if (!users) throw Error('No users exist');
    res.json(users);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

module.exports = router;
