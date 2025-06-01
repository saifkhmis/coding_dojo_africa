class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addFront(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }

    removeFront() {
        if (this.head === null) {
            return null;
        }
        this.head = this.head.next;
        return this.head;
    }

    front() {
        if (this.head === null) {
            return null;
        }
        return this.head.data;
    }

    display() {
        if (this.head === null) {
            return "Empty list";
        }
        
        let current = this.head;
        let result = "";
        while (current !== null) {
            result += `Node { data: ${current.data}, next: `;
            if (current.next !== null) {
                result += "Node { ... }";
            } else {
                result += "null";
            }
            result += " }";
            if (current.next !== null) {
                result = `Node { data: ${current.data}, next: ` + result.substring(result.indexOf("Node { data:"));
                break;
            }
            current = current.next;
        }
        return result;
    }

    toString() {
        if (this.head === null) {
            return "null";
        }
        
        function nodeToString(node) {
            if (node === null) {
                return "null";
            }
            return `Node { data: ${node.data}, next: ${nodeToString(node.next)} }`;
        }
        
        return nodeToString(this.head);
    }
}

console.log("=== SINGLY LINKED LIST TESTS ===\n");

const SLL1 = new SLL();
console.log("Created new SLL1");

console.log("\n--- ADD FRONT TESTS ---");
console.log("SLL1.addFront(18):");
let result1 = SLL1.addFront(18);
console.log(SLL1.toString());

console.log("\nSLL1.addFront(5):");
let result2 = SLL1.addFront(5);
console.log(SLL1.toString());

console.log("\nSLL1.addFront(73):");
let result3 = SLL1.addFront(73);
console.log(SLL1.toString());

console.log("\n--- REMOVE FRONT TESTS ---");
console.log("SLL1.removeFront():");
let removeResult1 = SLL1.removeFront();
console.log("Returned:", removeResult1 ? SLL1.toString() : "null");

console.log("\nSLL1.removeFront():");
let removeResult2 = SLL1.removeFront();
console.log("Returned:", removeResult2 ? SLL1.toString() : "null");

console.log("\n--- FRONT TESTS ---");
console.log("SLL1.front():", SLL1.front());

console.log("\nSLL1.removeFront():");
let removeResult3 = SLL1.removeFront();
console.log("Returned:", removeResult3);

console.log("SLL1.front():", SLL1.front());

console.log("\n=== ADDITIONAL DEMONSTRATION ===");
const SLL2 = new SLL();
console.log("New empty list SLL2:");
console.log("SLL2.front():", SLL2.front());
console.log("SLL2.removeFront():", SLL2.removeFront());

SLL2.addFront(100);
SLL2.addFront(200);
console.log("\nAfter adding 100, then 200:");
console.log(SLL2.toString());
console.log("Front value:", SLL2.front());
