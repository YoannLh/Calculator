// Ceci n'est pas un commentaire

import React, { Component } from 'react'

class Result extends Component {
	
	constructor(props) {

		super(props)
		this.state = {
			
			value1 : "",
			symbol : "",
			value3 : "",
			result : ""
		}
	}
	handleClick(event) {

		console.log(this.state)
		
		this.setState((state) => {

			switch(this.props.value2) { 

			case "+" :
				return { result : this.props.value1 + this.props.value3 }
			break
			case "-" :
				return { result : this.props.value1 - this.props.value3 }
			break
			case "*" :
				return { result : this.props.value1 * this.props.value3 }
			break
			case "/" :
				return { result : this.props.value1 / this.props.value3 }
			break
			default :
				console.log("error result")
			}
		})

		console.log(this.state)

		event.persist();
	}
	componentDidUpdate() {
		
		if(this.props.value5 === true) {

			console.log("did update")

			this.setState((state) => {
	
				return { symbol : this.props.value2, result : this.props.value4 }
			})
		}	
	}
	render() { 

		return (

			<div>
				<button className="btn btn-light" onClick={(event) => this.handleClick(event)}> = </button>
				<div className="result">{ this.state.result }</div>	
			</div>

		)
	}
}

export default Result;