const { CreateContact } = require('../controllers/contactController')
const router = require('express').Router();

router.post('/create-contact', CreateContact);

module.exports = router;