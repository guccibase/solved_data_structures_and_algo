class Node {
	constructor(value) {
		this.value = value;
		this.right = null;
		this.left = null;
	}
}

class BinarySearch {
	constructor() {
		this.root = null;
	}

	lookup(value) {
		if (!this.root) return false;
		let currentNode = this.root;

		while (currentNode) {
			if (currentNode.value >= value) {
				if (currentNode.value === value) return true;
				currentNode = currentNode.left;
			} else {
				if (currentNode.value === value) return true;
				currentNode = currentNode.right;
			}
		}
		return false;
	}

	remove(value) {
		if (!this.root) return false;
		let currentNode = this.root;
		let parentNode = null;

		while (currentNode) {
			if (currentNode.value === value) {
				if (currentNode.right === null) {
					if (parentNode === null) {
						this.root = currentNode.left;
					}
				} else {
					let leftHoldingNode = currentNode.left;
					let rightHoldingNode = currentNode.right;
					let holdingNode = currentNode;

					// 				*
					// 		*				*
					// 	*		*		*		*
					// *		*
					while (holdingNode.right || holdingNode.left) {
						if (!holdingNode.right) {
							holdingNode = holdingNode.left;
						} else {
							holdingNode = holdingNode.right;
						}
					}

					holdingNode.right = rightHoldingNode;
					holdingNode.left = leftHoldingNode;
					parentNode.right = holdingNode;

					return true;
				}
			} else if (value < currentNode.value) {
				parentNode = currentNode;
				currentNode = currentNode.left;
			} else {
				parentNode = currentNode;
				currentNode = currentNode.right;
			}
		}

		return false;
	}

	insert(value) {
		let newNode = new Node(value);
		if (!this.root) {
			this.root = newNode;
			return;
		}
		let currentNode = this.root;

		while (true) {
			console.log('while');

			if (currentNode.value > value) {
				if (!currentNode.left) {
					currentNode.left = newNode;
					console.log(currentNode.value);

					return this;
				}
				currentNode = currentNode.left;
			} else {
				if (!currentNode.right) {
					currentNode.right = newNode;
					console.log('right null');

					return this;
				}

				currentNode = currentNode.right;
			}
		}
	}
}

let myB = new BinarySearch();
console.log(myB);
myB.insert(25);

console.log(myB);
myB.insert(122);
console.log(myB);

myB.insert(4);
console.log(myB);

myB.insert(22);
myB.insert(32);

console.log(myB);
myB.insert(122);
console.log(myB);

myB.insert(21);
console.log(myB);

myB.insert(2);
myB.insert(1);

myB.remove(25);
console.log(myB);
console.log(myB.lookup(21));
