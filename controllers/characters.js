const Character = require('../models/characters');
const Acc = require('../models/acc');



function index(req, res) {
  Character.find({}, function(err, character) {
    res.render('characters/index', { title: 'All Characters', character });
  });
}

function show(req, res) {
  // Find the cast that belongs to the movie
  Character.findById(req.params.id)
    .populate('charSet').exec(function(err, character) {
      Acc.find(           //make this find just one selected
        {_id: {$nin: character.charSel}},  //charSet  //change to in?
        {_id: {$nin: character.charSet}},  //charSet  //change to in?
        function(err, acc) {
            res.render('characters/show',{
              title : 'Character details', // this is H1 tag
              character, // 
              acc // within character: acc
            });
        }
      );
    });
}

function newCharacter(req, res) {
  res.render('characters/new', { title: 'Add Character' });
}

function create(req, res) {

  const character = new Character(req.body);
  character.save(function(err) {
    if (err) return res.redirect('/characters/new');
    res.redirect(`/characters/${character._id}`);
  });
}


module.exports = {
  index,
  show,
  new: newCharacter,
  create
};