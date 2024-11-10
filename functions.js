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
