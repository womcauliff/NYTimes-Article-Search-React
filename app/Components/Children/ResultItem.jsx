import React from 'react';
class ResultItem extends React.Component {

	render() {
		return (
			<li className="list-group-item">
				<h3 className="list-group-item-heading">
					{this.props.articleTitle}
				</h3>
				<p className="list-group-item-text">
					{this.props.articleAbstract}
				</p>
				<a className="list-group-item-btn btn btn-info" href={this.props.articleLink} target="_blank">
					Read Article
				</a>
			</li>
		);
	}
}

export default ResultItem;