// forEach
// const numbers = [12, 7, 25, 18, 3, 40];
// დავალება:
// forEach-ის გამოყენებით დაბეჭდე თითოეული რიცხვი შემდეგი ფორმატით:
// 12 არის ლუწი
// 7 არის კენტი
// ...


const numbers = [12, 7, 25, 18, 3, 40];
numbers.forEach(num => {
    if(num % 2 == 0) {
        console.log(`${num} is even`);
    }else {
        console.log(`${num} is odd`);
    }
})




// დავალება:
// forEach-ის გამოყენებით დაბეჭდე თითოეული სიტყვა და მისი სიმბოლოების რაოდენობა.
// მაგალითი:
// JavaScript - 10
// HTML - 4

const words = ["JavaScript", "HTML", "CSS", "React"];
words.forEach(word => {
    console.log(`${word} - ${word.length}`)
})


// map
// const numbers = [5, 12, 8, 20, 15];


// დავალება:
// map-ის გამოყენებით შექმენი ახალი მასივი, სადაც:

// თუ რიცხვი ლუწია, გაყავი 2-ზე.
// თუ კენტია, გაამრავლე 3-ზე.


const numberss = [5, 12, 8, 20, 15];
newNums = numberss.map(nums => {
    if(nums % 2 == 0) {
        return nums / 2
    }else {
        return nums * 3
    }
})

console.log(newNums)

// const words = ["apple", "banana", "kiwi", "orange"];


// დავალება:
// map-ის გამოყენებით შექმენი ახალი მასივი, სადაც ყველა სიტყვა იქნება დიდი ასოებით და ბოლოს დაემატება მისი სიგრძე.

// მაგალითი:

// ["APPLE (5)", "BANANA (6)", ...]

const wordss = ["apple", "banana", "kiwi", "orange"]; 
newWords = wordss.map (wor => {
    return `${wor.toUpperCase()} (${wor.length})`
})
console.log(newWords)



// filter
// const numbers = [14, 7, 22, 35, 18, 41, 50];


// დავალება:
// დატოვე მხოლოდ ის რიცხვები, რომლებიც:

// ლუწია
// და 20-ზე ნაკლებია.


const numms = [14, 7, 22, 35, 18, 41, 50]; 
newnumbers = numms.filter(m => {
    if(m % 2 == 0 && m < 20) {
        return m
    }
})
console.log(newnumbers)





// დავალება:

// დატოვე მხოლოდ 10-ზე მეტი რიცხვები.
// მათგან დატოვე მხოლოდ კენტი რიცხვები.
// თითოეული გაამრავლე საკუთარ თავზე (კვადრატი).
// forEach-ით დაბეჭდე შედეგი შემდეგი ფორმატით:

// 15² = 225
// 27² = 729
// 55² = 3025


const newnumberss = numbers.filter(n => n > 10);

const newnumbersss = newnumberss.filter(n => n % 2 === 1);

const newnumberssss = newnumbersss.map(n => n ** 2);

newnumberssss.forEach(result => {
    console.log(result);
});