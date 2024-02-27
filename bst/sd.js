const readline = require('readline'); // Importing the 'readline' module to enable user input.

class Node {
    constructor(value) { // Constructor for the Node class.
        this.value = value; // Initializing the value of the node.
        this.next = null; // Initializing the 'next' pointer to null.
    }
}

class SinglyLinkedList {
    constructor() { // Constructor for the SinglyLinkedList class.
        this.head = null; // Initializing the 'head' pointer to null, indicating an empty list.
    }

    insert(value) { // Method to insert a new node at the end of the linked list.
        const newNode = new Node(value); // Creating a new node with the provided value.
        if (!this.head) { // Checking if the list is empty.
            this.head = newNode; // If so, set the new node as the head.
        } else { // If the list is not empty.
            let current = this.head; // Start from the head of the list.
            while (current.next) { // Traverse the list until the last node.
                current = current.next; // Move to the next node.
            }
            current.next = newNode; // Set the next pointer of the last node to the new node.
        }
    }

    deleteAll() { // Method to delete all nodes from the linked list.
        this.head = null; // Set the head pointer to null, effectively clearing the list.
    }

    deleteNode(value) { // Method to delete the first occurrence of a node with a specific value.
        if (!this.head) { // Check if the list is empty.
            return; // If so, return without performing any operation.
        }
        if (this.head.value === value) { // Check if the value to be deleted is in the head node.
            this.head = this.head.next; // If so, move the head pointer to the next node (skipping the current head).
            return; // Return after deleting the node.
        }
        let current = this.head; // Start from the head of the list.
        while (current.next) { // Traverse the list until the second last node.
            if (current.next.value === value) { // Check if the next node has the value to be deleted.
                current.next = current.next.next; // If so, skip the next node by adjusting pointers.
                return; // Return after deleting the node.
            }
            current = current.next; // Move to the next node.
        }
    }

    search(value) { // Method to search for a specific value in the linked list.
        let current = this.head; // Start from the head of the list.
        while (current) { // Traverse the list until the last node.
            if (current.value === value) { // Check if the current node has the value being searched.
                return true; // If so, return true.
            }
            current = current.next; // Move to the next node.
        }
        return false; // If the value is not found, return false.
    }

    findLength() { // Method to find the length (number of nodes) of the linked list.
        let length = 0; // Initialize a variable to store the length.
        let current = this.head; // Start from the head of the list.
        while (current) { // Traverse the list until the last node.
            length++; // Increment the length for each node visited.
            current = current.next; // Move to the next node.
        }
        return length; // Return the calculated length.
    }

    reverse() { // Method to reverse the linked list.
        let prev = null; // Initialize a variable to store the previous node.
        let current = this.head; // Start from the head of the list.
        while (current) { // Traverse the list until the last node.
            const nextNode = current.next; // Store the next node.
            current.next = prev; // Reverse the pointer of the current node to point to the previous node.
            prev = current; // Move the 'prev' pointer to the current node.
            current = nextNode; // Move the 'current' pointer to the next node.
        }
        this.head = prev; // Set the head of the list to the last node (which is now the first node after reversal).
    }

    displayNodes() { // Method to display all nodes of the linked list.
        const nodes = []; // Initialize an array to store the values of nodes.
        let current = this.head; // Start from the head of the list.
        while (current) { // Traverse the list until the last node.
            nodes.push(current.value); // Push the value of the current node into the array.
            current = current.next; // Move to the next node.
        }
        return nodes; // Return the array containing the values of all nodes.
    }

    displayNodeAt(index) { // Method to display the value of a node at a specific index.
        let current = this.head; // Start from the head of the list.
        let count = 0; // Initialize a variable to keep track of the index.
        while (current) { // Traverse the list until the last node.
            if (count === index) { // Check if the current node is at the desired index.
                return current.value; // If so, return the value of the current node.
            }
            count++; // Increment the index.
            current = current.next; // Move to the next node.
        }
        return null; // If the index is out of range, return null.
    }
}

function promptForInput(promptText) { // Function to prompt the user for input.
    const rl = readline.createInterface({ // Creating an interface for reading input.
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve) => { // Returning a promise for asynchronous input handling.
        rl.question(promptText, (answer) => { // Asking the user for input with the provided prompt.
            rl.close(); // Closing the readline interface after receiving the input.
            resolve(answer); // Resolving the promise with the user's input.
        });
    });
}

async function main() { // Main function to execute the program.
    const linkedList = new SinglyLinkedList(); // Creating a new instance of the SinglyLinkedList class.

    while (true) { // Loop to repeatedly prompt the user for input until 'done' is entered.
        const value = await promptForInput("Enter a value to insert into the linked list or type 'done' to finish: ");
        if (value.toLowerCase() === 'done') { // Checking if the user wants to finish entering values.
            break; // If so, exit the loop.
        }
        linkedList.insert(parseInt(value)); // Inserting the entered value into the linked list.
    }

    while (true) { // Loop to repeatedly prompt the user for operations until 'exit' is entered.
        const operation = await promptForInput("Enter the operation you want to execute (insert, deleteAll, deleteNode, search, findLength, reverse, displayNodes, displayNodeAt) or type 'exit' to quit: ");
        if (operation.toLowerCase() === 'exit') { // Checking if the user wants to quit the program.
            break; // If so, exit the loop.
        }

        switch (operation.toLowerCase()) { // Performing the specified operation based on user input.
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
            case 'displaynodes':
                console.log("Nodes in the linked list:", linkedList.displayNodes());
                break;
            case 'displaynodeat':
                const index = await promptForInput("Enter the index of the node you want to display: ");
                console.log("Value at index", index, ":", linkedList.displayNodeAt(parseInt(index)));
                break;
            default:
                console.log("Invalid operation."); // Handling invalid operation inputs.
        }
    }
}

main().catch(console.error); // Calling the main function and handling any errors.
