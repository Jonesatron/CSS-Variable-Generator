const createVariableString = require('../createVariableString');

describe('Create Variable String', () => {
	it('createVariableString returns correct string', () => {
		const dummyFunctionCall = createVariableString('#454545', 'colorPrimary');
		const dummyReturnVariableString = `:root { --colorPrimary-100: #797979; --colorPrimary-200: #686868; --colorPrimary-300: #565656; --colorPrimary-400: #454545; --colorPrimary-500: #343434; --colorPrimary-600: #232323; --colorPrimary-700: #111111; }`;
		expect(dummyFunctionCall).toEqual(dummyReturnVariableString);
	});
});
