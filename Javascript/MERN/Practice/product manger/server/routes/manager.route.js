const ManagerController = require('../controllers/manager.controllers');
 
module.exports = app => {

    app.post('/api/product', ManagerController.createNewManager);

}