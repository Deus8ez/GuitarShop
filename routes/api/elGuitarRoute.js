const express = require('express')

const router = require('express').Router();

const {electricProductsModel} = require('../../models/guitars')

router.get('/elguitars', async (req, res) => {
    try {
      const electricGuitars = await electricProductsModel.find();
      if (!electricGuitars) throw Error('No guitar exist');
      res.json(electricGuitars);
    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
  });
  
module.exports = router;