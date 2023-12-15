const { Signup, Login, RefreshAccessToken } = require('../controllers/userController');
const router = require('express').Router()

router.post('/signup', Signup)
router.post('/login', Login)
router.post('/refrsh-access-token', RefreshAccessToken)

module.exports = router;