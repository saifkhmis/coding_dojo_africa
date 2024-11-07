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
                module.exports.updateExistingProduct = (req, res) => {
                    Product.findOneAndUpdate(
                        { _id: req.params.id },
                        req.body,
                        { new: true, runValidators: true }
                    )
                        .then(updatedProduct => {
                            res.json({ product: updatedProduct })
                        })
                        .catch((err) => {
                            res.json(err)
                        });}
                        module.exports.deleteAnExistingProduct = (req, res) => {
                            Product.deleteOne({ _id: req.params.id })
                                .then(result => {
                                    res.json({ result: result })
                                })
                                .catch((err) => {
                                    res.json(err)
                                });}