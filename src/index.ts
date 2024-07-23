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
// /////////////////////////// lesson 12 ///////////////////////////
// Data Types - Type Alias

type st=string

let yourName:st="mohamed"

type al=string|number

let ok:al="mo"
ok=100
//////////////////////////////////////////////////////////////////////





// /////////////////////////// lesson 13 ///////////////////////////
//Type Alias Advanced
type Buttons={
    up:string,
    down:string,
    left:string,
    right:string
}
type last=Buttons&{
    x:boolean
}
function getBtn(btn:Buttons){
    console.log(`test ${btn.down}`)
    console.log(`test ${btn.up}`)
    console.log(`test ${btn.left}`)
    console.log(`test ${btn.right}`)
}

//////////////////////////////////////////////////////////////////////





// /////////////////////////// lesson 14 ///////////////////////////
// Data Types - Literal Types

type num=0 | 1 | -1

function compare(num1:number,num2:number):num{
    if(num1===num2){
        return 0
    }else if(num1>num2){
        return 1
    }else{
        return -1
    }
}
let myNum:num=1
// let myNum:num=100 //error


//////////////////////////////////////////////////////////////////////



// /////////////////////////// lesson 15 ///////////////////////////
//Data Types - Tuple

let article:[number,string,boolean]=[1,"one",true]
article=[2,"two",false]

const [id,title,bool]=article
console.log(id)
console.log(title)
console.log(bool)


//////////////////////////////////////////////////////////////////////

// /////////////////////////// lesson 16 ///////////////////////////
// Data Types - Void And Never

// - Void
// --- Function That Will Return Nothing
// --- Function In JavaScript That Not Return A Value Will Show undefined
// --- undefined is not void
// not return value
// - Never
// --- Return Type Never Returns
// --- The Function Doesn't Have A Normal Completion
// --- It Throws An Error Or Never Finishes Running At All "Infinite Loop"
// // not return anything

//////////////////////////////////////////////////////////////////////


// /////////////////////////// lesson 17 ///////////////////////////
// Data Types - Enums Part 1

/*
  Data Types
  - Enums => Enumerations
  --- Allow Us To Declare A Set Of Named Constants
  --- Used For Logical Grouping Collection Of Constants "Collection Of Related Values"
  --- It Organize Your Code
  --- By Default Enums Are Number-Based, First Element Is 0
  --- Theres A Numeric Enums
  --- Theres A String-Based Enums
  --- Theres Heterogeneous Enums [String + Number]
*/

// const KIDS = 15;
// const EASY = 9;
// const MEDIUM = 6;
// const HARD = 3;

// enum Level {
//   Kids = 15,
//   Easy = 9,
//   Medium = 6,
//   Hard = 3
// }

// let lvl: string = "Easy";

// if (lvl === "Easy") {
//   console.log(`The Level Is ${lvl} And Number Of Seconds Is ${Level.Easy}`);
// }

//////////////////////////////////////////////////////////////////////


// /////////////////////////// lesson 18 ///////////////////////////
// Data Types - Enums Part 2
/*
  Data Types
  - Enums => Enumerations
  --- Enum Can Refer To Other Enum
  --- Enum Can Refer To Same Enum
  --- Enum Can Have Calculations
  --- Enum Can Have Functions
*/

/*
  Data Types
  - Enums => Enumerations
  --- Enum Can Refer To Other Enum but must be at top of it to can read it
  --- Enum Can Refer To Same Enum
  --- Enum Can Have Calculations
  --- Enum Can Have Functions
*/

function getHardSeconds() : number {
    return 3;
  }
  
  enum Kids {
    Five = 25,
    Seven = 20,
    Ten = 15
  }
  
  enum Level {
    Kid = Kids.Ten,
    Easy = 9,
    Medium = Easy - 3,
    Hard = getHardSeconds()
  }
  
  let lvl: string = "Easy";
  
  if (lvl === "Easy") {
    console.log(`The Level Is ${lvl} And Number Of Seconds Is ${Level.Hard}`);
  }


//////////////////////////////////////////////////////////////////////





// /////////////////////////// lesson 19 ///////////////////////////
// Data Types - Type Assertions
/*
  Data Types
  - Type Assertions
  --- Sometime Compiler Doesnt Know The Information We Do
  --- TypeScript Is Not Performing Any Check To Make Sure Type Assertion Is Valid
*/

// let myImg = document.getElementById("my-img") as HTMLImageElement;
let myImg = <HTMLImageElement> document.getElementById("my-img");
console.log(myImg.src);

let data: any = 1000;
console.log((data as string).repeat(3)); // you should cause error but not give error because TypeScript Is Not Performing Any Check To Make Sure Type Assertion Is Valid


//////////////////////////////////////////////////////////////////////

// /////////////////////////// lesson 20 ///////////////////////////
// Data Types - Union And Intersection Types
/*
  Data Types
  - Union And Intersection Types
  --- Union Type
  ------ The | Symbol Is Used To Create The Union => "Or"

  --- Intersection Type
  ------ Is A Type That Combines Several Types Into One
  ------ The & Symbol Is Used To Create An Intersection => "And"

  --- If A Union Is An OR, Then An Intersection Is An AND.
*/

// let all: number | string = 100;

type A = {
    one: string,
    two: number,
    three: boolean
  }
  
  type B = A & {
    four: number
  }
  
  type C = {
    five: boolean
  }
  
  type mix = A & C;
  
  function getActions(btns: mix) {
    console.log(`Hello ${btns.one}`);
    console.log(`Hello ${btns.two}`);
    console.log(`Hello ${btns.three}`);
    console.log(`Hello ${btns.five}`);
  }
  
  getActions({ one: "String", two: 100, three: true, five: true });

//////////////////////////////////////////////////////////////////////


// /////////////////////////// lesson 21 ///////////////////////////
// Type Annotations With Object
/*
  Type Annotations With Object
*/

let myObject: {
    readonly username: string,
    id: number,
    hire?: boolean,
    skills: {
      one: string,
      two: string
    }
  } = {
    username: "Elzero",
    id: 100,
    hire: true,
    skills: {
      one: "HTML",
      two: "CSS"
    }
  };
  
  // myObject.username = "Osama";
  myObject.id = 101;
  myObject.hire = false;
  
  console.log(myObject.username);
  console.log(myObject.id);
  console.log(myObject.hire);
  console.log(myObject.skills.one);

///////////////////////////////////////////////////////////////////




