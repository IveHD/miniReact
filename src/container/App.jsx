import React from '@react';
import Hello from './Hello';
export default class App extends React.Component {
	constructor(props){
		super()
		console.log('App constructor...')
	}
	getDefaultProps() {
		return {};
	}
	getInitialState() {
		return {}
	}
	componentWillMount() {
		console.log('App componentWillMount...')
	}
	componentDidMount() {
		console.log('App componentDidMount...')	
	}
	componentWillReceiveProps(nextProps) {
		console.log('App componentWillReceiveProps...')
	}
	componentWillUpdate(nextProps, nextState) {
		console.log('App componentWillUpdate...')	
	}
	render(){
		console.log('App render...')
		return (
			<div><Hello pro="pp"/></div>
		);
	}
}