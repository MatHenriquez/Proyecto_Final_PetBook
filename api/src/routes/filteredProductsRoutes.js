const { Router } = require("express");
const filterProductsController = require('../controllers/filterProductsController');

const app = Router();

app.get('/', async (req, res) => {
    const filters = req.query;
  
    try {
      const response = await filterProductsController(filters);
      res.status(200).send(response);
    } catch (error) {
      res.status(400).send(error.message);
    }
  });

module.exports = app;