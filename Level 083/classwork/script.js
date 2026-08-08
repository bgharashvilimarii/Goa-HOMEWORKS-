person = {
    name: "mariami",
    surname: "bgharashvili",
    age: 16,
    height: "164cm",
    weight : "53kg"

}
console.log(Object.keys(person))
console.log(Object.values(person))

for(let[key,value] of Object.entries(person)) {
    console.log(`${key} : ${value}`)
}
person1 = {
    name: "lika",
    job: "police",
    uni: "javaxishvili"
}
const newPerson = Object.assign({}, person,person1)
console.log(newPerson)

// ki sheicvala radgan object.assign gamoikeneba imistvis rom gaaertianos ori obiecti aseve gamoikeneba obieqtebis dasacopyreblad 
// xolo rodesac am ori obiectis gaertinebisas ori ertnairi key xvdeba amdros pirvel key-s mnishvenlobas gadaawers meore mnishvnelobas am shemtxvevashi
// name: "mariiami"-s gadawera name: "lika" da sabolood gamovida name: "lika"