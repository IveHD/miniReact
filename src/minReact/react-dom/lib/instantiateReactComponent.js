'use strict';

import CompositeComponent from './CompositeComponent';
import ReactCompositeComponent from './ReactCompositeComponent';
function isInternalComponentType(type) {
	return typeof type === 'function' 
		&& typeof type.prototype !== 'undefined' 
		&& typeof type.prototype.mountComponent === 'function' 
		&& typeof type.prototype.receiveComponent === 'function';
}

let ReactCompositeComponentWrapper = function(element){
	this.construct(element);
}

const instantiateReactComponent = (element) => {
	let instance = null;
	if(typeof element === 'string' || typeof element === 'number'){
		instance = CompositeComponent.createInstanceForText(element);
	}else if(typeof element.type === 'string') {
		instance = CompositeComponent.createInstanceForDOM(element);
	}else if(isInternalComponentType(element.type)){
		instance = new element.type(element);
	}else{
		instance = new ReactCompositeComponentWrapper(element);
	}
	return instance;
}

Object.assign(ReactCompositeComponentWrapper.prototype, ReactCompositeComponent, {
	_instantiateReactComponent: instantiateReactComponent	
})

export default instantiateReactComponent;