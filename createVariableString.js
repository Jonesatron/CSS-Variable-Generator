const Color = require('color');

function createVariableString(baseColor, variableName) {
	var color = Color(baseColor);

	return `:root { --${variableName}-100: ${color
		.lighten(0.75)
		.hex()}; --${variableName}-200: ${color
		.lighten(0.5)
		.hex()}; --${variableName}-300: ${color
		.lighten(0.25)
		.hex()}; --${variableName}-400: ${color.hex()}; --${variableName}-500: ${color
		.darken(0.25)
		.hex()}; --${variableName}-600: ${color
		.darken(0.5)
		.hex()}; --${variableName}-700: ${color.darken(0.75).hex()}; }`;
}

module.exports = createVariableString;
