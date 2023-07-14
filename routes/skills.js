var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');
//dedicated conroller module so modules don't get too large

//all paths start with /skills

//get request /skills
router.get('/', skillsCtrl.index);

module.exports = router;
