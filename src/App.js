import React, {Component} from 'react';
import './App.css';
import ColorPicker from './ColorPicker';
import BackGround from './Background';
import TextArea from './TextArea';
import Groovy from './Groovy';
import NavBar from './NavBar';
import Content from './Content';

class App extends Component{
	constructor(){
		super();
		this.state = {
			bg1 : '#9013FE',
			bg2 : '#F5A623',	
			animate: false	
		}
		this.state.txt = `linear-gradient(to right, ${this.state.bg1}, ${this.state.bg2})`; 
	}
	initAnimation = (e) => {
		if(this.animate){
			this._stopAnimation();
			e.target.innerHTML = `Make Background Groovy!`;
		}
		else{
			this.timer = setInterval(this._startAnimation, 500);
			e.target.innerHTML = `Stop the groove!`;
		}
		this.animate = !this.animate;
	}
	_stopAnimation = () =>{
		clearInterval(this.timer);
	}
	_startAnimation = () =>{
		const c1 = this._getRandomColor();
		const c2 = this._getRandomColor();
		this.setState({
			bg1: c1,
			bg2: c2
		});
	}
	_getRandomColor(){
		return `#${Math.floor(Math.random()*16777215).toString(16)}`;
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
		const bg = `linear-gradient(to right, ${this.state.bg1}, ${this.state.bg2})`
		this.setState({txt: bg});
	}
	render(){
		return (
			<div>
				<BackGround txt={this.state.txt} bg1={this.state.bg1} bg2={this.state.bg2}>
					<NavBar/>
					<ColorPicker bg={this.state.bg1} onChange={this.onChange1}/>
					<ColorPicker bg={this.state.bg2} onChange={this.onChange2}/>
					<Groovy onClick={this.initAnimation}/>
					<TextArea txt={this.state.txt}/>
					<Content/>
				</BackGround>
			</div>
		)
	}
}

export default App;
