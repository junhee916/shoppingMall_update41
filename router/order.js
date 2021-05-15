const express = require('express')
const checkAuth = require('../middleware/check-auth')
const {
    orders_delete_order,
    orders_delete_all,
    orders_patch_order,
    orders_post_order,
    orders_get_order,
    orders_get_all
} = require('../controller/order')
const router = express.Router()

// total get order
router.get('/', checkAuth, orders_get_all)

// detail get order
router.get('/:orderId', checkAuth, orders_get_order)

// register order
router.post('/', checkAuth, orders_post_order)

// update order
router.patch('/:orderId', checkAuth, orders_patch_order)

// total delete order
router.delete('/', checkAuth, orders_delete_all)

// detail delete order
router.delete('/:orderId', checkAuth, orders_delete_order)


module.exports = router