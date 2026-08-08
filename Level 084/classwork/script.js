// dom aris document object model romelic imistvis gamoikeneba rom javascriptit movipovot wvdoma html-is elementebze

const p = document.getElementsByTagName("p")
const p1 = document.getElementById("paragrap")
const p4 = document.getElementsByClassName("paragrap")
const p2 = document.querySelector(".paragrap")
const p3 = document.querySelectorAll(".paragrap")

//  რითი განსხვავდება innerHTML და textContent
// text contenti mxolod elementis texts- shigtavss cvlis xolo innerhtmli cvlis rogorc  text-is shigtavss aseve shegvidzlia htmlis tegebic shevcvalot

// 4) შექმენით div. js ის გამოყენებით ამ დივში შეინახეთ ორი პარაგრაფ თეგი და ასევე 4 ნებისმიერი css კუთვნილებით გასტილეთ ეს დივი

let div = document.getElementById("div")
div.innerHTML = "<p>join</p> <p>sign up</p>"

div.style.backgroundColor = "red"
div.style.border = "1px solid black"
div.style.color = "white"
div.style.borderRadius = "12px"