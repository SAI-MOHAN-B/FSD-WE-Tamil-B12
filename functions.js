// Functions
// Multiplication
// here the predefined operation is Multiplication
// So we need to define the function in such a way that even if I pass 
// Multiple values also, It should able to perform Multiplication
// DRY
// by using function

function mul(a,b){
return a*b;
}

// the purpose of the return keyword is to return the values from the function
// when you are calling the function inside the console.log statement
// then we need return keyword.
console.log(mul(12,13));
console.log(mul(121,131));
console.log(mul(1211,1311));

// Modularity

// Applications of Functions:
// every webapplication if it needs to work then we need functions

// How to pass array and Objects to functions??
var arr = [12,13,14,15];
function even_arr(arr){
  var temp = []
  for(var i=0;i<arr.length;i++){
   if(arr[i]%2 == 0){
    temp.push(arr[i]); 
   }
    
  }
  return temp;
}

console.log(even_arr(arr))


1.Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

Input:(foo([7, 9, 0, -2]))
output:7

Input:(foo([100,6,4,5]))
output:100

Input:(foo([1,2,3,4],-3))
Output:[];

Input:(foo([1,2,3,4],3))
Output:[1,2,3]

Input:(foo([1,2,3,4],5))
Output:[1,2,3,4]

function first(arr,n){
  if(n == undefined){
     return arr[0];
  }
  if(n<0){
   return []; 
  }
  return arr.slice(0,n);
}


console.log(first([7, 9, 0, -2]));
console.log(first([100,6,4,5]));
console.log(first([12,13,14,15],-3));
