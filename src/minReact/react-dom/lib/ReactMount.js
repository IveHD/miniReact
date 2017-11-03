'use strict';

import instantiateReactComponent from './instantiateReactComponent';

var ReactMount = {
	render: function(nextElement, container){
		let instance = instantiateReactComponent(nextElement);
		var markup = instance.mountComponent(instance, container, {context: 'context'});
		container.innerHTML = markup;
	}
}
export default ReactMount;