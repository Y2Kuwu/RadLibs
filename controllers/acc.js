const Acc = require('../models/acc');
const Character = require('../models/characters');


function create(req, res) {
 
  const str = req.body.personality;
  req.body.personality = `${str}`;  //CHANGE may be getting more than string
  Acc.create(req.body, function (err, acc) {
    res.redirect('/acc/new');
  });
}

function newAcc(req, res) {
  Acc.find({}, function (err, acc) {
    res.render('acc/new', {
      title: 'Add Accessory', // this is the H1 tag, or the page title 
      acc
    });
  })
}

function addChar(req, res){
  Character.findById(req.params.id, function(error, character){
    character.charSet.push(req.body.accId);
    character.save(function(error){
      res.redirect(`/characters/${character._id}`);
    });
  });
}


module.exports = {
  new: newAcc,
  create,
  addChar
};