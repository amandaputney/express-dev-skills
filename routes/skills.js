var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');
const { route } = require('.');
//dedicated conroller module so modules don't get too large

//all paths start with /skills

//get request /skills
router.get('/', skillsCtrl.index);

//get/skills/new
router.get('/new', skillsCtrl.new);

//show specific id
router.get('/:id', skillsCtrl.show);


module.exports = router;
