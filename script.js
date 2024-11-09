// XML-HTTP Request:
//It is a procedure to interact with server via api
// It is Also Called XHR Process
// To get the data from server to client, we need to perform 4 steps

// Step-01:create a XHR Object
var request =  new XMLHttpRequest();
// here request variable is a user defined
//But we have to use ThroughOut Our Program

//Step 02: Opening a request
// here we are informing which api i am using and we are getting the data
request.open("GET","https://restcountries.com/v3.1/all") 

// Step 03: Kickstart The request / Sending the request
request.send()

//Step 04: if the data has been successfully received from the server
// success code of the server is 200
// then................

// Above Operation is considered as an event onload event
// this event is used when your data has successfully loaded from the server
request.onload = function(){
    // data coming from the server is of String type
    // So we convert them into Objects
    var res = JSON.parse(request.response);
    console.log(res);

    // Printing the Country names of 250 Countries
    for(var i=0;i<res.length;i++){
    console.log(res[i].name.common,res[i].continents[0]);
    }
    // Print all the Countries Pouplation in the Console
   
   

}

