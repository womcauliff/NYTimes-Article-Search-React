// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require('axios');

// Helper Functions (in this case the only one is runQuery)
var helpers = {

	runQuery: function(userQuery, beginYear, endYear){
		// NYTimes API
		var APIKEY = "0091c0edc80b46b8aab02776ae068c61";
		var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

		var params = {};
		params['api-key'] = APIKEY;
		params['q'] = userQuery.trim();
		if(beginYear !== undefined && beginYear != ""){
		   params['begin_date'] = beginYear.trim() + '0101';
		}
		if(endYear !== undefined && endYear != ""){
		   params['end_date'] = endYear.trim() + '0101';
		}
		console.log(params);
		return axios.get(queryURL, {
			params : params
		}).then(function(response){
			console.log(response);
			return response.data.response.docs;
		});
	},
	postSavedArticle: function(nyt_id, title, previewText, web_url, pub_date) {
		return axios.post('/api/saved', {
			nyt_id: nyt_id,
			title: title,
			previewText: previewText,
			web_url: web_url,
			pub_date: pub_date
		}).then(function(response){
			console.log(response);
			return response;
		});
	}
}

// We export the helpers function (which contains getGithubInfo)
module.exports = helpers;