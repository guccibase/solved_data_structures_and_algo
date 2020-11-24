const arrr = [ 0, 3, 4, 31, 56, 90, 555 ];
const arr = [ 4, 6, 30, 44, 67 ];

function merge(ar1, ar2) {
	let i = 0;
	let j = 0;
	let newAr = [];
	// check input
	if (!ar2 || (ar1 && ar2.length === 0)) return ar1;
	if (!ar1 || (ar2 && ar1.length === 0)) return ar2;

	while (ar1[i] || ar2[j]) {
		if (ar1[i] <= ar2[j]) {
			newAr.push(ar1[i]);
			i++;
		} else {
			newAr.push(ar2[j]);
			j++;
		}
	}
	return newAr;
}

console.log(merge(arr, arrr));
