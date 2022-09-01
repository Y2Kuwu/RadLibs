const Character = require('../models/characters');


module.exports = {
  create
};

function create(req, res) {
  // Find the movie to embed the review within
  Character.findById(req.params.id, function(err, character) {

    // Add the user-centric info to req.body (the new review)
    req.body.user = req.user._id;
    req.body.userName = req.user.name;  // may need to rename controller name
    req.body.userAvatar = req.user.avatar;

    // Push the subdoc for the review  //acc add
    character.acc.push(req.body);
    //saving main character
    character.save(function(err) {
      res.redirect(`/characters/${character._id}`);
    });
  });
}

function deleteAcc(req, res){
  Character.findOne({'name._id':req.params.id}).then(function (character){
    const review = character.name.id(req.params.id);
    if(!acc.user.equals(req.user._id)) return res.redirect(`/characters/${character._id}`);
    acc.remove();
    character.save().then(function (){
      res.redirect(`/character/${character._id}`);
    }).catch(function (error){
      return next(error);
    })
  })
}
//

module.exports = {
  create,
  delete :deleteAcc

}