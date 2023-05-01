const { Router } = require('express');
const { searchHandler } = require('../handlers/searchHandler');

const searchRoutes = Router();

searchRoutes.get('/:collection/:term', searchHandler);

module.exports = searchRoutes;