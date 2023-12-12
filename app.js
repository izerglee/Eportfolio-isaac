
function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');    
    loading.classList += " modal__overlay--visible";


emailjs
    .sendForm(
        'service_usg0ybt',
        'template_0f70npt',
        event.target,
        'oUcotxfYz-zac6T2O'
    ).then( () => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
        }) .catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable. Please contact me directly on izerglee@gmail.com"
            );
        })
}

function toggleModal () {
    // toggle modal
    console.log('toggleModal()')
}