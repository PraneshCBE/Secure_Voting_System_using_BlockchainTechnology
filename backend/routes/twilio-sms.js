const express = require('express')
const {sendOTP, verifyOTP} = require('../models/twilio-sms.js');
const router = express.Router();

router.route('/send-otp').post(sendOTP);
router.route('/verify-otp').post(verifyOTP);

module.exports = router;





