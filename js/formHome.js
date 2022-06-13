
const enviadoForm = () =>{
    Swal.fire({
        icon: 'success',
        title: '¡Mensaje enviado correctamente!',
        text: `A la brevedad nos pondremos en contacto`,
    })
}

let formHome = document.getElementById("formularioHome");
formHome.addEventListener("submit", (e) => {
    e.preventDefault();
    enviadoForm();
})