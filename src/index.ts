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
// week 3
// // /////////////////////////// lesson 22 ///////////////////////////
//   Interface
//   - Interface Declaration
//   --- Serve Like Types
//   --- The Interface Describes The Shape Of An Object
//   --- It Defines The Syntax To Follow

//   --- Use With Object
//   --- Use With Function
//   --- Use Read Only And Optional Operator
// 

interface User1 {
  id?: number,
  readonly username: string,
  country: string
}

let user: User1 = {
  id: 100,
  username: "Elzero",
  country: "Egypt"
}

user.country = "Syria";

console.log(user);

function getData(data: User1) {
  console.log(`Id Is ${data.id}`);
  console.log(`Username Is ${data.username}`);
  console.log(`Country Is ${data.country}`);
}

getData({ id: 200, username: "Osama", country: "KSA" });
///////////////////////////////////////////////////////////////////

// // /////////////////////////// lesson 23 ///////////////////////////
// Interface Method And Parameters
//*
// Interface
// - Interface Method And Parameters
// */

interface User {
id: number;
username: string;
country: string;
sayHello() : string;
sayWelcome: () => string;
getDouble(num: number) : number;
}

let userInterface: User = {
  id: 100,
  username: "Elzero",
  country: "Egypt",
  sayHello() {
    return `Hello ${this.username}`;
  },
  sayWelcome: () => {
    return `Welcome ${user.username}`;
  },
  getDouble(n) {
    return n * 2;
  },
  u: "",
  s: 0,
  msg: function (): string {
    throw new Error("Function not implemented.");
  },
  sayMsg: function (): string {
    throw new Error("Function not implemented.");
  }
}

console.log(userInterface.id);
console.log(userInterface.sayHello());
console.log(userInterface.sayWelcome());
console.log(userInterface.getDouble(100));
///////////////////////////////////////////////////////////////////
// // /////////////////////////// lesson 24 ///////////////////////////
/*
  Interface
  - ReOpen The Interface And Use Cases
*/

// Homepage
interface Settings {
  readonly theme: boolean;
  font: string;
}

// Articles Page
interface Settings {
  sidebar: boolean;
}

// Contact Page
interface Settings {
  external: boolean;
}

let userSettings: Settings = {
  theme: true,
  font: "Open Sans",
  sidebar: false,
  external: true
}
///////////////////////////////////////////////////////////////////
// // /////////////////////////// lesson 25 ///////////////////////////
// Interface Extend
/*
  Interface
  - Extending Interfaces
*/

interface User3 {
  id: number;
  username: string;
  country: string;
}

interface Moderator {
  role: string | number;
}

interface Admin extends User3,Moderator {
  protect?: boolean;
}

let user3: Admin = {
  id: 100,
  username: "Elzero",
  country: "Egypt",
  role: "Mod",
  protect: true
}

console.log(user3.id);
///////////////////////////////////////////////////////////////////
// // /////////////////////////// lesson 26 ///////////////////////////
// 
//   Interface
//   - Interface vs Type Aliases
//   - Take A Look On HTMLElement Interface
// 

let el = document.getElementById("id") as HTMLElement;

// Homepage
type Settings2= {
  readonly theme: boolean;
  font: string;
  sidebar: boolean;
  external: boolean;
}
// interface is better than type because allow you to make interface with the same name but type not allow you this
let userSettings2: Settings2 = {
  theme: true,
  font: "Open Sans",
  sidebar: false,
  external: true
}
///////////////////////////////////////////////////////////////////
// // /////////////////////////// lesson 27 ///////////////////////////
// Class Type Annotations
/*
  Type Annotations With Class
*/

class User {
  u: string;
  s: number;
  msg: () => string;
  constructor(username: string, salary: number) {
    this.u = username;
    this.s = salary;
    this.msg = function () {
      return `Hello ${this.u} Your Salary Is ${this.s}`;
    }
  }
  sayMsg() {
    return `Hello ${this.u} Your Salary Is ${this.s}`;
  }
}

let userOne = new User("Elzero", 6000);

console.log(userOne.u);
console.log(userOne.s);
console.log(userOne.msg());
console.log(userOne.sayMsg());

///////////////////////////////////////////////////////////////////
// // /////////////////////////// lesson 28 ///////////////////////////
/*
  Class
  - Data Access Modifiers & Parameters Properties
  --- Public
  ------ All Members Of A Class In TypeScript Are Public
  ------ All Public Members Can Be Accessed Anywhere Without Any Restrictions
  --- Private
  ------ Members Are Visible Only To That Class And Are Not Accessible Outside The Class
  --- Protected
  ------ Same Like Private But Can Be Accessed Using The Deriving Class

  - TypeScript Is A Layer On Top Of JavaScript
  - It Should Remove All Annotations And Although Access Modifiers "Private For Example"
*/

