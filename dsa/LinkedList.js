class Node{
    constructor(data, next=null){
        this.data = data;
        this.next = next;
    }
}

// const n1 = new Node(23);
// const n2 = new Node(45);
// console.log(n1, n2);

 class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    //insert first node
    insertFirt(data){
        this.head = new Node(data, this.head);
    }

    //print data
    printLL(){
        let current = this.head;

        while(current){
            console.log(current.data);
            current = current.next;
        }
    }

    //insert last element
    

 }

const ll = new LinkedList();
ll.insertFirt(100);
ll.insertFirt(200);
ll.insertFirt(300);

ll.printLL();


