const Character = require('../models/characters');
const User = require('../models/user');

// const del = Character.deleteOne();
// const updt = Character.findByIdAndUpdate();

const userCheck = User._id;


function index(req, res){
  Character.find({}, function(error, character ){
  res.render('characters/index', { title: 'All Characters', character });
  
})
}

function create(req, res){
  //Character.findById(req.params.id, function(err, character){
  // const charNew = new Character(req.body);
  // charNew.userCheck = req.user._id;
  charNew.save;
  Character.create({
    
 //
  // req.body.userName = req.user.name;// 
  // req.body.userAvatar = req.user.avatar;//
  // new Character(req.body);
  

char: req.body.char,
name: req.body.name,
personality: req.body.personality,
occupation: req.body.occupation,
accessory: req.body.accessory

});
res.redirect("/characters");
}


  function show(req, res){
  Character.findById(req.params.id, function(err ,character){
  res.render("characters/show", {character})
  character;
  });
}
  function showEdit(req, res){
    Character.findById(req.params.id, function(err ,character){
    res.render("characters/edit", {character})
    character;
    });
}
  function newCharacter(req,res){
    res.render('characters/new')
  }

  function die(req, res) {
    Character.findByIdAndDelete(req.params.id, (err, character) => {
        res.redirect('/characters');
    });
}
  


  function edit(req, res){
    Character.findByIdAndUpdate(req.params.id, (err, character)=> {
      
      console.log(character)
      
      res.redirect("/characters/:id/edit", {character})   //was render
      character;
    });
  }


  function update(req, res) {
   
    Character.findOneAndUpdate({'_id': req.params.id, userCheck: req.user._id}, function(err, character) {
      // const charSub = character.cre.id(req.params.id);
      // if (!charSub.userId.equals(req.user._id)) 
      req.body,
      {new: true}
      // return res.redirect(`/characters/${character._id}`);
      // charSub.text = req.body.text;
      // character.save(function(err) {
      res.redirect(`/characters/${character._id}`);
      });
  }


 





module.exports = {
  index,
  show,
  new: newCharacter,
  create,
  edit,
  update,
  die,
  showEdit,
 
};
// function edit(req, res){
  //   // Character.findById(req.params.id, function(err ,character){
  //   // res.render("characters/edit", {character})
  //   // character;
  //   Character.findByIdAndUpdate(req.params.id, function(err ,character){
  //     res.redirect("characters/:id/edit", {character})
  //     character;
  //   });
  // // })
  // }

  // function die(req, res){
  //   Character.findByIdAndDelete(req.params.id, function(err ,character){
  //     // {_id: req.params.id, cre: req.user._id}, function(err) {
  //       console.log(character)
  //       res.redirect('/characters', {character});
       
  //     });
  // }





  // if(del){
  //   character.deleteOne
  // }
  // if(updt){
  //   character.findByIdAndUpdate
  // }
  // })





  // var charMain = req.body.char;
  // var charName = req.body.name;
  // var charPers = req.body.personality;
  // var charOccu = req.body.occupation;
  // var charAcce = req.body.accessory;

//   function create(req, res) {
//     Character.findById(req.params.id, function(err, character){
//     //  const character = new Character(req.body);
//     character = req.user._id;
//     // req.body.userId = req.user._id;
//     // req.body.userName = req.user.name;
//     // character.
//     character.save(function(err) {
//       if (err) return res.redirect('/characters/new');
//       res.redirect(`/characters/${character._id}`);
//     });
//   })
// }



// Character.findOneAndUpdate(query, request.character, {upsert:true}, function(err, doc){
// if(err) return res.send(500, {error:err});
// return res.send('saved');
// });




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