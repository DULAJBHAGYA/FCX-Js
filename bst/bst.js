const readline = require('readline');

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        this.root = this.insertVal(this.root, value);
    }

    insertVal(node, value) {
        if (node === null) {
            return new Node(value);
        }

        if (value < node.value) {
            node.left = this.insertVal(node.left, value);
        } else if (value > node.value) {
            node.right = this.insertVal(node.right, value);
        }

        return node;
    }

    delete(value) {
        this.root = this.deleteVal(this.root, value);
    }

    deleteVal(node, value) {
        if (node === null) {
            return null;
        }

        if (value === node.value) {
            if (node.left === null && node.right === null) {
                return null;
            }

            if (node.left === null) {
                return node.right;
            }

            if (node.right === null) {
                return node.left;
            }

            const minRight = this.findMinVal(node.right);
            node.value = minRight.value;
            node.right = this.deleteVal(node.right, minRight.value);
            return node;
        }

        if (value < node.value) {
            node.left = this.deleteVal(node.left, value);
        } else {
            node.right = this.deleteVal(node.right, value);
        }

        return node;
    }

    findMin() {
        if (!this.root) {
            return null;
        }

        return this.findMinVal(this.root).value;
    }

    findMinVal(node) {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }

    findMax() {
        if (!this.root) {
            return null;
        }

        return this.findMaxVal(this.root).value;
    }

    findMaxVal(node) {
        while (node.right !== null) {
            node = node.right;
        }
        return node;
    }

    search(value) {
        return this.searchVal(this.root, value);
    }

    searchVal(node, value) {
        if (node === null) {
            return false;
        }

        if (node.value === value) {
            return true;
        }

        if (value < node.value) {
            return this.searchVal(node.left, value);
        } else {
            return this.searchVal(node.right, value);
        }
    }

    inorderTraversal() {
        const result = [];
        this.inorderTraversalVal(this.root, result);
        return result;
    }

    inorderTraversalVal(node, result) {
        if (node !== null) {
            this.inorderTraversalVal(node.left, result);
            result.push(node.value);
            this.inorderTraversalVal(node.right, result);
        }
    }

    deleteNode(value) {
        this.root = this.deleteNodeVal(this.root, value);
    }

    deleteNodeVal(node, value) {
        if (node === null) {
            return null;
        }

        if (value === node.value) {
            if (node.left === null) {
                return node.right;
            }
            if (node.right === null) {
                return node.left;
            }

            const minRight = this.findMinVal(node.right);
            node.value = minRight.value;
            node.right = this.deleteVal(node.right, minRight.value);
            return node;
        }

        if (value < node.value) {
            node.left = this.deleteNodeVal(node.left, value);
        } else {
            node.right = this.deleteNodeVal(node.right, value);
        }

        return node;
    }

    displayNodes() {
        const nodes = [];
        this.displayNodesVal(this.root, nodes);
        return nodes;
    }
    
    displayNodesVal(node, nodes) {
        if (node !== null) {
            this.displayNodesVal(node.left, nodes);
            nodes.push(node.value); // Pushing the value
            this.displayNodesVal(node.right, nodes);
        }
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
    const bst = new BST();

    while (true) {
        const value = await promptForInput("Enter a value to insert into the BST or type 'done' to finish: ");
        if (value.toLowerCase() === 'done') {
            break;
        }
        bst.insert(parseInt(value));
    }

    while (true) {
        const operation = await promptForInput("Enter the function you want to execute (insert, delete, min, max, search, traversal, display), or type 'exit' to quit: ");
        if (operation.toLowerCase() === 'exit') {
            break;
        }

        switch (operation.toLowerCase()) {
            case 'insert':
                const insertValue = await promptForInput("Enter the value you want to insert: ");
                bst.insert(parseInt(insertValue));
                break;
            case 'delete':
                const deleteValue = await promptForInput("Enter the value you want to delete: ");
                bst.deleteNode(parseInt(deleteValue));
                break;
            case 'min':
                console.log("Minimum value:", bst.findMin());
                break;
            case 'max':
                console.log("Maximum value:", bst.findMax());
                break;
            case 'search':
                const searchValue = await promptForInput("Enter the value you want to search for: ");
                console.log("Is value", searchValue, "in BST?", bst.search(parseInt(searchValue)));
                break;
            case 'traversal':
                console.log("Inorder Traversal:", bst.inorderTraversal());
                break;
            case 'display':
                console.log("All Nodes:", bst.displayNodes());
                break;
            default:
                console.log("Invalid function.");
        }
    }
}

main().catch(console.error);
