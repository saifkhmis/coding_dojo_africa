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
    
    addFront(val) {
        let newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
        return newNode;
    }
    
    display() {
        let result = "";
        let runner = this.head;
        
        while (runner !== null) {
            result += runner.data;
            if (runner.next !== null) {
                result += ", ";
            }
            runner = runner.next;
        }
        
        return result;
    }
}

let SLL1 = new SLL();
console.log(SLL1.addFront(76));
console.log(SLL1.addFront(2));
console.log(SLL1.display());
console.log(SLL1.addFront(11.41));
console.log(SLL1.display());