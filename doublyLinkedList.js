class DoublyLinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null,
			previous: null
		};
		this.tail = this.head;
		this.length = 1;
	}

	append(value) {
		let newNode = {
			value: value,
			next: null,
			previous: this.tail
		};
		this.tail.next = newNode;
		this.tail = this.tail.next;
		this.length++;
	}

	prepend(value) {
		let newNode = {
			value: value,
			next: this.head,
			previous: null
		};
		this.head.previous = newNode;
		this.head = newNode;
		this.length++;
	}

	insert(index, value) {
		if (index <= 0) return this.prepend(value);
		if (index >= this.length - 1) return this.append(value);

		let newNode = {
			value: value,
			next: null,
			previous: null
		};

		// * - * - 2* - *
		//         \*/

		let counter = 0;
		let indexz = index - 1;
		let currentNode = this.head;

		while (counter < indexz) {
			currentNode = currentNode.next;
			counter++;
		}
		let holdingNode = currentNode.next;
		currentNode.next = newNode;
		newNode.next = holdingNode;
		newNode.previous = currentNode;
		holdingNode.next.previous = newNode;

		this.length++;
	}

	printDoublyLinkedList() {
		let array = [];
		array.push(this.head.value);
		console.log(array);
	}
}

let list = new DoublyLinkedList(1);
list.append(3);
list.append(4);
list.append(33);
list.prepend(44);
list.insert(3, 5);
console.log(list);

//TO DO
// remove function
