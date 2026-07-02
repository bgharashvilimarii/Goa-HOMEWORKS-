// 1) რა არის default პარამეტრი? გააკეთეთ შესაბამისი მაგალითი
// anu iseti parametri rac unkve gadacemulia da tu arguments ar gadascem fuqcuas avtomaturad gamoiyeneba default parametri
function defau(a, b = 15) {
    console.log(a + b)
}
defau(12)

// 2) const info = (name, age) => `my name is ${name}, i'm ${age} years old`
//    info('luka')
//    რას დააბრუნებს ეს კოდი?
// "my name is luka, i'm undefined years old"

// 3) კომენტარების სახით ახსენით რითი განსხვავდება function declaration და function expression
// function declaration aris rodesac wer "function" shemdeg am funqcias arqmev saxels da gadascem parametrebs 
// xolo function expression aris rodesac am funqcias inaxav cvladshi

let x = 5;

console.log(x++);



let a = 10;

let b = a++;

console.log(a);
console.log(b);