const SearchFile = require('../models/search_file');
const fs = require('fs');
const path = require('path');


// module.exports.uploadCsv= function(req,res){
//     SearchFile.findById(req.params.id, function(err,search_file){
//         return res.render('home', {
//             title: "User profile",
//             search_file_user: search_file
//         });
//     });    
//   } 

//upload a file to the server

module.exports.upload = async function (req, res) {
    try {
        //we use this static function which is defined in Model file to 
        SearchFile.uploadedCsv(req, res, function (err) {
            if (err) { console.log('****Multer Error*****', err) }

            // console.log(req.file);
            SearchFile.create({
                //saving the path of the uploaded file path field in SearchFile
                path: SearchFile.csvfilePath + '/' + req.file.filename

            });

        })

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