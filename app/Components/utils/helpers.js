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

	}

}

// We export the helpers function (which contains getGithubInfo)
module.exports = helpers;