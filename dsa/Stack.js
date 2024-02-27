
let stack = [];

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
stack.push(60);

console.log(stack);

//peek function to retrieve top element of the stack
function peek(stack) {
    if (stack.length === 0
        ) {
        return "Stack is empty";
    }
    return stack[stack.length - 1]; 
}

console.log(peek(stack));

//pop function
function pop() {
    if (stack.length === 0) {
        return "Stack is empty";
    }
    stack.pop();
  }

  pop();
console.log(stack);

//is empty function 
function isEmpty(stack) {
    if (stack.length === 0)
        return "Stack is empty";
    else
        return "Stack is not empty";
}

console.log(isEmpty(stack));


//is full function
function IsFull(stack) {
    
}

