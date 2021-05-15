const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        name : {
            type : String,
            required : true
        },
        price : {
            type : Number,
            required: true
        },
        productImage : {
            type : String,
            required : String
        }
    },
    {
        timestamps : true
    }
)

module.exports = mongoose.model('product', productSchema)