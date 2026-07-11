// 1. **მასივის ელემენტების ჯამის გამოთვლა (`for`)**
//    მოცემულია რიცხვების მასივი. `for` ციკლის გამოყენებით გამოთვალე ყველა ელემენტის ჯამი.

const numbers = [1,2,3,4,5];
sum = 0;
for(let i = 0; i < numbers.length; i++ ) {
    sum = sum + numbers[i];
}
console.log(sum);




// 2. **ყველაზე დიდი რიცხვის პოვნა (`for`)**
//    მოცემულია რიცხვების მასივი. იპოვე მასივში ყველაზე დიდი რიცხვი.
const number = [1,2,3,7,4,5];
maxNum = number[0];
for(let i = 0; i < number.length; i++ ) {
    if(maxNum < number[i]) {
        maxNum = number[i];
    }
}
console.log(maxNum);



// 3. **ლუწი რიცხვების დათვლა (`while`)**
//    მოცემულია რიცხვების მასივი. `while` ციკლის გამოყენებით დაითვალე, რამდენი ლუწი რიცხვია მასივში.

const num = [1,2,3,7,4,5]
total = 0
let i = 0
while (i < numbers.length) {
  if (num[i] % 2 === 0) {
    total += 1;
  }
  i++;
}
console.log(total);


// 4. **რიცხვების ჯამი `prompt()`-ით (`do...while`)**
//    `prompt()`-ის გამოყენებით შეაყვანინე მომხმარებელს რიცხვები. შეყვანა უნდა დასრულდეს, როდესაც მომხმარებელი შეიყვანს `0`-ს. ბოლოს დაბეჭდე შეყვანილი რიცხვების ჯამი.
let um = 0;
let numberr;
do {
  numberr = prompt("enter number: ");
  um += numberr;
} while (numberr !== 0);

console.log("numbers total is", sum);




// 5. **სახელის ძებნა (`for` + `prompt()`)**
//    მოცემულია სახელების მასივი. `prompt()`-ით შეაყვანინე მომხმარებელს სახელი და შეამოწმე, არსებობს თუ არა ის მასივში.


const names = ["Nika", "Ana", "Luka", "Mariam"];
let userName = prompt("Enter a name:");
let found = false;
for (let i = 0; i < names.length; i++) {
    if (names[i] === userName) {
        found = true;
    }
}
if (found) {
    console.log("Name found");
} else {
    console.log("Name not found");
}


// 6. **პაროლის შემოწმება (`while` + `prompt()`)**
//    მომხმარებელს სთხოვე პაროლის შეყვანა `prompt()`-ის საშუალებით. ციკლი უნდა გაგრძელდეს მანამ, სანამ სწორ პაროლს არ შეიყვანს.
const password = "124";
let userPassword = prompt("Enter password:");
while (userPassword !== password) {
    userPassword = prompt("Wrong password! Try again:");
}

console.log("Correct password!");

// 7. **მასივის ელემენტების უკუღმა დაბეჭდვა (`while`)**
//    მოცემულია მასივი. `while` ციკლის გამოყენებით დაბეჭდე ელემენტები ბოლო ინდექსიდან პირველამდე.


const numbers = [10, 20, 30, 40, 50];
let i = numbers.length - 1;
while (i >= 0) {
    console.log(numbers[i]);
    i--;
}

// 8. **ჩაშენებული ციკლი – ტოლობის შემოწმება**
//    მოცემულია ორი რიცხვების მასივი. ჩაშენებული `for` ციკლების გამოყენებით იპოვე და დაბეჭდე ყველა საერთო ელემენტი.


const list = [1, 2, 3, 4];
const list1 = [3, 4, 5, 6];
for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list1.length; j++) {
        if (list[i] === list1[j]) {
            console.log(list[i]);
        }
    }
}

// 9. **ჩაშენებული ციკლი – გამრავლების ცხრილი**
//    ჩაშენებული `for` ციკლების გამოყენებით დაბეჭდე 1-დან 10-მდე გამრავლების ცხრილი.
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(i + " * " + j + " = " + (i * j));
    }
}



// 10. **საშუალო არითმეტიკულის გამოთვლა (`for`)**
//     მოცემულია შეფასებების მასივი. გამოთვალე მათი საშუალო არითმეტიკული.

const grades = [80, 90, 100, 70];
let summ = 0;
for (let i = 0; i < grades.length; i++) {
    summ = summ + grades[i];
}
let average = summ / grades.length;

console.log(average);