class UserClass {
  msg: () => string;
  constructor(private username: string, protected salary: number,public readonly address: string) {
    this.msg = function () {
      return `Hello ${this.username} Your Salary Is ${this.salary}`;
    }
  }
  sayMsg() {
    return `Hello ${this.username} Your Salary Is ${this.salary}`;
  }
}

let userOneClass = new UserClass("Elzero", 6000,"Egypt");

// console.log(userOne.username);
// console.log(userOne.salary);
console.log(userOneClass.msg());
console.log(userOneClass.sayMsg());
///////////////////////////////////////////////////////////////////
// // /////////////////////////// lesson 29 ///////////////////////////
/*
  Class
  - Get And Set Accessors
*/

class UserGetAndSet {
  public get username(): string {
    return this._username;
  }
  public set username(value: string) {
    this._username = value;
  }
  msg: () => string;
  constructor(private _username: string, public salary: number, public readonly address: string) {
    this.msg = function () {
      return `Hello ${this._username} Your Salary Is ${this.salary}`;
    }
  }
  sayMsg() {
    return `Hello ${this._username} Your Salary Is ${this.salary}`;
  }
  // get username() : string {
  //   return this._username;
  // }
  // set username(value: string) {
  //   this._username = value;
  // }
}

let userOneGetAndSet = new UserGetAndSet("Elzero", 6000, "Cairo");

console.log(userOneGetAndSet.username);
userOneGetAndSet.username = "Ahmed";
console.log(userOneGetAndSet.username);
console.log(userOneGetAndSet.salary);
console.log(userOneGetAndSet.msg());
console.log(userOneGetAndSet.sayMsg());

///////////////////////////////////////////////////////////////////
// // /////////////////////////// lesson 30 ///////////////////////////
/*
  Class
  - Static Members
  --- Don't Use "name, length, call"
*/

class UserStatic {
  private static created: number = 0;
  static getCount() : void {
    console.log(`${this.created} Objects Created`);
  }
  constructor(public username: string) {
    UserStatic .created++;
  }
}

let u1 = new UserStatic ("Elzero");
let u2 = new UserStatic ("Web");
let u3 = new UserStatic ("School");
// console.log(User.created);
UserStatic .getCount();
///////////////////////////////////////////////////////////////////
// // /////////////////////////// lesson 31 ///////////////////////////
// Class Implement Interface
/*
  Class
  - Implement Interface
*/



interface Setting {
  theme: boolean;
  font: string;
  save(): void;
}

class UserWithInterface implements Setting {
  constructor(public username: string, public theme: boolean, public font: string) {}
  save(): void {
    console.log(`Saved`);
  }
  update(): void {
    console.log(`Updated`);
  }
}

let userOneWithInterface = new UserWithInterface("Elzero", true, "Open Sans");

console.log(userOneWithInterface.username);
console.log(userOneWithInterface.font);

userOneWithInterface.save();
userOneWithInterface.update();
///////////////////////////////////////////////////////////////////
// Week 4 
// // /////////////////////////// lesson 32 ///////////////////////////
// Class Implements Interface
interface SettingsImplement {
  theme: boolean;
  font: string;
  save(): void;
}

class UserImple implements SettingsImplement {
  constructor(public username: string, public theme: boolean, public font: string) {}
  save(): void {
    console.log(`Saved`);
  }
  update(): void {
    console.log(`Updated`);
  }
}

let userOneImple = new UserImple("Elzero", true, "Open Sans");

console.log(userOneImple.username);
console.log(userOneImple.font);

userOneImple.save();
userOneImple.update();
///////////////////////////////////////////////////////////////////
// // /////////////////////////// lesson 32 ///////////////////////////
//  Abstract Classes And Members
/*
  Class
  - Abstract Classes And Members
  --- We Cannot Create An Instance Of An Abstract Class
*/

abstract class Food {
  constructor(public title: string) {}
  abstract getCookingTime() : void;
}

class Pizza extends Food {
  constructor(title: string, public price: number) {
    super(title);
  }
  getCookingTime() : void {
    console.log(`Cooking Time For Pizza Is 1 Hour`);
  }
}

class Burger extends Food {
  constructor(title: string, public price: number) {
    super(title);
  }
  getCookingTime() : void {
    console.log(`Cooking Time For Burger Is Half Hour`);
  }
}

let pizzaOne = new Pizza("Awesome Pizza", 100);

console.log(pizzaOne.title);
console.log(pizzaOne.price);
pizzaOne.getCookingTime();
///////////////////////////////////////////////////////////////////
// // /////////////////////////// lesson 33 ///////////////////////////
/*
  Class
  - Polymorphism & Method Override

  - Polymorphism
  --- Classes Have The Same Methods But Different Implementations

  - Method Override
  --- Allowing Child Class To Provide Implementation Of A Method In Parent Class
  --- A Method In Child Class Must Have Same Name As Parent Class

  --- noImplicitOverride
*/

