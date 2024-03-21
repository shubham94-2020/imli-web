const express = require('express');
const mainemailController = require('./../controllers/mainEmailController')

const router = express.Router();

// router.get('/sendmail', emailController.sendMailT);
router.get('/mainsendmail', mainemailController.sendmail);

module.exports = router;
