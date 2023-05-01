const { Router } = require("express");
const {getDonationsHandler} = require('../handlers/donationsHandler');

const app = Router();

app.get('/', getDonationsHandler);

module.exports = app;