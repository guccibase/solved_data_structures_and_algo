// Given an array of integers nums and integer EventTarget, return indices such that they add up to target

function twoSum(array, target) {
	// check input
	if (!array || !target) return 'uhuhh';

	let mySet = new Set();
	let outPut = [];
	for (let i = 0; i < array.length; i++) {
		// find second indix
		let secondIndex = target - array[i];
		if (mySet.has(array[i])) {
			outPut = [ secondIndex, array[i] ];

			return outPut;
		}

		mySet.add(secondIndex);
	}
	return mySet;
}

console.log(twoSum([ 1, 3, 7, 5, 4, 6, 2, 4, 5 ], 4));
