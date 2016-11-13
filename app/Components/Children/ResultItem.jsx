import React from 'react';
class ResultItem extends React.Component {

	render() {
		return <li>
			<a href="{this.props.articleLink}">{this.props.articleTitle}</a>
		</li>
	}
}