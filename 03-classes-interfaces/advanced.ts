// getters and setters, static's, inheritance, abstract classes

class User {
  protected _firstName: string = "";
  private _lastName: string = "";

  set firstName(name: string) {
    if (name.trim() === "") {
      throw new Error("Invalid Name");
    }
    this._firstName = name;
  }
  set lastName(name: string) {
    if (name.trim() === "") {
      throw new Error("Invalid name");
    }
    this._lastName = name;
  }

  get fullName() {
    return this._firstName + " " + this._lastName;
  }

  static eid = "USER";

  static greet() {
    console.log("hi");
  }
}

console.log(User.eid);
User.greet();

const suraj = new User();
suraj.firstName = "suraj";
suraj.lastName = "maru";

console.log(suraj.fullName);

// inheritance

class Employee extends User {
  constructor(public jobTitle: string) {
    super();
  }
  work() {
    // ..
    this._firstName = "John";
    console.log(this._firstName);
  }
}

// abstract class
// An abstract class in TypeScript is a special type of base class that cannot be instantiated directly. Instead, it serves as a blueprint or template for other classes to inherit from.

abstract class UIElement {
  constructor(public identiifer: string) {}

  clone(targetLocation: string) {
    // ...
  }
}

class SideDrawerElement extends UIElement {
  constructor(
    public identifier: string,
    public position: "left" | "right",
  ) {
    super(identifier);
  }

  //..
}
