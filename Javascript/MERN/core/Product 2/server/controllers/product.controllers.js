const Product = require('../models/product.model')

module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
        .then(newlyCreatedProduct => {
            res.json({ products: newlyCreatedProduct})
        })
        .catch((err) => {
            res.json(err)
        });}


        module.exports.findOneSingleProduct = (req, res) => {
            Product.findOne({ _id: req.params.id })
                .then(oneSingleProduct => {
                    res.json({ product: oneSingleProduct })
                })
                .catch((err) => {
                    res.json(err)
                });}
         

                module.exports.findAllProduct = (req, res) => {
                    Product.find()
                        .then((allDaProduct) => {
                            res.json({ product: allDaProduct })
                        })
                        .catch((err) => {
                            res.json(err)
                        });
                }
