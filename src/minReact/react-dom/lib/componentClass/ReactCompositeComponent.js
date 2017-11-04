import ReactNodeTypes from '../ReactNodeTypes';

let nextMountID = 1;
const ReactCompositeComponent = {
	construct: function(element) {
		this._currentElement = element;
	},
	mountComponent: function(hostParent, hostContainerInfo, context){
		let _this = this;
		this._context = context;
		this._mountOrder = nextMountID++;
		this._hostParent = hostParent;
		this._hostContainerInfo = hostContainerInfo;

		let publicProps = this._currentElement.props;
		let publicContext = context;

		let Component = this._currentElement.type;
		let doConstruct = Component.prototype && Component.prototype.isReactComponent;  //doConstruct == true ? 有状态的reactComponent : function
		let inst = this._constructComponent(doConstruct, publicProps, publicContext);
		let renderedElement = !doConstruct && (inst == null || inst.render == null) ? inst : undefined;
		inst.props = publicProps;
		inst.context = publicContext;
		inst.refs = {};
		//inst.updater = updateQueue;

		this._instance = inst;
		inst._reactInternalInstance = this;

		inst.state = inst.state || null;
		
		this._pendingStateQueue = null;
		this._pendingReplaceState = false;
		this._pendingForceUpdate = false;

		let markup = this.performInitialMount(renderedElement, hostParent, hostContainerInfo, context);
		if(inst.componentDidMount){
			inst.componentDidMount();
		}
		return markup;
	},
	_constructComponent: function(doConstruct, publicProps, publicContext){
		let Component = this._currentElement.type;
		if(doConstruct){
			return new Component(publicProps, publicContext);
		}else{
			return Component(publicProps, publicContext);
		}
	},
	performInitialMount: function(renderedElement, hostParent, hostContainerInfo, context) {
		var inst = this._instance;

		//这里是componentWillMount执行的时机
		if(inst.componentWillMount){
			inst.componentWillMount();
		}

		//当在componentWillMount中有state操作的时候在这里执行
		if (this._pendingStateQueue) {
			inst.state = this._processPendingState(inst.props, inst.context);
		}

		if (renderedElement === undefined) {			//不是一个有状态的reactComponent
			renderedElement = inst.render();
		}

		let nodeType = ReactNodeTypes.getType(renderedElement);
		this._renderedNodeType = nodeType;

		var child = this._instantiateReactComponent(renderedElement, nodeType !== ReactNodeTypes.EMPTY /* shouldHaveDebugID */);
		return child.mountComponent(hostParent, hostContainerInfo, context);
	},
	_processPendingState: function(props, context) {
		let inst = this._instance;
		let queue = this._pendingStateQueue;
		let replace = this._pendingReplaceState;
		this._pendingReplaceState = false;
		this._pendingStateQueue = null;
		if(!queue) {
			return inst.state;
		}
		if(replace && queue.length === 1) {
			return queue[0];
		}

		let nextState = Object.assing({}, replace ? queue[0] : inst.state);
	    for (var i = replace ? 1 : 0; i < queue.length; i++) {
			let partial = queue[i];
			Object.assing(nextState, typeof partial === 'function' ? partial.call(inst, nextState, props, context) : partial);
		}

		return nextState;
	}
}

export default ReactCompositeComponent;