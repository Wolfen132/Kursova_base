const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: {
        type: String
    },
    productSocket: {
        type: String
    },
    productChipset: {
        type: String
    },
    productDimm: {
        type: String
    },
    productForm_Factor: {
        type: String
        },
        productImage: {
            type:String
        },
    cloudinaryPublicId: {
        type:String
    }
});

const ProductModel = mongoose.model('ProductModel', productSchema)
module.exports = ProductModel