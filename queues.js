class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queues {
	constructor() {
		this.first = null;
		this.array = [];
		this.length = 0;
	}

	peek() {
		return this.first;
	}
	enqueue(value) {
		this.array.push(value);
		this.first = this.array[0];
		this.length++;
	}

	dequeue() {
		if (this.length > 0) {
			this.array.shift();

			this.length--;
			this.first = this.array[0];
		}
		if (this.length === 0) {
			this.first = null;
		}
	}
}

const myQueus = new Queues();
myQueus.enqueue(22);
console.log(myQueus);

myQueus.enqueue(43);
console.log(myQueus);

myQueus.enqueue(12);

console.log(myQueus);
myQueus.enqueue(23);

console.log(myQueus);
myQueus.dequeue();
console.log(myQueus);
console.log(myQueus.peek());
myQueus.dequeue();
console.log(myQueus);
console.log(myQueus.peek());
myQueus.dequeue();
console.log(myQueus);
console.log(myQueus.peek());
myQueus.dequeue();
console.log(myQueus);
console.log(myQueus.peek());
myQueus.dequeue();
