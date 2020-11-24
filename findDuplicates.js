var containsDuplicates = (array) => {
	if (array.length < 2) return false;
	let mySet = new Set();
	for (let i = 0; i < array.length; i++) {
		if (mySet.has(array[i])) {
			return true;
		}
		mySet.add(array[i]);
	}

	return false;
};

console.log(containsDuplicates([ 3, 0, 4, 5, 2 ]));
