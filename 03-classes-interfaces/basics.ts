// class User {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     // this.name = "Suraj";
//     this.name = name;
//     this.age = age;
//   }
// }

class User {
  readonly hobbies: string[] = [];

  constructor(
    public name: string,
    private readonly age: number,
  ) {}
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
