const Color = require('color');

function createVariableString(baseColor, variableName) {
	var color = Color(baseColor);

	return `:root { --${variableName}-100: ${color.lighten(
		0.75
	)}; --${variableName}-200: ${color.lighten(
		0.5
	)}; --${variableName}-300: ${color.lighten(
		0.25
	)}; --${variableName}-400: ${color}; --${variableName}-500: ${color.darken(
		0.25
	)}; --${variableName}-600: ${color.darken(
		0.5
	)}; --${variableName}-700: ${color.darken(0.75)}; }`;
}

function appendVariableStringToHead(baseColor, variableName) {
	const variableString = createVariableString(baseColor, variableName);
	const styleTarget = document.getElementById('root-style');
	styleTarget.innerText = variableString;
}

module.exports = appendVariableStringToHead;
