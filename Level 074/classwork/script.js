// დაწერე for ციკლი, რომელიც დაბეჭდავს ყველა რიცხვს 1-დან 50-ის ჩათვლით.
for(let i = 1; i < 51; i++){
    console.log(i)
}


// დაწერე for ციკლი, რომელიც 100-დან 1-მდე დაბეჭდავს ყველა რიცხვს კლებადობით (reverse loop).
for(let i = 100; i > 0; i--){
    console.log(i)
}

// მოცემულია სია:

// const fruits = ["Apple", "Banana", "Orange", "Mango", "Kiwi"];


// for ციკლისა და ინდექსების გამოყენებით დაბეჭდე სიის ყველა ელემენტი.
const fruits = ["Apple", "Banana", "Orange", "Mango", "Kiwi"];
for(let i = 0; i < fruits.length ; i++) {
    console.log(fruits[i])
}



// დაწერე for ციკლი, რომელიც 1-დან 100-მდე დაბეჭდავს მხოლოდ ლუწ რიცხვებს.
for(i = 2; i < 101; i+= 2) {
    console.log(i)
}


// მოცემულია სია:

// const numbers = [12, 7, 25, 40, 3, 18, 9];

// for ციკლისა და ინდექსების გამოყენებით იპოვე ყველა ელემენტის ჯამი და ბოლოს დაბეჭდე მიღებული შედეგი.
const numbers = [12, 7, 25, 40, 3, 18, 9];
result = 0
for(let i = 0; i < numbers.length ; i++) {
    result = result + numbers[i]
}
console.log(result)