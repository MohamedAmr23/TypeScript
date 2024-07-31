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

///////////////////////////////////////////////////////
// week 3 
// ass 1
// Edit The Interface To Fix The Problems
// interface Member {
//     id: number;
//     username: string;
//     country: string;
//     readonly state: boolean;
//   }
  
//   // Do Not Edit The Code Below
//   let user: Member = { // Property 'country' is missing in type
//     id: 100,
//     username: "Elzero",
//     state: true,
//     getName() { // 'getName' does not exist in type 'Member'
//       return this.username;
//     }
//   }
  
//   user.id = 200;
//   user.id = "200"; // Type 'string' is not assignable to type 'number'
//   user.state = false; // Cannot assign to 'state' because it is a read-only property

// solution
// Edit The Interface To Fix The Problems
// interface Member {
//     id: number|string;
//     username: string;
//     country?: string;
//     getName():string
//     state: boolean;
//   }
  
//   // Do Not Edit The Code Below
//   let user: Member = { // Property 'country' is missing in type     
//     id: 100,
//     username: "Elzero",
//     state: true,
//     getName() { // 'getName' does not exist in type 'Member'
//       return this.username;
//     }
//   }
  
//   user.id = 200;
//   user.id = "200"; // Type 'string' is not assignable to type 'number'
//   user.state = false; // Cannot assign to 'state' because it is a read-only property


// ass 2
// Create Interface Here

// Do Not Edit The Code Below
// let client: Client = {
//     id: 100,
//     username: "Elzero",
//     active: true,
//     discount: 10,
//     getPrice(price: number) {
//       return price - this.discount;
//     }
//   }
  
//   console.log(`Client Id Is ${client.id}`);
//   console.log(`Client Name Is ${client.username}`);
//   console.log(`Client Has Dicount ${client.discount}`);
//   console.log(`Client Product After Discount Is ${client.getPrice(200)}`);

// solution
// interface Client{
//     id:number,
//     username:string,
//     active:boolean,
//     discount:number,
//     getPrice(price:number):number
//   }
  
//   // Do Not Edit The Code Below
//   let client: Client = {
//     id: 100,
//     username: "Elzero",
//     active: true,
//     discount: 10,
//     getPrice(price: number) {
//       return price - this.discount;
//     }
//   }
  
//   console.log(`Client Id Is ${client.id}`);
//   console.log(`Client Name Is ${client.username}`);
//   console.log(`Client Has Dicount ${client.discount}`);
//   console.log(`Client Product After Discount Is ${client.getPrice(200)}`);

// ass 3
// Do Not Edit The Code Below
// interface Man {
//     title: string;
//     weight: number;
//     age: number;
//   }
  
//   interface Bird {
//     canFly: boolean;
//   }
  
//   let creature: Superman = {
//     title: "Superman",
//     weight: 100,
//     age: 500,
//     canFly: true,
//     bodyType: "Iron",
//     origin: "Krypton"
//   }

// solution
// Do Not Edit The Code Below
// interface Man {
//     title: string;
//     weight: number;
//     age: number;
//   }
  
//   interface Bird {
//     canFly: boolean;
//   }
//   interface Superman extends Man,Bird{
//     bodyType:string,
//     origin:string
//   }
//   let creature: Superman = {
//     title: "Superman",
//     weight: 100,
//     age: 500,
//     canFly: true,
//     bodyType: "Iron",
//     origin: "Krypton"
//   }

// ass 4
// Create Class Here

// Do Not Edit The Code Below
// let player1 = new Player("Osama", "Mage", 90, true);
// let player2 = new Player("Shady", "Archer", "85", false);
// let player3 = new Player("Amr", "Fighter", 50, true);
// let player4 = new Player("Mahmoud", "Assassin", 77);

// console.log(player1.details()); // VIP Osama, Type Is Mage Level Is 90
// console.log(player2.details()); // Shady, Type Is Archer Level Is 85
// console.log(player3.details()); // VIP Amr, Type Is Fighter Level Is 50
// console.log(player4.details()); // Mahmoud, Type Is Assassin Level Is 77

