var express = require('express');
const joiValidation = require('../middlewares/joiValidation');
const auth = require('../middlewares/auth');
const {} = require('../schemas');
var router = express.Router();
const priceService = require('../services/price');

router.get('/id/:id', auth.ensureSignedIn, async function(req, res, next) {
    const { id } = req.params;
    const result = await priceService.findById(id);
    res.json(result);
})

router.post('/create', auth.ensureSignedIn, async(req, res) => {
    const { product, price, source } = req.body;
    const result = await priceService.create({ product, price, source });
    res.json(result);
})

// all itens
router.get('/all', async(req, res, next) => {
    console.log("hello world");
    // to do
    try {
        const result = await priceService.findAll();
        res.json(result);
    } catch (err) {
        return {
            success: false,
            error: err || 'error'
        }

    }
})

router.post('/update', auth.ensureSignedIn, async(req, res, next) => {
    const { _id, product, price, source } = req.body;
    console.log(product);
    const result = await priceService.update({ _id, product, price, source });
    res.json(result);
})

router.post('/delete', auth.ensureSignedIn, async(req, res, next) => {
    // to do
    const { _id } = req.body;
    console.log(_id);
    const result = await priceService.remove(_id);
    res.json(result);
})

module.exports = router