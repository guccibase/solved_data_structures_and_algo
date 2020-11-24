function reverseRecursive(word) {
	let arr = word.split('');

	return reverseRecursive(word);
}

function reverseIterative(word) {
	let rev = '';
	let arrayOfWord = word.split('');
	for (let i = arrayOfWord.length - 1; i >= 0; i--) {
		rev = rev + arrayOfWord[i];
	}

	console.log(rev);

	return rev;
}

console.log(reverseIterative('chairman'));
