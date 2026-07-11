// .forEach()
// const fruits = ["Apple", "Banana", "Orange"];
// დავალება: დაბეჭდე ყველა ელემენტი .forEach()-ით.
// ---
const fruits = ["Apple", "Banana", "Orange"];
fruits.forEach(fruit => {
    console.log(fruit)
})


// .forEach()
// const numbers = [5, 10, 15];
// დავალება: გამოთვალე რიცხვების ჯამი .forEach()-ით.

const numbers = [5, 10, 15];
let sum = 0

numbers.forEach(num => {
    console.log(sum += num)
})


// .map()
// const numbers = [2, 4, 6];
// დავალება: შექმენი ახალი მასივი, სადაც ყველა რიცხვი გაორმაგებულია.

const numberss = [2, 4, 6];

const doubled = numberss.map((num) => {
  return num * 2;
});

console.log(doubled);


// .map()
// const ages = [18, 20, 25];
// დავალება: შექმენი ახალი მასივი, სადაც თითოეულ ასაკს დამატებული აქვს 1 წელი.
const ages = [18, 20, 25];

const newages = ages.map((age) => {
    return age + 1
})

console.log(newages)