// solution 
// Create Class Here
// class Player{
//     u:string;
//     t:string;
//     l:number|string;
//     c?:boolean
//     constructor(username:string,type:string,level:number|string,count?:boolean){
//       this.u=username;
//       this.t=type;
//       this.l=level;
//       this.c=count
//     }
//      details(){
//       if(this.c===true){
//         return `VIP ${this.u} Type Is ${this.t} Level Is ${this.l},`
//       }else{
//         return `${this.u} Type Is ${this.t} Level Is ${this.l},`
//       }
      
//      }
   
//   }
//   // Do Not Edit The Code Below
//   let player1 = new Player("Osama", "Mage", 90, true);
//   let player2 = new Player("Shady", "Archer", "85", false);
//   let player3 = new Player("Amr", "Fighter", 50, true);
//   let player4 = new Player("Mahmoud", "Assassin", 77);
  
//   console.log(player1.details()); // VIP Osama, Type Is Mage Level Is 90
//   console.log(player2.details()); // Shady, Type Is Archer Level Is 85
//   console.log(player3.details()); // VIP Amr, Type Is Fighter Level Is 50
//   console.log(player4.details()); // Mahmoud, Type Is Assassin Level Is 77

// ass 5
// class Shorten {
//     public id: number;
//     public username: string;
//     protected title: string;
//     constructor (id: number, username: string, title: string) {
//       this.id = id;
//       this.username = username;
//       this.title = title;
//     }
//   }
  
//   let tester = new Shorten(100, "Elzero", "Developer");
  
//   console.log(tester.id);
//   console.log(tester.username);

// solution
// class Shorten {
//     constructor (public id: number,public username: string,protected title: string) {
//     }
//   }
  
//   let tester = new Shorten(100, "Elzero", "Developer");
  
//   console.log(tester.id);
//   console.log(tester.username);

// ass 6
// class Show {
//     constructor (private _title: string) {}
//   }
  
//   let tester = new Show("Elzero");
  
//   console.log(tester.title); // Property 'title' does not exist on type 'Show'
//   tester.title = "Osama"; // Property 'title' does not exist on type 'Show'
//   console.log(tester.title); // Property 'title' does not exist on type 'Show'

//   solution

// class Show {
//     private _title: string;
  
//     constructor(title: string) {
//       this._title = title;
//     }
  
//     // Getter for _title
//     get title(): string {
//       return this._title;
//     }
  
//     // Setter for _title
//     set title(newTitle: string) {
//       this._title = newTitle;
//     }
//   }
  
//   let tester = new Show("Elzero");
  
//   console.log(tester.title); // Elzero
//   tester.title = "Osama"; // No error
//   console.log(tester.title); // Osama

// ass 7
// interface Play {
//     id: number;
//     title: string;
//     level: number | string;
//     logIn(): void;
//     logOut(msg: string): void;
//   }
  
//   // Create Your Class Here
  
//   let player1 = new Player(100, "Elzero", 95);
  
//   console.log(player1.id); // 100
//   console.log(player1.title); // "Elzero"
//   console.log(player1.level); // 95
//   player1.logIn(); // Logged In
//   player1.logOut("Good Bye"); // Logged Out, Good Bye

// solution  
// interface Play {
//     id: number;
//     title: string;
//     level: number | string;
//     logIn(): void;
//     logOut(msg: string): void;
//   }
  
//   class Player implements Play{
//     constructor(public id:number,public title:string,public level:number | string){}
//         logIn():void{
//         console.log(`Logged In`)
    
//     }
//         logOut(msg:string):void{
//         console.log(`Logged Out, Good Bye`)
    
//     }
   
//   }
  
//   let player1 = new Player(100, "Elzero", 95);
  
//   console.log(player1.id); // 100
//   console.log(player1.title); // "Elzero"
//   console.log(player1.level); // 95
//   player1.logIn(); // Logged In
//   player1.logOut("Good Bye"); // Logged Out, Good Bye

// week4
// ass 1
// Do Not Edit
// type numandstring = number | string;

// abstract class Game {
//   constructor(public title: string, public price: numandstring) {}
//   abstract getLocation() : string;
//   abstract getDiscount() : string;
// }

// // Start Edit And Fix
// class RPG extends Game {
//   constructor(title: string, public price: numandstring, public rate: number) {
//   }
// }

// class Action extends Game {
//   constructor(title: string, public price: numandstring, public rate: number) {
//   }
// }
// // End Edit And Fix

// // Do Not Edit
// let gameOne = new RPG("Ys", 100, 10);
// let gameTwo = new Action("Uncharted", 90, 15, "Sony");

