const readline = require('readline');

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    deleteAll() {
        this.head = null;
    }

    deleteNode(value) {
        if (!this.head) {
            return;
        }
        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while (current.next) {
            if (current.next.value === value) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }

    search(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    findLength() {
        let length = 0;
        let current = this.head;
        while (current) {
            length++;
            current = current.next;
        }
        return length;
    }

    reverse() {
        let prev = null;
        let current = this.head;
        while (current) {
            const nextNode = current.next;
            current.next = prev;
            prev = current;
            current = nextNode;
        }
        this.head = prev;
    }

    displayNodes() {
        const nodes = [];
        let current = this.head;
        while (current) {
            nodes.push(current.value);
            current = current.next;
        }
        return nodes;
    }

    displayNodeAt(index) {
        let current = this.head;
        let count = 0;
        while (current) {
            if (count === index) {
                return current.value;
            }
            count++;
            current = current.next;
        }
        return null;
    }
}

function promptForInput(promptText) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve) => {
        rl.question(promptText, (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

async function main() {
    const linkedList = new SinglyLinkedList();

    while (true) {
        const value = await promptForInput("Enter a value to insert into the linked list or type 'done' to finish: ");
        if (value.toLowerCase() === 'done') {
            break;
        }
        linkedList.insert(parseInt(value));
    }

    while (true) {
        const operation = await promptForInput("Enter the operation you want to execute (insert, deleteAll, deleteNode, search, findLength, reverse, displayNodes, displayNodeAt) or type 'exit' to quit: ");
        if (operation.toLowerCase() === 'exit') {
            console.log("Exiting..")
            break;
        }

        switch (operation.toLowerCase()) {
            case 'insert':
                const insertValue = await promptForInput("Enter the value you want to insert: ");
                linkedList.insert(parseInt(insertValue));
                console.log("Value inserted successfully.");
                break;
            case 'deleteall':
                linkedList.deleteAll();
                console.log("All nodes deleted successfully.");
                break;
            case 'deletenode':
                const deleteValue = await promptForInput("Enter the value you want to delete: ");
                linkedList.deleteNode(parseInt(deleteValue));
                console.log("Value deleted successfully.");
                break;
            case 'search':
                const searchValue = await promptForInput("Enter the value you want to search for: ");
                console.log("Is value present in the linked list?", linkedList.search(parseInt(searchValue)));
                break;
            case 'findlength':
                console.log("Length of the linked list:", linkedList.findLength());
                break;
            case 'reverse':
                linkedList.reverse();
                console.log("Linked list reversed successfully.");
                break;
            case 'display':
                console.log("Nodes in the linked list:", linkedList.displayNodes());
                break;
            case 'displaynode':
                const index = await promptForInput("Enter the index of the node you want to display: ");
                console.log("Value at index", index, ":", linkedList.displayNodeAt(parseInt(index)));
                break;
            default:
                console.log("Invalid operation.");
        }
    }
}

main().catch(console.error);
