// 1) შექმენით ცვლადი და შეინახეთ რიცხვი. თუ ეს რიცხვი ლუწია, დაბეჭდეთ 'even', თუ კენტი მაშინ 'odd'(გამოიყენეთ if, else)
let num = 5 
if ( num % 2 == 0) {
    console.log("num is even")
}else {
    console.log("num is odd")
}



// 2) ამავე რიცხზე შეამოწმეთ, თუ ეს რიცხვი იყოფა 3 ზეც და 5ზეც უნდაშთოდ, დაბეჭდეთ 'ეს რიცხვი არის 3 ის და 5 ის ჯერადი',
if (num / 3 == 0 && num / 5 == 0) {
    console.log('This number is a multiple of 3 and 5.')
}else if(num / 3 == 0 || num / 5 == 0) {
    console.log('This number is a multiple of 3 or 5.')
}else {
    console.log('This number is neither a multiple of 3 nor a multiple of 5')
}
//  თუ მხოლოდ სამზე ან მხოლოდ ხუთზე იყოფა უნაშთოდ დაბეჭდეთ 'ეს რიცხვი არის სამის ან ხუთის ჯერადი', 
// სხვა შემთხვევაში დაბეჭდეთ 'ეს რიცხვი არ არის არც სამის და არც ხუთის ჯერადი'
// 3) ჩამოწერეთ ყველა შედარების ოპერატორი და მიუწერეთ რომელი რას აკეთებს(მოიყვანეთ თითო მაგალითიც)
//  == ubralod amowmebs ori ragac udris tu ara ertmanets
console.log(5 == 4)
// ===  mkacri shemowmebaa da ==-sgan gansxvavdeba imit rom ak monacemta tipic mowmdeba
console.log(5 === "4")
// >= metia an udris
console.log(5 >= 4)

//  <= naklebia an tolia
console.log(5 <= 4)
//  > metia 
console.log(5 > 4)
// < naklebia 
console.log(5 < 4)
// != ar udris
console.log(5 != 4)
// !== mkacria da ak mowmdeba monacemta tipic
console.log(5 !== "4")

// 4) ჩამოწერეთ truthy და falsy მნიშვნელობების მაგალითები(მინიმუმ 3-3)
// truthy "giorgi",5,-5  falsy ,NuN NULL undefined

// 5) პირველი დავალება გააკეთეთ ternary operator ით
num % 2 == 0 ? console.log("num is even") : console.log("num is odd")