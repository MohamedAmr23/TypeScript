// week 1

// ass 2
// function calculate(numOne, numTwo) {
//     return numOne + numTwo;
//   }
  
//   console.log(calculate(10, 20)); // 30
//   console.log(calculate("10", "20")); // We Don't Need This To Work
//   console.log(calculate(+true, +true)); // 2

// // solution
// function calculate(numOne:number, numTwo:number) {  
//     return numOne + numTwo;
//   }
  
//   console.log(calculate(10, 20)); // 30
//   console.log(calculate("10", "20")); // We Don't Need This To Work
//   console.log(calculate(+true, +true)); // 2




//   ass 3
// function printInfo(valueOne, valueTwo) {
//     return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
//   }
  
//   console.log(printInfo(10, 20)); // Value One Is 10, Value Two Is 20
//   console.log(printInfo("10", "20")); // Value One Is "10", Value Two Is "20"
//   console.log(printInfo(true, [1, 2, 3])); // We Don't Need This To Work

 // solution
//  function printInfo(valueOne:(number|string), valueTwo:(number|string)) {
//     return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
//   }
  
//   console.log(printInfo(10, 20)); // Value One Is 10, Value Two Is 20
//   console.log(printInfo("10", "20")); // Value One Is "10", Value Two Is "20"
//   console.log(printInfo(true, [1, 2, 3])); // We Don't Need This To Work



// ass 4
// let arr: (number | boolean[] | (string | (string | number)[])[])[];

// solution 

// let arr: (number | boolean[] | (string | (string | number)[])[])[]=[];

// arr.push(42); 
// arr.push([true, false, true]); 
// arr.push(["Hello", ["World", 2023], ["TypeScript", 100]]);

// console.log(arr);





// ass 5
// function reportErrors(username, age: number) {
//     let rank = "Professor";
//     return `Username: ${username}`;
//     console.log("We Will Not Reach Here");
//   }
  
//   console.log(reportErrors("Elzero", 40));

// solution 
// search in 

// "noImplicitAny": false

// "noImplicitReturns": false, check all code paths ina function to ensure they return a value  

// "noUnusedLocals": true,  report error on unsaved local variables 

// "noUnusedParameters": true, report error on unused parameters in functions





// ass 6
// let nothing;
// let theName: string = "Elzero";
// function showMyDetails(a = "", b = "", c) {
//   return `${a}${b}${c}`;
// }

// // Replace ???? With The Available Variables As Argument To Get The Result
// console.log(showMyDetails(????)); // Elzero

// solution 
// let nothing:string="";
// let theName: string = "Elzero";
// function showMyDetails(a = "", b ?:string, c?:string) {
//   return `${a}${b}${c}`;
// }

// // Replace ???? With The Available Variables As Argument To Get The Result
// console.log(showMyDetails(theName,nothing,nothing)); // Elzero




// ass 7 
// function showMsg(user: number, age: boolean, country: boolean) {
//   return `${user}${age}${country}`;
// }

// console.log(showMsg());
// console.log(showMsg("Elzero"));
// console.log(showMsg("Elzero", 40));
// console.log(showMsg("Elzero", "40", "Egypt"));

// solution 
// function showMsg(user?: number|string, age?: boolean|number|string, country?: boolean|string) {
//   return `${user}${age}${country}`;
// }

// console.log(showMsg());
// console.log(showMsg("Elzero"));
// console.log(showMsg("Elzero", 40));
// console.log(showMsg("Elzero", "40", "Egypt"));





// ass 8
// Write The Function Here

// Using The Function => Do Not Edit
// console.log(printInConsole(1, 2, 3, 4, 5));
// console.log(printInConsole("A", "B", "C"));
// console.log(printInConsole(true, false, false, true, true));

// // Output
// The Value Is 1 And Type Is number
// The Value Is 2 And Type Is number
// The Value Is 3 And Type Is number
// The Value Is 4 And Type Is number
// The Value Is 5 And Type Is number
// Done
// The Value Is A And Type Is string
// The Value Is B And Type Is string
// The Value Is C And Type Is string
// Done
// The Value Is true And Type Is boolean
// The Value Is false And Type Is boolean
// The Value Is false And Type Is boolean
// The Value Is true And Type Is boolean
// The Value Is true And Type Is boolean
// Done

// solution
// function printInConsole(...nums:(number|string|boolean)[]){
//   nums.forEach((num)=>{
//     console.log(`The Value Is ${num} And Type Is ${typeof num}  `)
//   })
//    console.log("Done");
// }

// //  Using The Function => Do Not Edit
// console.log(printInConsole(1, 2, 3, 4, 5));
// console.log(printInConsole("A", "B", "C"));
// console.log(printInConsole(true, false, false, true, true));

// Output
// The Value Is 1 And Type Is number
// The Value Is 2 And Type Is number
// The Value Is 3 And Type Is number
// The Value Is 4 And Type Is number
// The Value Is 5 And Type Is number
// Done
// The Value Is A And Type Is string
// The Value Is B And Type Is string
// The Value Is C And Type Is string
// Done
// The Value Is true And Type Is boolean
// The Value Is false And Type Is boolean
// The Value Is false And Type Is boolean
// The Value Is true And Type Is boolean
// The Value Is true And Type Is boolean
// Done
//////////////////////////////////////////////////////////////////////////////////////////



// Week 2
// ass1 
// Write Your Code Here

// Do Not Edit Here
// let myData: n;
// myData = 1000; // No Problem Here
// myData = +true; // No Problem Here

// solution 
// type n=string|number
// let myData: n;
// myData = 1000; // No Problem Here
// myData = +true; // No Problem Here



// ass2
// Write Your Code Here

