function getRenderedHostOrTextFromComponent(component) {
	var rendered;
	while (rendered = component._renderedComponent) {
		component = rendered;
	}
	return component;
}

function precacheNode(inst, node) {
	var hostInst = getRenderedHostOrTextFromComponent(inst);
	hostInst._hostNode = node;
	node[internalInstanceKey] = hostInst;
}

const ReactDOMComponentTree = {
	precacheNode
}

export default ReactDOMComponentTree;