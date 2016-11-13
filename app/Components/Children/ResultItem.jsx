import React from 'react';
class ResultItem extends React.Component {

	render() {
		return (
			<li>
				<a href={this.props.articleLink} target="_blank">
					{this.props.articleTitle}
				</a>
			</li>
		);
	}
}

export default ResultItem;