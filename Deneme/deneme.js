let info = document.querySelector("#info")
info.addEventListener("click", domClick)

function domClick(){
    console.log("JAVASCRİPT AWESOME")
    this.style.color == "red" ? this.style.color = "black" : this.style.color = "red"
}