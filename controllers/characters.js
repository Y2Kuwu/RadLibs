const Character = require('../models/characters');






function index(req, res){
  Character.find({}, function(error, character ){
  res.render('characters/index', { title: 'All Characters', character });
  });
}

  function show(req, res){
  Character.findById(req.params.id, function(err ,character){
  res.render("characters/show", {character})
  character;
  edit;
  });
}

  function newCharacter(req,res){
    res.render('characters/new')
  }

  function edit(req, res){
    Character.find(req.params.id, function(err ,character){
    res.render("characters/edit", {character})
    character;
    Character.findByIdAndUpdate(req.params.id, function(err ,character){
      res.redirect("characters/show", {character})
      character;
    });
  })
  }


  // function edit(req, res){
  //   Character.find(req.params.id, function(err ,character){
  //   res.render("characters/edit", {character})
  //   character;
  //   Character.findByIdAndUpdate(req.params.id, function(err ,character){
  //     res.redirect("characters/show", {character})
  //     character;
  //   });
  // })
  // }

  // var charMain = req.body.char;
  // var charName = req.body.name;
  // var charPers = req.body.personality;
  // var charOccu = req.body.occupation;
  // var charAcce = req.body.accessory;



  function create(req, res, next){
    //Character.findById(req.params.id, function(err, character){
    Character.create({
    // req.body.user = req.user._id;//
    // req.body.userName = req.user.name;// 
    // req.body.userAvatar = req.user.avatar;//
    // new Character(req.body);
    

  char: req.body.char,
  name: req.body.name,
  personality: req.body.personality,
  occupation: req.body.occupation,
  accessory: req.body.accessory
//  character.save(function(err){
//   res.redirect(`/characters/${character._id}`);
  });
  res.redirect("/characters");
}

// Character.findOneAndUpdate(query, request.character, {upsert:true}, function(err, doc){
// if(err) return res.send(500, {error:err});
// return res.send('saved');
// });



module.exports = {
  index,
  show,
  new: newCharacter,
  create,
  edit,
 
};








// const Acc = require('../models/acc');


// function index(req, res) {
//   Character.find({}, function(err, character) {
//     res.render('characters/index', { title: 'All Characters', character });
//   });
// }

// function show(req, res) {
//   // Find the cast that belongs to the movie
//   Character.findById(req.params.id)
//     .populate('charSel').exec(function(err, character) {
//       Acc.find(           //make this find just one selected
      
//         {_id: {$nin: character.charSet}},  //charSet  //change to in?
//         function(err, acc) {
//             res.render('characters/show',{
//               title : 'Character details',
//               character,
//               acc
//             });
//         }
//       );
//     });
// }

// function newCharacter(req, res) {
//   res.render('characters/new', { title: 'Add Character' });
// }

// function create(req, res) {
//   console.log()
//   const character = new Character(req.body);
//   character.save(function(err) {
//     if (err) return res.redirect('/characters/new');
//     res.redirect(`/characters/${character._id}`);

//   });
// }




















//imageRouter.route('/')
// .post(upload.single('file'), (req , res, next) => {
//   console.log(req.body);
//   Image.findOne({caption: req.body.caption}
//     .then((image)=>{
//       console.log(image);
//       if(image){
//         return res.status(200).json({
//           success : false,
//           message: 'Image already exists',
//         });
//       }
//     let newImg = new Image({
//       caption : req.body.caption,
//       filename: req.file.filename,
//       fileId: req.file.id,
//     });
//     newImage.save()
//     .then((image) => {
//       res.status(200).json({
//       success : true,
//       image,
//       });
//     })
//     .catch(error => res.status(500).json(error));
//   })
//   .catch(error => res.status(500).json(error)));
// })