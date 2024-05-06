type User = {
  name: string;
  age: number;
  mariage: boolean;
  id: string | number;
};

let user: User;

user = {
  name: "Bezi",
  age: 36,
  mariage: false,
  id: 8201,
};

let hobbies: (string | number)[];
// let hobbies: Array<string>;
hobbies = ["sports", "games", "learning", 1];

function add(a: number, b: number) {
  const result = a + b;
  return result;
}

type AddFn = (a: number, b: number) => number;

function calculator(a: number, b: number, calcFn: AddFn) {
  return calcFn(a, b);
}
console.log(calculator(1, 5, add));
console.log(add(2, 3));

interface Credentials {
  password: number;
  email: string;
}

let cred: Credentials;

cred = {
  password: 8201,
  email: "sth@sth",
};
