var express = require('express');
var router = express.Router();

var Article = require('../models/Article.js');

//retrieves all saved articles in the db
router.get('/saved', function (req, res) {
	Article.find({}, function(err, docs){
		if (err)
			console.log(err);
		else
			res.json(docs);
	});
});

//saves an article to the db
router.post('/saved', function (req, res){
	console.log(req.body);
	var newArticle = new Article(req.body);

	newArticle.save(function(err, doc){
		// log any errors
		if(err){
			console.log(err);
			res.json({
				"error" : err
			});
		}
		// otherwise
		else {
			res.json({
				"message" : "ok"
			});
		}
	});
});

//deletes a saved article from the db
router.delete('/saved/:id', function(req, res) {
	res.json({
		"message" : "ok"
	});
});

module.exports = router;