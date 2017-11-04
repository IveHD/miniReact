import React from '@react';
export default class Hello extends React.Component {
	componentWillMount() {
		console.log('Hello.componentWillMount...')
	}
	componentDidMount() {
		console.log('Hello.componentDidMount...')
	}
	render(){
		console.log('Hello.render...')
		return <div hello="hello" style={{border: '1px red solid'}}>hello</div>;
	}
}