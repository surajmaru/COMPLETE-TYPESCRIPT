"use strict";
// class User {
//   name: string;
//   age: number;
Object.defineProperty(exports, "__esModule", { value: true });
//   constructor(name: string, age: number) {
//     // this.name = "Suraj";
//     this.name = name;
//     this.age = age;
//   }
// }
class User {
    name;
    age;
    hobbies = [];
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("My age" + this.age);
    }
}
const suraj = new User("Suraj", 22);
const jay = new User("Jay", 25);
//
// suraj.hobbies = ["Sports"];
// suraj.hobbies.push("Sports");
console.log(suraj, jay);
//# sourceMappingURL=basics.js.map