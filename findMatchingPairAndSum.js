const arr1 = [ 1, 2, 3, 2, 4, 7, 9 ];
const arr2 = [ 1, 2, 4, 4 ];
const sum = 8;

// same number may appear twice
// neg can happen
// always integers

// first solve is O(n2)
// time comsuming

function hasPairWithSum(arr, sum) {
	console.log(arr);

	for (let i in arr) {
		for (let j = 1; j < arr.length; j++) {
			let s = arr[j] + arr[i];

			if (i != j && s === sum) {
				return true;
			}
		}
	}

	return false;
}

console.log(hasPairWithSum(arr1, sum));

// second solve
// binary search for sum in array
// still time consuming

// third solve
// linear solve

function hasPairWithSum1(arr, sum) {
	let mySet = new Set();

	for (let i = 0; i < arr.length; i++) {
		let number = sum - arr[i];
		if (mySet.has(arr[i])) {
			return true;
		}
		mySet.add(number);
	}

	return false;
}

console.log(hasPairWithSum1(arr1, sum));
