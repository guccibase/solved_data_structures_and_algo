function longestWord(sen) {
	let arr = sen.split(' ');
	if (arr.length < 2) return sen;
	let word = arr[0];

	for (let i = 0; i < arr.length; i++) {
		if (i > 0) if (arr[i].length > word.length) word = arr[i];
	}

	return word;
}

console.log(
	longestWord('my sfsfsdfsdfsdwddddddname namake is telehone teske hdhdhdhdhdhdhd ddd tesken sdsdfsdfsdfsdfdsfsd')
);
