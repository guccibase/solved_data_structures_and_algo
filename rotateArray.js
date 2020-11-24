function rotate(array, k) {
	if (array < 2) return array;
	let lastItems = [];
	let newArray = [];
	let steps = array.length;
	steps = steps - k;

	let index = 0;
	while (index != k && array[steps]) {
		lastItems.push(array[steps]);

		array.pop();
		index++;
		steps++;
	}

	newArray = lastItems.concat(array);

	return newArray;
}

console.log(rotate([ 2, 3, 5, 2, 4, 7, 8, '6' ], 2));
