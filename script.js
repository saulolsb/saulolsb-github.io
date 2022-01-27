let email = document.getElementById('email')
let missEmail = document.getElementById('missEmail')

let nome = document.getElementById('nome')
let missNome = document.getElementById('missNome')

let check = document.getElementById('check')
let missCheck = document.getElementById('missCheck')

function verify() {
        if (email.value === '') {
            missEmail.classList.remove('d-none')
        }
        if (nome.value === '') {
            missNome.classList.remove('d-none')
        }
        if (!check.checked) {
            missCheck.classList.remove('d-none')
        }
}