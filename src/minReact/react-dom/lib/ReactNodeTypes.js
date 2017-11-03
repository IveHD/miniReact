var ReactNodeTypes = {
	HOST: 0,
	COMPOSITE: 1,
	EMPTY: 2,

	getType: function (node) {
		if (node === null || node === false) {
			return ReactNodeTypes.EMPTY;
		} else if (typeof node.type === 'function') {
			return ReactNodeTypes.COMPOSITE;
		} else {
			return ReactNodeTypes.HOST;
		}
	}
};

module.exports = ReactNodeTypes;