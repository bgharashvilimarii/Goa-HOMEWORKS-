// 1) რა არის window ობიექტი?
// window mtavari obieqtia brauzershi da rac javascriptis brauzershi mushaobs kvelaferi am window obieqtis shignitaa.

// 2) ჯავასკრიპტში ცვლადის შექმენის რა გზები გვაქ? კომენტარების სახით დაწერეთ მათ შორის განსხვავება
// 1) var-es aris dzveli versia romelsac dges titkmis agar ikeneben- misi mnishvenlobis shecvla shegvidzlia
//  2) const - amas cvladis shesaqmnelad mashin ikeneben rodesac misi(cvladis) mnishvnelobis shecvla agar surt
//  3) let - am shemtxvevashi yvelaze mosaxerxebelia- da misi mnishvelobis shecvla shegidzlia.

// 3) რატომ არ უნდა შევქმნათ ცვლადი var ით? ES6 განახლების შემდეგ რატომ არ წაშალეს ეს keyword თუ მისი გამოყენება ცუდი პრაქტიკა გახდა?
//  pirvel rigshi var window obieqts tvirtavs-tanac dges mas agaravin ikenebs  da ufro mokled rom vtqvat-cudi praqtikaa
//  rac sheexeba ratom ar washales- var rom waeshalat ES6 ganaxlebamde sheqmnili site-bi sadac "var" hkondat gamokenebuli paktiurad agar imushavebda

// 4) რა არის increment და decrement? გააკეთეთ 1-1 მაგალითი
// increment aris ricxvis ertit gazrda 
let num = 1
num++
console.log(num)
//decrement aris ricxvis ertit shemcireba
let nums = 1
nums--
console.log(num)

// 5) რა არის string literal? მისი საშუალებით ააგე შემდეგი წინადადება: i am ? years old. ?_ის ნაცვლად უნდა გამოიყენოთ
//  ცვლადი სადაც შეინახავთ თვქნე ასაკს
// string literal aris igive rac f-string pythonshi anu masshi rasac chawer kvelafers gadaaqcevs string-ad
let age = 15
console.log(`i am ${age} years old.`)

// 6) შექმენით რაიმე ცვლადი და კონსოლში გამოიტანეთ მისი მონაცემთა ტიპი
let name = "mariam"
console.log(typeof name)
