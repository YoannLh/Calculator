// Ceci n'est pas un commentaire

import React, { Component } from 'react'

class Clear extends Component {

	handleClick(event) {

		event.persist();

		console.log("clear")

		this.props.callback("");

	}

	render() {

		return <button className="btn btn-light" onClick={(event) => this.handleClick(event)}>Clear</button>
	}
}

export default Clear;