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
			searchTerm: "",
			results: []
		}

		this.setTerm = this.setTerm.bind(this);
	}

	setTerm(term){
		this.setState({
			searchTerm: term
		})
	}

	componentDidUpdate(prevProps, prevState){

		if(prevState.searchTerm != this.state.searchTerm){
			console.log("UPDATED");

			helpers.runQuery(this.state.searchTerm)
				.then((data)=>{
					if (data != this.state.results)
					{
						console.log("HERE");
						console.log(data);

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
						<p className="text-center"><em>Enter a landmark to search for its exact address (ex: "Eiffel Tower").</em></p>
					</div>

					<div className="col-md-6">
					
						<Form setTerm={this.setTerm}/>

					</div>

					<div className="col-md-6">
				
						<Results results={this.state.results} />

					</div>

				</div>

			</div>
		)		
	}

}

export default Main;