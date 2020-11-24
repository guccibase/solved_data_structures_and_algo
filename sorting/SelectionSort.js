const numbers = [ 104, 2004, 443, 5545, 3, 233211, 99, 44, 6, 2, 0, 8, 88, 43, 1, 5, 63, 87, 283, 4, 0 ];

function sort(arr) {
	let array = arr;

	for (let i = 0; i < array.length; i++) {
		let temp = array[i];
		let n = i;
		for (let j = i + 1; j < array.length; j++) {
			if (array[n] > array[j]) {
				n = j;
			}
		}
		array[i] = array[n];
		array[n] = temp;
	}

	return array;
}

console.log(sort(numbers));