// Do Not Edit Here
// let myInfo: mix;
// myInfo = 1000; // No Problem Here
// myInfo = true; // No Problem Here

// solution
// type mi=number|boolean   //we should write mix instead of mi but because not make error in index.ts

// // Do Not Edit Here
// let myInfo: mi;
// myInfo = 1000; // No Problem Here
// myInfo = true; // No Problem Here




// ass 3
// Write Your Code Here

// Do Not Edit Here
// function showInfo(data: Info) {
//     console.log(`The Name Is ${data.theName}`);
//     console.log(`The Age Is ${data.theAge}`);
//   }
//   console.log(showInfo({ theName: "Elzero", theAge: 40 }));
  
//   function showFullInfo(data: Full) {
//     console.log(`The Name Is ${data.theName}`);
//     console.log(`The Age Is ${data.theAge}`);
//     console.log(`The Country Is ${data.country}`);
//   }
//   console.log(showFullInfo({ theName: "Elzero", theAge: 4, country: "Egypt" }));



// solution


// type Info={
//     theName:string,
//     theAge:number
// }
// type Full=Info&{
//     country:string
// }

// // Do Not Edit Here
// function showInfo(data: Info) {
//     console.log(`The Name Is ${data.theName}`);
//     console.log(`The Age Is ${data.theAge}`);
//   }
//   console.log(showInfo({ theName: "Elzero", theAge: 40 }));
  
//   function showFullInfo(data: Full) {
//     console.log(`The Name Is ${data.theName}`);
//     console.log(`The Age Is ${data.theAge}`);
//     console.log(`The Country Is ${data.country}`);
//   }
//   console.log(showFullInfo({ theName: "Elzero", theAge: 4, country: "Egypt" }));



// ass 4

// function yesOrNo(val: number | boolean) : "Yes" | "No" {
//     return val > 10;
//   }
  
//   // Do Not Edit Here
//   console.log(yesOrNo("100")); // Error
//   console.log(yesOrNo(30)); // True
//   console.log(yesOrNo(8)); // False
// solution

// function yesOrNo(val: number | boolean) : "Yes" | "No"  {
//     if(typeof val==="number"){
//         return val > 10? "Yes" : "No";
//     }else{
//         throw new Error("Invalid input type");
//     }
//   }
  
//   // Do Not Edit Here
//   console.log(yesOrNo("100")); // Error
//   console.log(yesOrNo(30)); // True
//   console.log(yesOrNo(8)); // False



// ass 5
// function isHeOld(age: number | string[]) : custom | number {
//     return age > 40;
//   }
  
//   // Do Not Edit Here
//   console.log(isHeOld("100")); // Error
//   console.log(isHeOld(45)); // "Yes"
//   console.log(isHeOld(30)); // "No"
// solution
// type custom= "Yes" | "No";
// function isHeOld(age: number | string[]) : custom | number {
//     if(typeof age==="number"){
//         return age > 40? "Yes" : "No";
//     }throw new Error("Invalid input type. Expected a number.");
    
//   }
  
//   // Do Not Edit Here
//   console.log(isHeOld("100")); // Error
//   console.log(isHeOld(45)); // "Yes"
//   console.log(isHeOld(30)); // "No"

// ass 6
// post = [100, 200, "Title"]; // Error
// post = ["Title", 100, true]; // Error
// post = [100, "Title", true]; // Good

// post.push("Elzero"); // Error => Cant Add

// // Create Destructuring Here

// // Do Not Edit Here
// console.log(id); // 100
// console.log(title); // "Title"
// console.log(state); // true

// solution
// post = [100, 200, "Title"]; // Error
// post = ["Title", 100, true]; // Error
// post = [100, "Title", true]; // Good

// post.push("Elzero"); // Error => Cant Add

// const post:[number,string,boolean]=[100,"Title",true]
// const [idt,titlet,state]=post

// // Do Not Edit Here
// console.log(idt); // 100
// console.log(titlet); // "Title"
// console.log(state); // true

// ass 7
// Create Enums + Function Here

// // Output
// console.log(Game.Easy); // 100
// console.log(Game.Medium); // 80
// console.log(Game.Hard); // 30
// console.log(Game.Insane); // 20

// solution
// enum Game{
//     Easy = 100,
//     Medium = Game.Easy - 20,
//     Hard = Game.Medium - (Game.Easy / 2),


// }
// function insane(parameter: number): number {
//   return Game.Hard - parameter;
// }


// // Output


// console.log(Game.Easy); // 100
// console.log(Game.Medium); // 80
// console.log(Game.Hard); // 30
// console.log(insane(10)); // 20

// ass 8
// const user: {
//     readonly username: string,
//     age: number,
//     website?: string,
//     skills: {
//       frontEnd: string[],
//       backEnd: string[]
//     }
//   } = {
//     username: "Elzero",
//     age: 40,
//     website: "Elzero.org",
//     skills: {
//       frontEnd: ["HTML", "CSS", "JS"],
//       backEnd: ["PHP", "Python"]
//     }
//   }
  
//   // We Need To Remove Error From This Edits
//   user.username = "Osama";
//   user.age = "40";
//   user.skills.backEnd.push(100);

//   solution
// const user: {
//     username: string,
//     age: number|string,
//     website?: string,
//     skills: {
//       frontEnd: string[],
//       backEnd: (string|number)[],
//     }
//   } = {
//     username: "Elzero",
//     age: 40,
//     website: "Elzero.org",
//     skills: {
//       frontEnd: ["HTML", "CSS", "JS"],
//       backEnd: ["PHP", "Python"]
//     }
//   }
  
//   // We Need To Remove Error From This Edits
//   user.username = "Osama";
//   user.age = "40";
//   user.skills.backEnd.push(100);