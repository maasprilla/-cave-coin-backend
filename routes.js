var express = require('express');


module.exports.default = function (app) {

  var apiRoutes = express.Router();
  app.use(function (req, res, next) {

    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type,x-access-token,authorization,Authorization');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");


    next();
  });
 
   app.use('/logins', require('./api/logins/api.logins.js'));
   app.use('/users', require('./api/users/api.users.js'));
   app.use('/companies', require('./api/companies/api.companies.js'));
   app.use('/offices', require('./api/offices/api.offices.js'));
   app.use('/businesscategories', require('./api/businesscategories/api.businesscategories.js'));



}