function factory(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
	function createClass() {
		const Constructor = function(){
			console.log('asdasdasd');
		}
		return Constructor;
	}
	return createClass;
}

export default factory;