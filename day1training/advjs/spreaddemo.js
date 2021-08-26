const arr1 = [1, 3, 5];
const arr2 = [5, 3, 9];
const arr = [...arr1, ...arr2];
console.log(arr); // [1, 3, 5, 5, 3, 9];

const numbers = [2, 9, 5];
const max = Math.max(...numbers);
console.log(max); // 9

const obj = {
    name: "George",
    age: 65,
};

const data = {
    ...obj,
    ...(obj.age > 60 ? { retired: true } : {}),
};

console.log(data);
