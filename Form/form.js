let userFormDOM = document.querySelector('#userForm')
userFormDOM.addEventListener('submit', formHandler)

const alertDOM = document.querySelector('#alert')

const alertFunction = (title, message) => `<div class="alert alert-danger alert-dismissible fade show" role="alert">
<strong>${title} </strong> ${message}
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`
const alertFunction2 = (title2) => `<div class="alert alert-success alert-dismissible fade show" role="alert">
<strong>${title2} </strong>
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`

function formHandler(event) {
    event.preventDefault()
    const USER_NAME = document.querySelector("#username")
    const SCORE = document.querySelector("#score")

    if (USER_NAME.value && SCORE.value) {
        addItem(USER_NAME.value, SCORE.value)
        USER_NAME.value = "";
        SCORE.value = "";
        alertDOM.innerHTML = alertFunction2("Kaydedildi!")
    } else {
        alertDOM.innerHTML = alertFunction(
            "UPS!",
            "Eksik Bilgi Girdiniz. Yeniden Deneyin!")
    }
}

let userListDOM = document.querySelector('#userList')
const addItem = (userName, score) => {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = `
    ${userName}
    <span class="badge bg-primary rounded-pill">${score}</span>
    `
    liDOM.classList.add(
        'list-group-item', 'd-flex', 'justify-content-between', 'align-items-center'
    )
    userListDOM.append(liDOM)
}