// forEach
// const numbers = [12, 7, 25, 18, 3, 40];
// დავალება:
// forEach-ის გამოყენებით დაბეჭდე თითოეული რიცხვი შემდეგი ფორმატით:
// 12 არის ლუწი
// 7 არის კენტი
// ...

numbers = [12, 7, 25, 18, 3, 40];
numbers.forEach(cur => {
    if(cur % 2 === 0) {
        console.log(`${cur} is even`)
    }else {
        console.log(`${cur} is odd`)
    }
    
})


// const words = ["JavaScript", "HTML", "CSS", "React"];


// დავალება:
// forEach-ის გამოყენებით დაბეჭდე თითოეული სიტყვა და მისი სიმბოლოების რაოდენობა.

const words = ["JavaScript", "HTML", "CSS", "React"];

words.forEach(vel => {
    console.log(`${vel} -${vel.length}`)
})





// დავალება:

// map-ის გამოყენებით შექმენი ახალი მასივი, სადაც:

// თუ რიცხვი ლუწია, გაყავი 2-ზე.
// თუ კენტია, გაამრავლე 3-ზე.
const numberss = [5, 12, 8, 20, 15];

const newNumbers = numberss.map((number) => {
  if (number % 2 === 0) {
    return number / 2;
  } else {
    return number * 3;
  }
});

console.log(newNumbers);




// const words = ["apple", "banana", "kiwi", "orange"];
// დავალება:
// map-ის გამოყენებით შექმენი ახალი მასივი, სადაც ყველა სიტყვა იქნება დიდი ასოებით და ბოლოს დაემატება მისი სიგრძე.
// მაგალითი:
// ["APPLE (5)", "BANANA (6)", ...]


const wordss = ["apple", "banana", "kiwi", "orange"];
const newWords = wordss.map((word) => {
  return `${word.toUpperCase()} (${word.length})`;
});

console.log(newWords);


// filter,
// ,
// const numbers = [14, 7, 22, 35, 18, 41, 50];
// დავალება:
// დატოვე მხოლოდ ის რიცხვები, რომლებიც:
// ლუწია,
// და 20-ზე ნაკლებია.


const numbersss = [14, 7, 22, 35, 18, 41, 50];

const result = numbersss.filter((number) => {
  return number % 2 === 0 && number < 20;
});

console.log(result);

// filter
// const words = [
//   "computer",
//   "cat",
//   "banana",
//   "sun",
//   "javascript",
//   "pen"
// ];
// დავალება:
// დატოვე მხოლოდ ის სიტყვები, რომელთა სიგრძე 5-დან 10 სიმბოლომდეა (ორივე ჩათვლით).

// ---

const wordsss = [
  "computer",
  "cat",
  "banana",
  "sun",
  "javascript",
  "pen"
];

const resultt = wordsss.filter((word) => {
  return word.length >= 5 && word.length <= 10;
});

console.log(resultt);


// findIndex
// const numbers = [4, 12, 15, 18, 27, 30];
// დავალება:
// იპოვე პირველი რიცხვის ინდექსი, რომელიც:
// კენტია
// და 20-ზე მეტია.

const numbers1 = [4, 12, 15, 18, 27, 30];

const index = numbers1.findIndex((number) => {
  return number % 2 !== 0 && number > 20;
});

console.log(index);



// დავალება:
// იპოვე პირველი სიტყვის ინდექსი, რომლის სიგრძე 6 სიმბოლოზე მეტია.

// ---

const words4 = ["HTML", "CSS", "React", "JavaScript", "Node"];

const first = words4.findIndex((word) => {
  return word.length > 6;
});

console.log(first);