// Ceci n'est pas un commentaire

// appris: Il faut binder les callback dans le constructor du parent. 
// on peut forcer un render via le state(setState fléchée). 
// on peut faire persister un event. 
// Ne pas utiliser de state dans un composant quand son render n'est pas utilisé.

import React, { Component } from 'react'
import Input1 from './Input1'
import Input2 from './Input2'
import Add from './Add'
import Multiply from './Multiply'
import Subtract from './Subtract'
import Divide from './Divide'
import Result from './Result'
import Clear from './Clear'

class App extends Component {

	constructor() {
		super()
		this.receiveData1 = this.receiveData1.bind(this);
		this.receiveData2 = this.receiveData2.bind(this);
		this.receiveAdd = this.receiveAdd.bind(this);
		this.receiveMultiply = this.receiveMultiply.bind(this);
		this.receiveSubtract = this.receiveSubtract.bind(this);
		this.receiveDivide = this.receiveDivide.bind(this);
		this.receiveClear = this.receiveClear.bind(this);
		this.state = {

			data1 : "",
			data2 : "",
			symbol : "",
			result : "",
			clear : false
		}
	}
	receiveData1(data1) { 
		
		this.setState((state) => {
			return { data1: Number(data1) }
		})
		console.log("data1 = " + data1);
	
	}
	receiveData2(data2) {
		
		this.setState((state) => {
			return { data2 : Number(data2) }
		})
		console.log("data2 = " + data2);

	}
	receiveAdd(add) {
		
		this.setState((state) => {
			return { symbol : add }
		})
	}
	receiveMultiply(multiply) {
	
		this.setState((state) => { 
			return { symbol : multiply } 
		});
	}
	receiveSubtract(subtract) {
		
		this.setState((state) => { 
			return { symbol : subtract } 
		});
	}
	receiveDivide(divide) {
		
		this.setState((state) => { 
			return { symbol : divide } 
		});
	}
	receiveClear(clear) {

		this.setState((state) => {
			
			return { data1 : clear, data2 : clear, symbol : clear, result : clear, clear : true }
		})
		
		console.log(this.state)
	}
	componentDidUpdate() {

		if(Number.isNaN(this.state.data1) == true) {

			alert("Veuillez ne saisir que des valeurs numériques !");

			this.setState((state) => { 

				return { data1 : "" }
			})
		}

		if(Number.isNaN(this.state.data2) == true) {

			alert("Veuillez ne saisir que des valeurs numériques !");

			this.setState((state) => { 

				return { data2 : "" }
			})
		}

		if (this.state.clear === true) {
			
			this.setState({ clear : false })

			console.log("App did update")
		}
	}
	render() {

		return (   

			<div>
				<Input1 callback={this.receiveData1} value={ this.state.data1 }/>
				<div className="symbols">
					<Add callback={this.receiveAdd} />
					<Multiply callback={this.receiveMultiply} />
					<Subtract callback={this.receiveSubtract} />
					<Divide callback={this.receiveDivide} />
				</div>
				<Input2 callback={this.receiveData2} value={ this.state.data2 } />
				<div className="resultAndClear">
					<Result 
						value1={this.state.data1} 
						value2={this.state.symbol} 
						value3={this.state.data2} 
						value4={this.state.result}
						value5={this.state.clear}
					/>
					<Clear callback={ this.receiveClear } />
				</div>
			</div>

		)
	}
}

export default App;