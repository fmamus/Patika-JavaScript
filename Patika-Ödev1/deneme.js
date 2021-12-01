let username = prompt("Adınızı Giriniz: ")
let info = document.querySelector("#info")
info.innerHTML = `Merhaba, ${username}! Hoşgeldin!`

let d = new Date()
const date = document.querySelector("#date")
date.innerHTML = `${d}`
