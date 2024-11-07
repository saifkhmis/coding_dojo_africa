const ProductControllers= require('../controllers/product.controllers')


module.exports = app => {
    app.post('/product', ProductControllers.createNewProduct);
    app.get('/product', ProductControllers.findAllProduct);
    app.get('/product/:id', ProductControllers.findOneSingleProduct);
    
}