'use strict';
let ReactDOMTextComponent = function(text) {
	this._currentElement = text;
}
Object.assign(ReactDOMTextComponent.prototype, {
	mountComponent: function() {
		console.log('this', this);
		return this._currentElement;
	}
})
export default ReactDOMTextComponent;