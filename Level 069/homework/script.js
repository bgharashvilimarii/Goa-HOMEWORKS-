// 1) შექმენით ფუნქცია რომელსაც გადაეცემა ერთი რიცხვი არგუმენტად. თუ ეს რიცხვი ნაკლებია 100 ზე,
//  მაშინ უნდა დააბრუნოთ რიცხვის 10%, თუ 200 ზე ნაკლებია 20%, სხვა შემთხვევაში 30%. 
// შექმენით სამივე ფუნქციის შექმნის გზით

function dachi(num) {
    if(num < 100) {
        return num * 10 / 100
    }else if (num < 200){
        return num * 20 / 100
    }else {
        return num * 30 / 100
    }
}
console.log(dachi(150))





// 2) რა შემთხვევაში ქვია ფუნქციას anonymous ფუნქცია?
// romelsac saxeli ar aqvs



// 3) რა არის პარამეტრი და არგუმენტი
// argumenti aris is rac frchxilebshi is=wereba anu is rac gadaecema funqcias gamodzaxebisas
// parametri aris cvladi romlic ukve gansazgvrulia funqciashi da agwers ra monacems elodeba funqcia anu parametri aris is rac unda miigos funqciam


// 4) რა არის default პარამეტრი?

// anu iseti parametri rac unkve gadacemulia da tu arguments ar gadascem fuqcuas avtomaturad gamoiyeneba default parametri

// 5) ფუნქციას უნდა გადაეცეს ერთი რიცხვი, თუ ეს რიცხვი მეტია 10 ზე დააბრუნეთ true, სხვა შემთხვევაში false(გააკეთეთ arrow ფუნქციით ერთ ხაზში)
const number = num => num > 10
console.log(number(5))