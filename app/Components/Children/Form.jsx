import React from 'react';
class Form extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			term: ""
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleChange(event){
		var newState = {};
		newState[event.target.id] = event.target.value;
		this.setState(newState);
	}

	handleClick(){
		console.log("CLICK");
		console.log(this.state.term);

		this.props.setTerm(this.state.term);
	}

	render(){

		return(

			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title text-center">Query</h3>
				</div>
				<div className="panel-body text-center">
					<form>
						<div className="form-group">
							<h4 className=""><strong>Topic</strong></h4>

							{/*Note how each of the form elements has an id that matches the state. This is not necessary but it is convenient.
								Also note how each has an onChange event associated with our handleChange event. 
							*/}
							<input type="text" className="form-control text-center" id="term" onChange= {this.handleChange} required/>
							<br />
							<button type="button" className="btn btn-primary" onClick={this.handleClick}>Submit</button>
						</div>
					</form>
				</div>
			</div>

		)
	}
}

export default Form;

