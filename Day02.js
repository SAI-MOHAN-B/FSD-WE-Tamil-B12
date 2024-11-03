// An Object is a Key:value pair..
// Syntax: var objectname = {keyname:value}
// Consider the Following Data
var stu = {
  name:"John doe",
  age:23,
  year:2018,
  present_days:["mon","tue","wed"]
}
// to access the value present inside the Objects
// Dot Method
//Syntax: objectname.keyname
// GET
console.log(stu.age);
console.log(stu.year);
console.log(stu.name);

// using . Method we can perform crud

// To add a fresh key : value pair:
// Syntax:objecctname.keyname = value
stu.absent_days = ["thur","frid"]


// to update the values present inside the Key:value pair
// Syntax: Objectname.keyname = value
stu.age = 24;
console.log(stu);

// to delete the key:value pair
// Syntax: delete objectname.keyname
console.log(delete stu.year);


// Box Method
//Syntax:objectname["keyname"]
console.log(stu["age"]);
// we will be using in the for in loop
// this loop is only for the key:value pair
// Syntax: for(key in objectname){console.log(objectname[keyname])}
// uni direction
for(var key in stu){
console.log(key,stu[key]);  
}
