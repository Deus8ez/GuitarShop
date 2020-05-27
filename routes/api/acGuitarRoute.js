const express = require('express')

const router = require('express').Router();

const {acousticProductsModel} = require('../../models/guitars')

router.get('/acguitars', async (req, res) => {
    try {
      const acousticGuitars = await acousticProductsModel.find();
      if (!acousticGuitars) throw Error('No guitar exist');
      res.json(acousticGuitars);
    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
  });
  
module.exports = router;