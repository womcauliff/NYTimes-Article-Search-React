var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
	nyt_id: {
		type: String,
		required: true,
		unique: true
	},
	title: {
		type:String,
		required:true,
		trim: true
	},
	previewText: {
		type:String,
		required:true,
		trim: true
	},
	web_url: {
		type: String,
		required: true,
		trim: true
	},
	pub_date: {
		type: Date
	}
},
{
  timestamps: true
});

// Creates the Article model with the ArticleSchema
var Article = mongoose.model('Article', ArticleSchema);

// Exports the model
module.exports = Article;
