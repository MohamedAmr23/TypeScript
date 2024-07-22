// lesson 5
// Type Annotations || signature

// TS does not accept dynamic datatype which mean that can not change type of variable
// example

let fname="mohamed"
// fname=12  error

// you can put type of varible like this

let lname:string="amr"  // this make variable string only


// if you want to make type dynamic put word (any):

let fullName :any="mohamed amr"
fullName=14

// word (any) is default to variable that you do not assign value to it 

let test;// type is any
/////////////////////////////////////////////////////////////////////




// /////////////////////////// lesson 6 ///////////////////////////
// Type Annotations with array
let acceptDT:string | number |boolean; //you made this vsriable accept this 3 datatypes only 
acceptDT="mohamed"
acceptDT=13
acceptDT=true

let myFriend=["mohamed","amr",19] // no error because array put your datatypes in it 

let myFriendSelected:string[]=["mohamed","amr"]  //oh this  array accept string types only
let myFriendSelected2:(string|number)[]=["mohamed","amr",12]  // this  array accept string and numbers types only
/////////////////////////////////////////////////////////////////////




// /////////////////////////// lesson 7 ///////////////////////////
//  Type Annotations With Multidimensional Arrays

// in nested array we must put nested datatype such as this example 
let myFriendSelectedWithMultidimensional:(string|number|string[])[]=["mohamed","amr",12,["nested1","nested2"]]
// we put string[] inside this because there is a nested array from  string datatype

/////////////////////////////////////////////////////////////////////





// /////////////////////////// lesson 8 ///////////////////////////
// Type Annotations With Function
// search in 

// "noImplicitAny": false

// "noImplicitReturns": false, check all code paths ina function to ensure they return a value  

// "noUnusedLocals": true,  report error on unsaved local variables 

// "noUnusedParameters": true, report error on unused parameters in functions
/////////////////////////////////////////////////////////////////////




// /////////////////////////// lesson 9 ///////////////////////////
// Function Optional and Default Parameters
function defaultParameter(name:string,age: number,country?: string){
    return `${name}-${age}-${country}`
}
defaultParameter("mohamed",12)

// country?: string adding (?) to parameters mean that you have option to write it or not 
// note optional paramters put it last parameter in function
/////////////////////////////////////////////////////////////////////







// /////////////////////////// lesson 10 ///////////////////////////
// Function Rest Parameter

// float is under type number

function restParameters(...num:number[]):number{
    let result=0;
    num.forEach(num => {
        result+=num
    });
    return result;
}
restParameters(12,22,22,33,3.5,2,+true)
/////////////////////////////////////////////////////////////////////




// /////////////////////////// lesson 11 ///////////////////////////
// Type Annotations With Anonymous And Arrow Function

const arrow=(num1:number,num2:number):number=>num1+num2

const arrow2=function(num1:number,num2:number):number{
    return num1+num2
}
/////////////////////////////////////////////////////////////////////






