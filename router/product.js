const express = require('express')
const multer = require('multer')
const chekAuth = require('../middleware/check-auth')
const {
    products_delete_product,
    products_get_all,
    products_delete_all,
    products_patch_product,
    products_post_product,
    products_get_product
} = require('../controller/product')
const router = express.Router()

const storage = multer.diskStorage(
    {
        destination : function(req, file, cb){
            cb(null, './uploads')
        },
        filename : function (req, file, cb){
            cb(null, file.originalname)
        }
    }
)

const fileFilter = (req, file, cb) => {

    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null, true)
    }
    else{
        cb(null, false)
    }
}

const upload = multer(
    {
        storage : storage,
        limit : {
            filesize : 1024*1024*5
        },
        fileFilter : fileFilter
    }
)

// total get product
router.get('/', products_get_all)

// detail get product
router.get('/:productId', chekAuth, products_get_product)

// register product
router.post('/', chekAuth, upload.single('productImage'), products_post_product)

// update product
router.patch('/:productId', chekAuth, products_patch_product)

// total delete product
router.delete('/', chekAuth, products_delete_all)

// detail delete product
router.delete('/:productId', chekAuth, products_delete_product)

module.exports = router