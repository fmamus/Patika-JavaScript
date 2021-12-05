let username = prompt("Adınızı Giriniz: ")
let info = document.querySelector("#info")
info.innerHTML = `Merhaba, ${username}! Hoşgeldin!`

setInterval(() => {
    var date = new Date();
    var dateStr =
  ("00" + (date.getMonth() + 1)).slice(-2) + "/" +
  ("00" + date.getDate()).slice(-2) + "/" +
  date.getFullYear() + " " +
  ("00" + date.getHours()).slice(-2) + ":" +
  ("00" + date.getMinutes()).slice(-2) + ":" +
  ("00" + date.getSeconds()).slice(-2);
  const date2 = document.querySelector("#date")
  date2.innerHTML = `${dateStr}`
}, 100);