class Player {
  constructor(public name: string) {}
  attack() : void {
    console.log("Attacking Now");
  }
}

class Amazon extends Player {
  constructor(name: string, public spears: number) {
    super(name);
  }
  override attack(): void {
    // super.attack();
    console.log("Attacking With Spear");
    this.spears -= 1;
  }
}

class Barbarian extends Player {
  constructor(name: string, public axeDurability: number) {
    super(name);
  }
  override attack(): void {
    // super.attack();
    console.log("Attacking With Axe");
    this.axeDurability -= 1;
  }
}

let barOne = new Barbarian("Elzero", 100);

console.log(barOne.name);
barOne.attack();
console.log(barOne.axeDurability);
///////////////////////////////////////////////////////////////////
// // /////////////////////////// lesson 34 ///////////////////////////
// Learn Typescript In Arabic 2022 - #34 - Generics Introduction
/*
  Generics
  - Help Write A Reusable Code
  - Allow To Pass Type As A Parameter To Another Type
  - You Will Be Able To Deal With Multiple Types Without Using ": Any Type"
  - We Can Create:
  --- Generic Classes
  --- Generic Functions
  --- Generic Methods
  --- Generic Interfaces
*/

function returnNumber(val: number) : number {
  return val;
}
function returnString(val: string) : string {
  return val;
}
function returnBoolean(val: boolean) : boolean {
  return val;
}

console.log(returnNumber(100));
console.log(returnString("Elzero"));
console.log(returnBoolean(true));

function returnType<T>(val: T) : T {
  return val;
}

console.log(returnType<number>(100));
console.log(returnType<string>("Elzero"));
console.log(returnType<boolean>(true));
console.log(returnType<number[]>([1, 2, 3, 4]));

///////////////////////////////////////////////////////////////////
// // /////////////////////////// lesson 35 ///////////////////////////
// Generics Multiple Types
/*
  Generics
  - Arrow Function
  - Multiple Types
  - Discussion
*/

const returnTypeArrowSyntax = <T>(val: T): T => val;

console.log(returnTypeArrowSyntax<number>(100));
console.log(returnTypeArrowSyntax<string>("Elzero"));

function testType<T>(val: T): string {
  return `The Value Is ${val} And Type Is ${typeof val}`;
}

console.log(testType<number>(100));
console.log(testType<string>("Elzero"));

function multipleTypes<T, S>(valueOne: T, valueTwo: S): string {
  return `The First Value Is ${valueOne} And Second Value ${valueTwo}`;
}

console.log(multipleTypes<string, number>("Osama", 100));
console.log(multipleTypes<string, boolean>("Elzero", true));

///////////////////////////////////////////////////////////////////
// // /////////////////////////// lesson 36 ///////////////////////////
// Generics Classes
/*
  Generics
  - Classes
*/

class UserWithGeneritic<T = string> {
  constructor(public value: T) {}
  show(msg: T) : void {
    console.log(`${msg} - ${this.value}`);
  }
}

let userOneWithGeneritic = new UserWithGeneritic<string>("Elzero");
console.log(userOneWithGeneritic.value);
userOneWithGeneritic.show("Message");

let userTwoWithGeneritic = new UserWithGeneritic<number | string>(100);
console.log(userTwoWithGeneritic.value);
userTwoWithGeneritic.show("Message");

///////////////////////////////////////////////////////////////////
// // /////////////////////////// lesson 37 ///////////////////////////
// Generics And Interfaces
/*
  Generics
  - Classes And Interfaces
*/

interface Book {
  itemType: string;
  title: string;
  isbn: number;
}

interface Game {
  itemType: string;
  title: string;
  style: string;
  price: number;
}

class Collection<T> {
  public data: T[] = [];
  add(item: T) : void {
    this.data.push(item);
  }
}

let itemOne = new Collection<Book>();
itemOne.add({ itemType: "Book", title: "Atomic Habits", isbn: 150510 });
itemOne.add({ itemType: "Book", title: "Follow Your Heart", isbn: 650650 });
console.log(itemOne);

let itemTwo = new Collection<Game>();
itemTwo.add({ itemType: "Game", title: "Uncharted", style: "Action", price: 150 });
console.log(itemTwo);
///////////////////////////////////////////////////////////////////
// // /////////////////////////// lesson 38 ///////////////////////////
//The End And How To Master Typescript
/*
  - How To Continue
  - Practice
  - Other Topics Not In The Course
  - JSDocs
  - TsConfig
*/
