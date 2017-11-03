import reactElement from './reactElement';
import createClass from './createClass';
import ReactBaseClasses from './ReactBaseClasses';
const React = {
	createClass: createClass,
	Component: ReactBaseClasses.Component,
	createElement: reactElement.createElement
};

export default React;