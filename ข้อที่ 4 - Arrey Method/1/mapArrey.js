let array1 = [];
let array2 = [];

// 1
array1 = [1, 2, 30, 400];
array2 = array1.map((item) => item * 2);
console.log(array2);

// 2
array1 = [1, 2, 3, 4];
array2 = array1.map((item) => item.toString());
console.log(array2);

// 3
array1 = [1, "1", 2, {}];
array2 = array1.map((item) => typeof item);
console.log(array2);

// 4
array1 = ["apple", "banana", "orange"];
array2 = array1.map((item) => item.toUpperCase());
console.log(array2);

// 5
array1 = [
  { name: "apple", age: 14 },
  { name: "banana", age: 18 },
  { name: "watermelon", age: 32 }
];
array2 = array1.map((item) => item.name);
console.log(array2);

// 6
array1 = [
  { name: "apple", age: 14 },
  { name: "banana", age: 18 },
  { name: "watermelon", age: 32 }
];
array2 = array1.map((item) => item.age);
console.log(array2);

// 7
array1 = [
  { name: "apple", surname: "London" },
  { name: "banana", surname: "Bangkok" },
  { name: "watermelon", surname: "Singapore" }
];
array2 = array1.map((item) => item.name + " " + item.surname);
console.log(array2);

// 8
array1 = [1, 3, 4, 5, 6, 7, 8];
array2 = array1.map((item) => (item % 2 == 0 ? "even" : "odd"));
console.log(array2);

// 9
array1 = [1, -3, 2, 8, -4];
array2 = array1.map((item) => Math.abs(item));
console.log(array2);

// 10
array1 = [100, 200.25, 300.84, 400.3];
array2 = array1.map((item) => item.toFixed(2).toString());
console.log(array2);

// 11
array1 = [
  { name: "apple", birth: "2000-01-01" },
  { name: "banana", birth: "1990-10-01" },
  { name: "watermelon", birth: "1985-12-01" }
];

array2 = array1.map(function (item) {
  item.age = 2019 - +item.birth.split("-", 1)[0];
  return item;
});
console.log(array2);

// 12
array1 = [
  { name: "apple", birth: "2000-01-01" },
  { name: "banana", birth: "1990-10-01" },
  { name: "watermelon", birth: "1985-12-01" }
];
array2 = array1.map(function (item) {
  return `<tr> <td>${item.name}</td> <td>${item.birth}</td> </tr>`;
});
console.log(array2);