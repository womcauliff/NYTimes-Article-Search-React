import React from 'react';
class Form extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			topic: "",
			startYear: "",
			endYear: ""
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
		this.props.setQueries(this.state.topic, this.state.startYear, this.state.endYear);
	}

	render(){

		return(

			<div className="panel panel-default">
				<div className="panel-heading">
					<h2 className="panel-title text-center">Search</h2>
				</div>
				<div className="panel-body text-center">
					<div>
						{/*
							Each form element has an id that matches the state.
							Also, each form element has an onChange event associated with the handleChange event.
						*/}
						<div className="form-group">
							<label htmlFor="topic">Topic</label>
							<input type="text" className="form-control text-center" id="topic" onChange={this.handleChange} required/>
						</div>
						<div className="form-group">
							<label htmlFor="startYear">Start Year (Optional)</label>
							<input type="text" className="form-control text-center" id="startYear" onChange={this.handleChange} />
						</div>
						<div className="form-group">
							<label htmlFor="endYear">End Year (Optional)</label>
							<input type="text" className="form-control text-center" id="endYear" onChange={this.handleChange} />
						</div>
						<button type="submit" className="btn btn-primary" onClick={this.handleClick}>Submit</button>
					</div>
				</div>
			</div>

		)
	}
}

export default Form;