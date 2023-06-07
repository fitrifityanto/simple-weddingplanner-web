 function getName() {
    let name = prompt("Silahkan masukkan nama Kamu")
    document.getElementById("yourName").innerText = name
}
getName()

function validateForm() {
    const name = document.forms['message-form']['full-name'].value
    // const birthDate = document.forms['message-form']['birth-date'].value
    const birthDate = new Date(document.forms['message-form']['birth-date'].value)
    const gender = document.forms['message-form']['gender'].value
    const messages = document.forms['message-form']['messages'].value

    const birthDates = `${birthDate.getDate()}/${birthDate.getMonth()+1}/${birthDate.getFullYear()}`
    // console.log({name, birthDate, gender, messages})

    document.getElementById("sender-full-name").innerText = name
    document.getElementById("sender-birth-date").innerText = birthDates
    document.getElementById("sender-gender").innerText = gender
    document.getElementById("sender-messages").innerText = messages

    return false
}

function getCurrentDate() {
    const currentDate = new Date()

    document.getElementById("currentDate").innerText = currentDate
}
getCurrentDate()

