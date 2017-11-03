import React from '@react';
import Hello from './Hello';
export default class App extends React.Component {
	getInitialState() {
		return {};
	}
	componentDidMount() {
		console.log('asdasd')
	}

	render(){
		return <div><Hello/><span>world</span></div>;
	}
}