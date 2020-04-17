import React, {Component} from 'react';
import './App.css';
import ColorPicker from './ColorPicker';
import BackGround from './Background';
import TextArea from './TextArea';

class App extends Component{
	constructor(){
		super();
		this.state = {
			bg1 : '#9013FE',
			bg2 : '#F5A623',
			txt : 'sent from app'
		}
	}
	onChange1 = (color, e) =>{
		this.setState({bg1:color.hex});
		this.resetTxt();
	}
	onChange2 = (color, e) =>{
		this.setState({bg2:color.hex});
		this.resetTxt();
	}
	resetTxt = () =>{
		const newTxt = `linear-gradient(to right, ${this.state.bg1}, ${this.state.bg2})`
		this.setState({txt: newTxt});
	}
	render(){
		return (
			<div>
				<BackGround bg1={this.state.bg1} bg2={this.state.bg2}>
					<ColorPicker bg={this.state.bg1} onChange={this.onChange1}/>
					<ColorPicker bg={this.state.bg2} onChange={this.onChange2}/>
					<TextArea txt={this.state.txt}/>
				</BackGround>
			</div>
		)
	}
}

export default App;
