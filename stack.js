class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.array = [];
		this.length = 0;
	}

	peek() {
		return this.array[this.length - 1];
	}
	push(value) {
		this.array.push(value);

		this.length++;
	}

	pop() {
		this.array.pop();
		this.length--;
	}
}

const myStack = new Stack();
myStack.push(22);
console.log(myStack);

myStack.push(43);
console.log(myStack);

myStack.push(12);

console.log(myStack);
myStack.push(23);

console.log(myStack);
myStack.pop();
console.log(myStack);
console.log(myStack.peek());
