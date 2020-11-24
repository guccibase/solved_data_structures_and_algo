class LinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null
		};
		this.tail = this.head;

		this.length = 1;
		console.log(this.head);
		console.log(this.tail);
		console.log(this.length);
	}

	append(value) {
		let newNode = {
			value: value,
			next: null
		};
		console.log(newNode);

		this.tail.next = newNode;
		console.log(this.tail.next);

		this.tail = newNode;
		console.log(this.tail);

		this.length++;
		console.log(this.length);
		return this;
	}

	prepend(value) {
		let newNode = {
			value: value,
			next: null
		};

		newNode.next = this.head;
		this.head = newNode;
		this.length++;
		return this;
	}

	insert(index, value) {
		// * - * - * - *
		//      \ *

		if (index >= this.length) {
			this.append(value);
			return;
		}
		if (index < 1) {
			this.prepend(value);
			return;
		}
		let newNode = {
			value: value,
			next: null
		};

		let counter = 1;
		let currentNode = this.head;

		while (counter !== index) {
			currentNode = currentNode.next;
			counter++;
		}
		let nodeHolder = currentNode.next;
		newNode.next = nodeHolder;

		currentNode.next = newNode;
		console.log(currentNode.next);
		console.log(newNode);

		this.length++;
		return;
	}

	remove(index) {
		let counter = 1;
		let currentNode = this.head;
		let beforeNode = this.head;
		if (index >= this.length || index < counter) return;

		// 0 1 .2 3 4 5
		while (counter != index) {
			currentNode = currentNode.next;
			counter++;
		}
		beforeNode = currentNode;

		let unwantedNode = currentNode.next;
		beforeNode.next = unwantedNode.next;
		this.length--;
		return;
	}

	printList() {
		let currentNode = this.head;
		let array = [];
		array.push(currentNode.value);
		while (currentNode.next !== null) {
			currentNode = currentNode.next;
			array.push(currentNode.value);
		}
		console.log(array);

		return;
	}

	reverse() {
		let currentNode = this.head;
		let holdingNode = currentNode;

		while (this.head.next !== null) {
			let node = {
				value: this.head.next.value,
				next: currentNode
			};
			currentNode = node;
			this.head = this.head.next;
		}
		holdingNode.next = null; 
		this.tail = holdingNode;
		this.head = currentNode;
	}
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(16);
myLinkedList.append(20);

myLinkedList.append(32);
myLinkedList.append(91);
myLinkedList.prepend(12);
myLinkedList.insert(6, 2222);
myLinkedList.printList();

myLinkedList.reverse();

myLinkedList.printList();
