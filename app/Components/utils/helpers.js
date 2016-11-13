// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require('axios');

// NYTimes API
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var APIKEY = "0091c0edc80b46b8aab02776ae068c61";

// Helper Functions (in this case the only one is runQuery)
var helpers = {

	runQuery: function(userQuery, beginYear, endYear){

		console.log(userQuery);

		queryURL = queryURL + '?' 
			+ 'api-key=' + APIKEY
			+ '&' +'q=' + userQuery;

		if(beginYear !== undefined && beginYear != ""){
		   queryURL = queryURL + '&' + 'begin_date=' + beginYear + '0101';
		}
		if(endYear !== undefined && endYear != ""){
		   queryURL = queryURL + '&' + 'end_date=' + endYear + '0101';
		}
		console.log(queryURL);
		return axios.get(queryURL)
			.then(function(response){
				console.log(response);
				return response.data.response.docs;
		})

	}

}


// We export the helpers function (which contains getGithubInfo)
module.exports = helpers;