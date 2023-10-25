
function contact(event) {
    event.preventDefault()
emailjs
    .sendForm(
        'service_usg0ybt',
        'template_0f70npt',
        event.target,
        'oUcotxfYz-zac6T2O'
    ).then( () => {
        console.log('this worked')
    }
    )
const loading = document.querySelector('.modal__overlay--loading')
const success = document.querySelector('.modal__overlay--success')
loading.classList += " modal__overlay--visible"
setTimeout(() => {
    loading.classList.remove("modal__overlay--visible")
    success.classList += " modal__overlay--visible"
    console.log('it worked')
}, 1000);

}