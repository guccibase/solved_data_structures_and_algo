// 0(n^2) solution
function moveZeros(array) {
	let arrayWithMovedZeros = [];
	if (array.length > 1) {
		for (let i = array.length - 1; i >= 0; i--) {
			console.log(array[i]);

			if (array[i] != 0) {
				arrayWithMovedZeros.unshift(array[i]);
			} else {
				arrayWithMovedZeros.push(array[i]);
			}
		}
	}
	return arrayWithMovedZeros;
}

// 0(n) solution
function moveZeros2(array) {
	let arrayWithZeros = [];
	let arrayWithMovedZeros = [];
	if (array.length > 1) {
		for (let i = 0; i < array.length; i++) {
			console.log(array[i]);

			if (array[i] != 0) {
				arrayWithMovedZeros.push(array[i]);
			} else {
				arrayWithZeros.push(array[i]);
			}
		}
		arrayWithMovedZeros = arrayWithMovedZeros.concat(arrayWithZeros);
	}
	return arrayWithMovedZeros;
}
console.log(moveZeros([ 0, 2, 3, 1, 0, 0, 3, 0 ]));

console.log(moveZeros2([ 0, 3, 3, 5, 0, 0, 9, 0 ]));
