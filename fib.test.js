const fib = require('./fib');

describe('the fib function', () => {
	it('should return an array', () => {
		const result = fib(2);
		expect(result).toBeInstanceOf(Array);
	});

	it('should return an array of n numbers', () => {
		const result = fib(2);
		expect(result.length).toBe(2);
		result.forEach((num) => {
			expect(typeof num).toEqual('number');
		});
	});
});