
const REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;
const RESERVED_PROPS = {
	key: true,
	ref: true,
	__self: true,
	__source: true
};
let ReactElement = function(type, key, ref, self, source, owner, props) {
	let element = {
		// This tag allow us to uniquely identify this as a React Element
		$$typeof: REACT_ELEMENT_TYPE,

		// Built-in properties that belong on the element
		type: type,
		key: key,
		ref: ref,
		props: props,

		// Record the component responsible for creating this element.
		_owner: owner
	}
	return element;
};

ReactElement.createElement = function(type, config, children) {
	let propName;
	config = config || {};
	let props = {};
	let key = null;
	let ref = null;
	let self = null;
	let source = null;

	if(config != null){
		props = {};
		key = config.key+'' || null;
		ref = config.ref || null;
		self = config.__self || null;
		source = config.__source || null;
		for(propName in config){
			if(config.hasOwnProperty(propName) && !RESERVED_PROPS.hasOwnProperty(propName)){
				props[propName] = config[propName];
			}
		}
	}

	let childrenLength = arguments.length - 2;
	if(childrenLength === 1){
		props.children = children;
	}else if(childrenLength > 1){
		let childArray = Array(childrenLength);
		for(let i = 0; i < childrenLength; i++){
			childArray[i] = arguments[i+2];
		}
		props.children = childArray;
	}

	if(type && type.defaultProps){
		let defaultProps = type.defaultProps;
		for(propName in defaultProps ){
			if(props[propName] === undefined){
				props[propName] = defaultProps[propName];
			}
		}
	}
	return ReactElement(type, key, ref, self, source, null, props);
}
export default ReactElement;