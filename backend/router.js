//initialize express router
let router = require('express').Router();
//set default API response
router.get('/', function(req, res) {
    res.json({
        status: 'API Works',
        message: 'Welcome to TestCRUD API'
    });
});
//Import User Controller
var userController = require('./user/controller/userController');
// Bio routes
router.route('/user')
    .get(userController.index)
    .post(userController.add);
router.route('/user/:user_id')
    .get(userController.view)
    .patch(userController.update)
    .put(userController.update)
    .delete(userController.delete);
//Export API routes
module.exports = router;