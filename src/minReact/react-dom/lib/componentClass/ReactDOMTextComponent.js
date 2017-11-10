'use strict';
let ReactDOMTextComponent = function(text) {
	this._currentElement = text;
}
Object.assign(ReactDOMTextComponent.prototype, {
	mountComponent: function() {
		return this._currentElement;
	}
})
export default ReactDOMTextComponent;