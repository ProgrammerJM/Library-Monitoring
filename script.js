const scriptURL = 'https://script.google.com/macros/s/AKfycbxt-j-GxlaXwW3WnwgASKytf8T5qaI0GS6kFoZpk29-4afESHPJP1nub7mQrL9PWA0/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { 
        method: "POST", body: new FormData(form)
    })
        .then(response => {
            msg.innerHTML = "Welcome To ICHEM Library!"
            setTimeout(function() {
                msg.innerHTML = ""
        }, 1000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})