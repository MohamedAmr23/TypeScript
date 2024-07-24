"use strict";
let fname = "mohamed";
let lname = "amr";
let fullName = "mohamed amr";
fullName = 14;
let test;
let acceptDT;
acceptDT = "mohamed";
acceptDT = 13;
acceptDT = true;
let myFriend = ["mohamed", "amr", 19];
let myFriendSelected = ["mohamed", "amr"];
let myFriendSelected2 = ["mohamed", "amr", 12];
let myFriendSelectedWithMultidimensional = ["mohamed", "amr", 12, ["nested1", "nested2"]];
function defaultParameter(name, age, country) {
    return `${name}-${age}-${country}`;
}
defaultParameter("mohamed", 12);
function restParameters(...num) {
    let result = 0;
    num.forEach(num => {
        result += num;
    });
    return result;
}
restParameters(12, 22, 22, 33, 3.5, 2, +true);
const arrow = (num1, num2) => num1 + num2;
const arrow2 = function (num1, num2) {
    return num1 + num2;
};
let yourName = "mohamed";
let ok = "mo";
ok = 100;
function getBtn(btn) {
    console.log(`test ${btn.down}`);
    console.log(`test ${btn.up}`);
    console.log(`test ${btn.left}`);
    console.log(`test ${btn.right}`);
}
function compare(num1, num2) {
    if (num1 === num2) {
        return 0;
    }
    else if (num1 > num2) {
        return 1;
    }
    else {
        return -1;
    }
}
let myNum = 1;
let article = [1, "one", true];
article = [2, "two", false];
const [id, title, bool] = article;
console.log(id);
console.log(title);
console.log(bool);
function getHardSeconds() {
    return 3;
}
var Kids;
(function (Kids) {
    Kids[Kids["Five"] = 25] = "Five";
    Kids[Kids["Seven"] = 20] = "Seven";
    Kids[Kids["Ten"] = 15] = "Ten";
})(Kids || (Kids = {}));
var Level;
(function (Level) {
    Level[Level["Kid"] = 15] = "Kid";
    Level[Level["Easy"] = 9] = "Easy";
    Level[Level["Medium"] = 6] = "Medium";
    Level[Level["Hard"] = getHardSeconds()] = "Hard";
})(Level || (Level = {}));
let lvl = "Easy";
if (lvl === "Easy") {
    console.log(`The Level Is ${lvl} And Number Of Seconds Is ${Level.Hard}`);
}
let myImg = document.getElementById("my-img");
console.log(myImg.src);
let data = 1000;
console.log(data.repeat(3));
function getActions(btns) {
    console.log(`Hello ${btns.one}`);
    console.log(`Hello ${btns.two}`);
    console.log(`Hello ${btns.three}`);
    console.log(`Hello ${btns.five}`);
}
getActions({ one: "String", two: 100, three: true, five: true });
let myObject = {
    username: "Elzero",
    id: 100,
    hire: true,
    skills: {
        one: "HTML",
        two: "CSS"
    }
};
myObject.id = 101;
myObject.hire = false;
console.log(myObject.username);
console.log(myObject.id);
console.log(myObject.hire);
console.log(myObject.skills.one);
//# sourceMappingURL=index.js.map