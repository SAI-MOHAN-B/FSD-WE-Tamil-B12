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
