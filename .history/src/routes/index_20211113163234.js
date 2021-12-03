const express = require('express')
const productRoute = require('./courseRoute')
const authRoute = require('./authRoute')
const categoriesRoute = require('./categoriesRoute')
const paypalRoute = require('./paypalRoute')

const router = express.Router()

router.use('/product', productRoute)
router.use('/room', roomRoute)
router.use('/category', categoriesRoute)
router.use('/cart', cartRoute)
router.use('/pendingCart', pendingCartRoute)
router.use('/bill', billRoute)
router.use('/interiorDesign', interiorDesignRoute)
router.use('/payment-paypal', paypalRoute)
router.use('/auth', authRoute)

router.get('/info', (req, res) => res.status(200).send('Welcome to server aws'))

module.exports = router