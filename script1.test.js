const  reverseString = require('./script1');

test('This is the reverse of string', () => {
	expect(reverseString ('salam')).not.toBe('malas');
});