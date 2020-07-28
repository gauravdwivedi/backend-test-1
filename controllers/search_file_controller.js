const SearchFile= require('../models/search_file');
const fs=require('fs');
const path=require('path');


// module.exports.uploadCsv= function(req,res){
//     SearchFile.findById(req.params.id, function(err,search_file){
//         return res.render('home', {
//             title: "User profile",
//             search_file_user: search_file
//         });
//     });    
//   } 

//upload a file to the server

module.exports.update = async function (req, res) {
  try {

      //if req has file
      if (req.file) {
          let Filename = req.file.originalname;
          filename = path.parse(Filename).name;


          await SearchFile.create({
              name: Filename,
              path: req.file.filename
          });
      }
      return res.render('home', {
          path: 'home',
          title: 'CSV UPLOAD',
          message: 'File Uploaded Successfully'
      });
  } catch (err) {
      return res.render('home', {
          path: "home",
          title: "CSV UPLOAD",
          message: "File upload failed!"
      });
  }
}