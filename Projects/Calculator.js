function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return a / b;
  }
  
  function evaluateExpression(expression) {
    const tokens = expression.split(' ');
    const operator = tokens[1];
    const num1 = parseFloat(tokens[0]);
    const num2 = parseFloat(tokens[2]);
    
    switch (operator) {
      case '+':
        return add(num1, num2);
      case '-':
        return subtract(num1, num2);
      case '*':
        return multiply(num1, num2);
      case '/':
        return divide(num1, num2);
      default:
        throw new Error("Invalid operator");
    }
  }
  
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Enter a mathematical expression (e.g., 2 + 3): ', (expression) => {
    try {
      const result = evaluateExpression(expression);
      console.log('Result:', result);
    } catch (error) {
      console.error('Error:', error.message);
    }
    rl.close();
  });
  