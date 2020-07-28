const express= require('express');
// using express.Router
const router= express.Router();

const searchfileController= require('../controllers/search_file_controller');

router.post('/update',searchfileController.update);
// router.get('/upload', searchfileController.uploadCsv);
module.exports= router;