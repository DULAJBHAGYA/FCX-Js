let myArray = [1,2,3,4,5,6];

console.log("Start array - "+ myArray.toString());

function swapElements(myArray, i1,i2){
    var temp = myArray[i1];
    myArray[i1] = myArray[i2];
    myArray[i2] = temp;
}

swapElements(myArray,0,5);
console.log(" ");
console.log("Start array - "+ myArray.toString());
