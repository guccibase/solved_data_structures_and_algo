function findFactorialRecursive(number) {
	if (1 === number) {
		return number;
	}
	return findFactorialRecursive(number - 1) * number;
}

function findFactorialInterative(number) {
	let factor = number;
	for (let i = number - 1; i >= 1; i--) {
		factor = factor * i;
	}

	return factor;
}

console.log(findFactorialInterative(2));
console.log(findFactorialRecursive(2));
