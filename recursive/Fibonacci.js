function fibRecursive(n) {
	if (n < 2) return n;

	return fibRecursive(n - 1) + fibRecursive(n - 2);
}

function fibIterative(n) {
	let fib = [ 0, 1 ];

	let sum = 0;
	for (let i = 0; i < n - 1; i++) {
		fib.push(fib[i] + fib[i + 1]);
	}

	return fib[n];
}

console.log(fibIterative(25));
console.log(fibRecursive(25));
