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
						articleID={result._id}
						articleHeadlineMain={result.headline.main}
						articleHeadlineKicker={result.headline.kicker}
						articleLink={result.web_url}
						articleAbstract={result.abstract || result.lead_paragraph}
						articlePubDate={result.pub_date}
					/>
		});
		return(
			<div className="panel panel-default">
				<div className="panel-heading">
					<h2 className="panel-title text-center">Results</h2>
				</div>
				<ul className="list-group">
					{resultItems}
				</ul>
			</div>
		);
	}
}

// Export the component back for use in other files
export default Results;