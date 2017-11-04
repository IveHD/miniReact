import React from '@react';
import Hello from './Hello';
export default class App extends React.Component {
	componentWillMount() {
		console.log('App.componentWillMount...')
	}
	componentDidMount() {
		console.log('App.componentDidMount...')
	}

	render(){
		console.log('App.render...')
		return <div><Hello/><span>world</span></div>;
	}
}