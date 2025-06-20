const express = require("express");
const router = express.Router();

router.use('/auth', require('./Auth.route'));
router.use('/orders', require('./Order.route'));
router.use('/consumers', require('./Consumer.route'));

module.exports = router;
