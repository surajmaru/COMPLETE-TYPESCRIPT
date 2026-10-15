const appUser = {
  name: "Suraj",
  age: 22,
  Permissions: [{ id: 1, title: "Admin", description: "Admin access" }],
};

// type AppUser = typeof appUser;

type AppUser = {
  name: string;
  age: number;
  permissions: {
    id: string;
    title: string;
    description: string;
  }[];
};

type Perms = AppUser["permissions"];
type Perm = Perms[number];

type Names = string[];
type Name = Names[number];
