const numbers = [3, 7, 12, 20];

for(num of numbers) {
    console.log(num)
}

const word = "JavaScript";
for(char of word) {
    console.log(char)
}

const fruits = ["Apple", "Banana", "Orange"];
for(fruit of fruits) {
    console.log(`${fruit} is delicious`)
}

const numberss = [10, 5, 8, 2];
let sum = 0
for(nums of numberss) {
    sum += nums
}
console.log(sum)


const number = [4, 9, 12, 7, 18, 5];
for(n of number) {
    if(n % 2 == 0) {
        console.log(n)
    }
}

const colors = ["Red", "Blue", "Green"];
for(color in colors) {
    console.log(color)
}

const colorss = ["Red", "Blue", "Green"]; 
for(col in colorss){
    console.log(col, colorss[col])
}

const person = {
    name: "John",
    age: 25,
    country: "USA"
};

for(per in person) {
    console.log(per)
}

for(value in person) {
    console.log(person[value])
}
for(both in person) {
    console.log(`${both} : ${person[both]} `)
}

const words = "Programming";
let count = 0
for(letter in words) {
    count++
}
console.log(count)


const nu = [12, 45, 8, 91, 30];
let maxnum = nu[0]
for(m of nu){
    if(maxnum < m) {
        maxnum = m
    }
}
console.log(maxnum)

const fruitss = ["Apple", "Banana", "Orange", "Kiwi", "Mango"];
let result = 0
for(frut of fruitss) {
    result++
}
console.log(result)



const students = {
  John: 85,
  Alice: 92,
  Bob: 78,
  Emma: 96,
  Mike: 88
};
const score = []
for(stu in students){
    score.push(students[stu])
}
let highscore = score[0]
for(sc of score) {
    if(highscore < sc ){
        highscore = sc
    }
}
console.log(highscore)
