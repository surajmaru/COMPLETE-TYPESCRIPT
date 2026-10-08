"use strict";
// getters and setters
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    _firstName = "";
    _lastName = "";
    set firstName(name) {
        if (name.trim() === "") {
            throw new Error("Invalid Name");
        }
        this._firstName = name;
    }
    set lastName(name) {
        if (name.trim() === "") {
            throw new Error("Invalid name");
        }
        this._lastName = name;
    }
    get fullName() {
        return this._firstName + " " + this._lastName;
    }
}
const suraj = new User();
suraj.firstName = "suraj";
suraj.lastName = "maru";
console.log(suraj.fullName);
//# sourceMappingURL=advanced.js.map