// 1) როგორ შეგვიძლია რომ მივწვდეთ და შევცვალოთ ელემენტების სტილები js ში?
// pirvel rigshi unda movipovot wvdoma elementze amis shemdeg ki shegvidzlia rom is chavsvat cvladshi (davarkvat saxeli)
// da amis shemdeg am cvladis saxelze dot notation-it gamovidzaxot style atribute da kidev dot notationit 
// css-is is kutvnileba romelic gvinda rom shevcvalot   for example:
const title = document.getElementById("h1")

title.style.color = "red"

// 2) შექმენი ცარიელი პარაგრაფი html ში და js ის გამოყენებით ჩაუწერე შიგნით რაიმე ტექსტი

const text = document.getElementById("p")
text.innerHTML = "<p>javascript</p>"



// 3) შექმენი დივი html ში. js ის საშუალებით შეინახე მასში 3 ღილაკი და ასევე js ის საშუალებით გასტილე თითოეული ღილაკი id ს გამოყენებით

const buttons = document.getElementById("div")
buttons.innerHTML = "<button>join me</button>  <button>click  me</button>   <button>sign in</button>"

buttons.style.display = "flex"
buttons.style.gap = "30px"


const btns = buttons.querySelectorAll("button");
btns.forEach(button => {
    button.style.width = "130px"
    button.style.height = "30px"
    button.style.borderRadius = "12px"
    button.style.color = "white"
    button.style.backgroundColor = "black"
    button.style.border = "none"

})