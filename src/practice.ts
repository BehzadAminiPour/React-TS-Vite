let user: {
  name: string;
  age: number;
  mariage: boolean;
  id: string | number;
};

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

function calculator(
  a: number,
  b: number,
  calcFn: (a: number, b: number) => number
) {
  return calcFn(a, b);
}
console.log(calculator(1, 5, add));
console.log(add(2, 3));
