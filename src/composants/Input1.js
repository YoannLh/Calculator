// Ceci n'est pas un commentaire

import React, { Component } from 'react'

class Input1 extends Component {
	
	handleChange(event) {

		// erreur: essayer de passer par le state. IL n'y a pas de rendering en jeu dans ce composant, donc pas d'utilité.

		event.persist();

		this.props.callback(event.target.value);

	}
	render() {

		return (

			<div className="input1">
				<input 
					className="form-control" 
					placeholder="input 1" 
					onChange={(event) => this.handleChange(event)}
					value={ this.props.value }
				/>
			</div>

		)
	}
}

export default Input1;