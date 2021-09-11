const form = document.querySelector('#form')
const messages_div = document.querySelector('.messages')

form.addEventListener('submit', e => {
    e.preventDefault()
    e.srcElement[0].value = ""
})

messages.forEach(message => {
    let code = document.createElement("div")
    code.className += "message"
    code.innerHTML = `
        <div id="user">
        ${message.user}
        </div>
        <div id="message">
        ${message.message}
        </div>
    `
    messages_div.append(code)
})
