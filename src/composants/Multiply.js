// Ceci n'est pas un commentaire

import React, { Component } from 'react'

class Multiply extends Component { 

	handleClick(event) {  

		event.persist();

		this.props.callback("*")

	}

	render() {
	
		return <button className="btn btn-light" onClick={(event) => this.handleClick(event)} >x</button>
	}	
}

export default Multiply;