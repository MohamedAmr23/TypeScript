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
//# sourceMappingURL=index.js.map