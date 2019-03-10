const createVariableString = require('./createVariableString');

function appendVariableStringToHead(baseColor, variableName) {
	const variableString = createVariableString(baseColor, variableName);
	const styleTarget = document.getElementById('root-style');
	styleTarget.innerText += variableString;
}

module.exports = appendVariableStringToHead;
