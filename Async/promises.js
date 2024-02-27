function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = {
          name: 'John',
          age: 30,
          occupation: 'Engineer'
        };
        resolve(data);
      }, 2000); 
    });
  }
  
  fetchData()
    .then(data => {
      console.log('Data:', data);
      console.log('Data fetched successfully!');
    })
    .catch(error => {
      console.error('Error:', error);
    });
  
    {/*
    This function fetchData() simulates fetching data from an API asynchronously.
It returns a Promise object.
Inside the Promise constructor, there's a setTimeout function. This simulates a delay of 2 seconds, which represents the asynchronous operation.
After the delay, it resolves the promise with some sample data (an object with name, age, and occupation).

we're calling the fetchData() function.
We chain a .then() method to handle the successful resolution of the promise. Inside the .then() callback, we log the fetched data to the console.
We chain a .catch() method to handle any errors that might occur during the asynchronous operation. Inside the .catch() callback, we log the error 
to the console.
Running the Code:

When you run the code, it will wait for 2 seconds (simulated by setTimeout), then log the fetched data to the console. If there's an error
 (for example, if you uncomment the reject call), it will log the error instead.
*/}