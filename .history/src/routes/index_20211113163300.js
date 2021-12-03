const express = require('express')
const productRoute = require('./courseRoute')
const authRoute = require('./authRoute')
const categoriesRoute = require('./categoriesRoute')
const paypalRoute = require('./paypalRoute')

const router = express.Router()

router.use('/course', courseRoute)
router.use('/category', categoriesRoute)
router.use('/payment-paypal', paypalRoute)
router.use('/auth', authRoute)

router.get('/info', (req, res) => res.status(200).send('Welcome to server aws'))

module.exports = router