var express = require('express');
var router = express.Router();

router.get('/saved', function (req, res) {
 res.json({
 	"message" : "ok"
 });
});

router.post('/saved', function (req, res){
	res.json({
		"message" : "ok"
	});
});

router.delete('/saved', function(req, res) {
	res.json({
		"message" : "ok"
	});
});

module.exports = router;