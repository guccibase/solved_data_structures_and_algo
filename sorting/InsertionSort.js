const numbers = [ 104, 2004, 443, 5545, 0003, 233211, 99, 44, 6, 2, 0, 8, 88, 43, 1, 5, 63, 87, 283, 4, 0 ];

function sort(array) {
	if (array.length < 2) return array;

	for (let i = 0; i < array.length; i++) {
		if (array[i] < array[0]) {
			let h = array[0];
			array[0] = array[i];
			array[i] = array[0];
		} else {
			for (let j = 0; j < array.length; j++) {
				if (array[j] > array[j + 1]) {
					let h = array[j];
					array[j] = array[j + 1];
					array[j + 1] = h;
				}
			}
		}
	}

	return array;
}

sort(numbers);

console.log(numbers);
