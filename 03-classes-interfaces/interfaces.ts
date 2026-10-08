interface Authenticatable {
  email: string;
  password: string;

  login(): void;
  logout(): void;
}

interface AuthenticatableAdmin extends Authenticatable {
  role: "Admin" | "NoAdmin";
}

class AuthenticatableUser implements Authenticatable {
  constructor(
    public email: string,
    public password: string,
  ) {}
  login() {}
  logout() {}
}

//
function authenticate(user: Authenticatable) {
  user.login();
}

// interface Authenticatable {
//   role: string;
// }

let user: Authenticatable;

user = {
  email: "suraj@x.com",
  password: "abc",
  login() {
    //  ..
  },
  logout() {
    //  ..
  },
};

console.log(user.email);
