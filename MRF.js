// MRF : They belongs to Array
// map:
var arr = [12,13,14,15];
// resultant array
// var res = [24,26,28,30]
// Step 01: apply for loop
// Step 02: take each element of the array, multiply it withh 2
// Step 03: Push that no into the new array
// Step 04: print the new array

// using map
// Syntax: arrayname.map(()=>{})
// map takes function as the parameter
// apply on each and every element of the array and returns a new array
var res = arr.map((ele)=>ele*2)
//here ele represents the array elements
console.log(res);

// MRF : They belongs to Array
// map:
var arr = [12,13,14,15];
// filter
// var res = [12,14];

// Step 01: Apply for loop
// Step 02: take each element of the array
// check whether it is even or odd 
//Step 03: if it is an even number keep it in a separate array
// Step 04: if not will be skipping it
//Step 05: Print the resultant array

// Apply filter
// when you have the condition
var res = arr.filter((ele)=>ele%2 == 0)
console.log(res);
