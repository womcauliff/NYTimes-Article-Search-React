import React from 'react';
import ResultItem from './ResultItem.jsx';
class Results extends React.Component{
	
	constructor(props){
		super(props);
	}

	render(){
		var resultItems = this.props.results.map(function(result) {
			return <ResultItem 
						key={result._id}
						articleLink={result.web_url}
						articleTitle={result.headline.main}
					/>
		});
		return(
			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title text-center">Results</h3>
				</div>
				<div className="panel-body text-center">
					<h3>Articles</h3>
					<ul>
						{resultItems}
					</ul>
				</div>
			</div>
		);
	}
}




// Export the component back for use in other files
export default Results;