var myArray = [1,2,3,4,5,6];

console.log(myArray);

for(var i=0;i<myArray.length/2;i++){
    var temp = myArray[myArray.length-i-1];
    myArray[myArray.length-i-1] = myArray[i];
    myArray[i] = temp;
}

console.log(myArray);