// console.log(gameOne.title); // "Ys"
// console.log(gameOne.price); // 100
// console.log(gameOne.rate); // 10
// console.log(gameOne.getDiscount()); // "Discount"
// console.log(gameOne.getLocation()); // "Location"

// console.log(gameTwo.title); // "Uncharted"
// console.log(gameTwo.price); // 90
// console.log(gameTwo.rate); // 15
// console.log(gameTwo.company); // "Sony"
// console.log(gameTwo.getDiscount()); // "Discount"
// console.log(gameTwo.getLocation()); // "Location"

// solution
// Do Not Edit
// type numandstring = number | string;

// abstract class Game {
//   constructor(public title: string, public price: numandstring) {}
//   abstract getLocation() : string;
//   abstract getDiscount() : string;
// }

// // Start Edit And Fix
// class RPG extends Game {
//   constructor(title: string, public price: numandstring, public rate: number) {
//     super(title,price)
//   }
//   getLocation() : string{
//     return "Location"
//   }
//   getDiscount() : string{
//     return "dicount"
//   }
// }

// class Action extends Game {
//   constructor(title: string, public price: numandstring, public rate: number,public company:string) {
//      super(title,price)
//   }
//     getLocation() : string{
//     return "Location"
//   }
//   getDiscount() : string{
//     return "dicount"
//   }
// }
// // End Edit And Fix

// // Do Not Edit
// let gameOne = new RPG("Ys", 100, 10);
// let gameTwo = new Action("Uncharted", 90, 15, "Sony");

// console.log(gameOne.title); // "Ys"
// console.log(gameOne.price); // 100
// console.log(gameOne.rate); // 10
// console.log(gameOne.getDiscount()); // "Discount"
// console.log(gameOne.getLocation()); // "Location"

// console.log(gameTwo.title); // "Uncharted"
// console.log(gameTwo.price); // 90
// console.log(gameTwo.rate); // 15
// console.log(gameTwo.company); // "Sony"
// console.log(gameTwo.getDiscount()); // "Discount"
// console.log(gameTwo.getLocation()); // "Location"


// ass 2
// Write Function Code Here

// Do Not Edit Here
// console.log(showTypes()); // Nothing - Nothing - Nothing
// console.log(showTypes<string>("String")); // String - Nothing - Nothing
// console.log(showTypes<string, number>("String", 100)); // String - 100 - Nothing
// console.log(showTypes<string, number, boolean>("String", 100, true)); // String - 100 - true

// solution
// function showTypes<T=any,S=any,V=any>(val1?:T,val2?:S,val3?:V){
//     return `${val1??"Nothing"} ${val2??"Nothing"} ${val3??"Nothing"}` 
//   }
  
//   // Do Not Edit Here
//   console.log(showTypes()); // Nothing - Nothing - Nothing
//   console.log(showTypes<string>("String")); // String - Nothing - Nothing
//   console.log(showTypes<string, number>("String", 100)); // String - 100 - Nothing
//   console.log(showTypes<string, number, boolean>("String", 100, true)); // String - 100 - true
  

// ass 3
// Write Class Code Here

// Do Not Edit Here
// let gameOne = new Game<string>("Ys", 100);
// let gameTwo = new Game<number>(2064, 100); // There's A Game Called "2064"

// console.log(gameOne.title); // "Ys"
// console.log(gameOne.price); // 100
// gameOne.getDiscount("50"); // "The Discount Is 50"

// console.log(gameTwo.title); // 2064
// console.log(gameTwo.price); // 100
// gameTwo.getDiscount(80); // "The Discount Is 80"

// solution
// class Game<T=string,U=number>{
//     constructor(public title:T ,public price:U){}
//     getDiscount<T=string|number>(val:T){
//       return `The Discount Is ${val}`;
//     }
//   }
  
//   // Do Not Edit Here
//   let gameOne = new Game<string>("Ys", 100);
//   let gameTwo = new Game<number>(2064, 100); // There's A Game Called "2064"
  
//   console.log(gameOne.title); // "Ys"
//   console.log(gameOne.price); // 100
//   console.log(gameOne.getDiscount("50")); // "The Discount Is 50"
  
//   console.log(gameTwo.title); // 2064
//   console.log(gameTwo.price); // 100
//   console.log(gameTwo.getDiscount(80)); // "The Discount Is 80"
  