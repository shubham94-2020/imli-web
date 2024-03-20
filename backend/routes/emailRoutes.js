const express = require('express');
const emailController = require('./../controllers/emailcontroller')

const router = express.Router();

router.get('/sendmail', emailController.sendMailT);

module.exports = router;
