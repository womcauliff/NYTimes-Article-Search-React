import React from 'react';
import helpers from '../utils/helpers.js';

class ResultItem extends React.Component {

	constructor(props) {
		super(props);

		var fullTitle = "";
		if(this.props.articleHeadlineKicker) {
			fullTitle = this.props.articleHeadlineKicker + "; ";
		}
		fullTitle += this.props.articleHeadlineMain;
		this.state = {
			articleTitle : fullTitle
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		helpers.postSavedArticle(
			this.props.articleID,
			this.state.articleTitle,
			this.props.articleAbstract,
			this.props.articleLink,
			this.props.articlePubDate
		).then(function(response){
			console.log(response);
		}.bind(this));
	}

	render() {
		return (
			<li className="list-group-item">
				<h3 className="list-group-item-heading">
					{this.state.articleTitle}
				</h3>
				<p className="list-group-item-text">
					{this.props.articleAbstract}
				</p>
				<a className="list-group-item-btn btn btn-info" href={this.props.articleLink} target="_blank">
					Read Article
				</a>
				<button className="list-group-item-btn btn btn-info" onClick={this.handleClick}>Save Article</button>
			</li>
		);
	}
}

export default ResultItem;