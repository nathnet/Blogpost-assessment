var express = require('express');
var router = express.Router();
const hatchways = require('../services/hatchwaysBlog');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/blog', function(req, res) {
  console.log(hatchways.getBlogPosts(req.params.tag));
})

module.exports = router;
