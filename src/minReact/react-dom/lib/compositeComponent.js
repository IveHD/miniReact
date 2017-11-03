'use strict';

import TextComponentClass from './componentClass/textComponentClass';
import DOMComponentClass from './componentClass/DOMComponentClass';

const CompositeComponent = {
	createInstanceForText: (element) => {
		return new TextComponentClass(element);
	},
	createInstanceForDOM: (element) => {
		return new DOMComponentClass(element);
	},
};

export default CompositeComponent;