// Ceci n'est pas un commentaire

import React, { Component } from 'react'

class Input2 extends Component {

	handleChange(event) {

		event.persist();

		this.props.callback(event.target.value);
	}
	render() {

		return (

			<div className="input2">
				<input 
					className="form-control" 
					placeholder="input 2" 
					onChange={(event) => this.handleChange(event)} 
					value={ this.props.value }
				/>
			</div>

		)
	}
}

export default Input2;