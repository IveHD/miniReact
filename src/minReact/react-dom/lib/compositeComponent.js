'use strict';

import ReactDOMTextComponent from './componentClass/ReactDOMTextComponent';
import ReactDOMComponent from './componentClass/ReactDOMComponent';

const CompositeComponent = {
	createInstanceForText: (element) => {
		return new ReactDOMTextComponent(element);
	},
	createInstanceForDOM: (element) => {
		return new ReactDOMComponent(element);
	},
};

export default CompositeComponent;