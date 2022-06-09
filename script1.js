function reverseString(str) {
	const res = str.split('').reverse().join('');
	console.log(res);
}

reverseString('salam');

module.exports = reverseString;