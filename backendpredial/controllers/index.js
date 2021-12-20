const PrediosController = require('./PrediosController');
const UsersController = require('./UsersController'); 

exports.setUpControllers = (app) => {
    app.use('/predios/', PrediosController);
    app.use('/users/', UsersController);
}