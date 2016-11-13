import React from 'react';

// Import sub-components
import Form from './Children/Form.jsx';
import Results from './Children/Results.jsx';

// Helper Function
import helpers from './utils/helpers.js';

class Main extends React.Component{

	constructor(props){

		super(props);

		this.state = {
			queryTopic: "",
			queryStartYear: "",
			queryEndYear: "",
			results: []
		}

		this.setQueries = this.setQueries.bind(this);
	}

	setQueries(queryTopic, queryStartYear, queryEndYear){
		this.setState({
			queryTopic: queryTopic,
			queryStartYear: queryStartYear,
			queryEndYear: queryEndYear
		});
	}

	componentDidUpdate(prevProps, prevState){

		if(
			prevState.queryTopic != this.state.queryTopic ||
			prevState.queryStartYear != this.state.queryStartYear ||
			prevState.queryEndYear != this.state.queryEndYear
		){
			helpers.runQuery(this.state.queryTopic, this.state.queryStartYear, this.state.queryEndYear)
				.then((data)=>{
					if (data != this.state.results)
					{
						this.setState({
							results: data
						})		
					}

				// This code is necessary to bind the keyword "this" when we say this.setState 
				// to actually mean the component itself and not the runQuery function.
				})		
		}
	}

	render(){
		return(

			<div className="container">

				<div className="row">

					<div className="jumbotron">
						<h1 className="text-center">NYTimes Article Search</h1>
						<p className="text-center"><em>Search New York Times articles from Sept. 18, 1851 to today.</em></p>
					</div>

					<div className="col-md-12">
					
						<Form setQueries={this.setQueries}/>

					</div>

					<div className="col-md-12">
				
						<Results results={this.state.results} />

					</div>

				</div>

			</div>
		)		
	}

}

export default Main;