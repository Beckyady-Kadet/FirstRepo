/*
Array is a type of data structure. It is used for storing data and can contain or store a large number of data that has a similar data type.

Each item in an array is called an element.
The total number of elements in an array is called length. Counting an array starts from zero.
Each element also has its own index, which is used to access the element
There are different operations that can be performed when using an array. They include; 

Traverse − print all the array elements one by one.
Insertion − Adds an element at the given index.
Deletion − Deletes an element at the given index.
Search − Searches an element using the given index or by the value.
Update − Updates an element at the given index.
*/

// To create an empty array, the syntax below is used;

let arr = [];

// Array Task 2
let colors = ['blue', 'green']

// append color indigo to the end
colors.push("indigo");
console.log(colors);

// Replace the middle value with "red"
colors[Math.floor((colors.length - 1) /2)] = "red"
console.log(colors)

// Strip off the first value of the array
colors.shift();
console.log(colors);

// Prepend gold and orange to the array.
colors.unshift("gold", "orange")
console.log(colors);


