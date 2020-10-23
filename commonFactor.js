const arr1 = [ 'a', 'b', 2, 'vj', 's' ];
const arr2 = [ '2', 'd', '2', '3', 'v' ];

// Solutions
// O(a * b)
// O(a + b)
// build in solution

// first solution
function commonFactor(ar1, ar2) {
	if (ar1)
		for (let i in ar1) {
			if (ar2)
				for (let j in ar2) {
					if (ar1[i] === ar2[j]) return true;
				}
		}
	return false;
}

console.log(commonFactor(arr1, arr2));

//second solution
function commonFactor2(ar1, ar2) {
	let map = {};

	if (ar1)
		for (let i in ar1) {
			if (!map[ar1[i]]) map[ar1[i]] = true;
		}

	if (ar2)
		for (let j in ar2) {
			if (map[ar2[j]]) return true;
		}

	return false;
}

console.log(commonFactor2(arr1, arr2));

//third solution
function commonFactor3(ar1, ar2) {
	console.log(ar1.some((item) => ar2.includes(item)));
}

function common(ar, ar2) {
	return ar.some((item) => ar2.includes(item));
}

common(arr1, arr2);
console.log(common(arr1, arr2));

commonFactor3(arr1, arr2);
