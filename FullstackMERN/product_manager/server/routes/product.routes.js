//change all occurances of subject name. Add or delete routes as required

const ProductController = require('../controllers/product.controller');

module.exports = app => {
    app.get('/api/products', ProductController.findAllProducts);
    app.get('/api/products/:id', ProductController.findOneProduct);
    app.patch('/api/products/:id', ProductController.updateProduct);
    app.post('/api/products', ProductController.createProduct);
    app.delete('/api/products/:id', ProductController.deleteOneProduct);
    app.put('/api/products/:id', ProductController.updateProduct)
}