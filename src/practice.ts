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
  console.log(result);
}
add(1, 5);

function plus(a: number, b: number) {
  const result = a + b;
  return result;
}
