import React from '@react';
export default class Hello extends React.Component {
	getDefaultProps() {
		return {};
	}
	getInitialState() {
		return {}
	}
	componentWillMount() {
		console.log('Hello componentWillMount...')
	}
	componentDidMount() {
		console.log('Hello componentWillMount...')	
	}
	componentWillReceiveProps(nextProps) {
		console.log('Hello componentWillReceiveProps...')
	}
	componentWillUpdate(nextProps, nextState) {
		console.log('Hello componentWillUpdate...')	
	}
	render(){
		console.log('Hello render...')
		return (
			<div>Hello...</div>
		);
	}
}