function ReactComponent(props, context, updater) {
	this.props = props;
	this.context = context;
	this.refs = {};
	// We initialize the default updater but the real one gets injected by the
	// renderer.
	this.updater = updater || {};
}
ReactComponent.prototype.isReactComponent = {};

ReactComponent.prototype.setState = function (partialState, callback) {

};
export default {
	Component: ReactComponent
};