if (10 > 7) {
    console.log(false)
}else if(10 > 6) {
    console.log(false)
}else {
    console.log(true)
}


10 > 7 ? 10 > 6 ? console.log(false) : console.log(true) : console.log(true)

// function greet(name) {
//     const 
//     console.log(`Hello ${name}`)
// }
// greet("mari")


const greet = (name) => console.log(`Hello ${name}`)
greet("mari")
