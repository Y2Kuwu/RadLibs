const Libs = require('../models/libs');

function index(req, res) {
    Libs.find({}, function(err, libs) {
      res.render('movies/index', { title: 'Rad-Libs', libs });
    });
  }

  function show(req, res) {
    Libs.findById(req.params.id)
    res.render('movies/show',{
                libs
              });
          }
        

function newLib(req, res){

}

function create(req , res){

}

module.exports = {
    index,
    show,
    new : newLib,
    create,
}