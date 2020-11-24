let list1 = [ 0, 1, 1 ];

// get number of index in fib sequence

// recursive
function fiboRecursive(n) {
	if (n < 2) {
		return n;
	}
	let rec = fiboRecursive(n - 2) + fiboRecursive(n - 1);
	if (!list1.includes(rec)) list1.push(rec);
	return rec;
}
let list = [ 0, 1 ];

// dynamic prgraming
function fiboMaster() {
	let cache = {};
	return function fib(n) {
		if (n in cache) return cache[n];
		if (n < 2) return n;
		cache[n] = fib(n - 1) + fib(n - 2);
		list.push(cache[n]);
		return cache[n];
	};
}
let list3 = [ 0, 1 ];
// looping
function fibMaster2(n) {
	for (let i = list3.length; i <= n; i++) {
		list3.push(list3[i - 1] + list3[i - 2]);
	}
	return list3[n];
}

let fibMas = fiboMaster();
console.log('fast ' + fibMas(40));
console.log('fast ' + fibMaster2(40));
console.log('slow ' + fiboRecursive(40));
// console.log(list);
// console.log(list1);
// console.log(list3);
