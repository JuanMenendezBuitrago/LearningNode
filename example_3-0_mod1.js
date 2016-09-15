var globalVariable;

exports.setGlobal = function(val) {
	globalVariable = val;
};

exports.getGlobal = function() {
	return globalVariable;
};