// import ReactDOMComponentTree from '../ReactDOMComponentTree';
import $ from 'jquery';
import instantiateReactComponent from '../instantiateReactComponent'

let globalIdCounter = 0;
let ReactDOMComponent = function(element) {
	this._currentElement = element;
	this._tag = this._currentElement.type;
}
Object.assign(ReactDOMComponent.prototype, {
	mountComponent: function(hostParent, container, context) {
		this._rootNodeID = globalIdCounter++;

		let document = container.ownerDocument;
		let el = document.createElement(this._tag);

		//应该是缓存el
		// ReactDOMComponentTree.precacheNode(this, el);

		let nextProps = this._currentElement.props;

		let tagOpen = '<' + this._tag + ' data-reactid='+this._rootNodeID;
		let content = '';
		let tagClose = '</' + this._tag + '>';

		var propNames = Object.keys(nextProps);
		propNames.forEach(propName => {
			if(/^on[A-Za-z]/.test(propName)) {
				let eventType = propName.replace('on', '').toLowerCase();
				$(document).delegate('[data-reactid="'+this._rootNodeID+'"]', eventType, this._rootNodeID, nextProps[propName]);
			}else if(propName != 'children') {
				tagOpen += ' ' + propName + '=' + nextProps[propName];
			}else {
				if(nextProps[propName] instanceof Array){
					nextProps[propName].forEach(e => {
						let childInstance = instantiateReactComponent(e);	
						content += childInstance.mountComponent(childInstance, container)
					})
				}else{
					let childInstance = instantiateReactComponent(nextProps[propName]);	
					content += childInstance.mountComponent(childInstance, container)
				}
			}
		})

		return tagOpen + '>' + content + tagClose;
	}
})
export default ReactDOMComponent;