const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart);

router.get('/products', shopController.getProduct)

router.get("/", (req, res, next) => {
    res.send({ status: 'sucess' })
})

module.exports = router;