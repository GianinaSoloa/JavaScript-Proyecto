
const enviadoForm = () =>{
    Swal.fire({
        icon: 'success',
        title: '¡Mensaje enviado correctamente!',
        text: `A la brevedad nos pondremos en contacto`,
    })
}

let formContacto = document.getElementById("formularioContacto");
formContacto.addEventListener("submit", (e) => {
    e.preventDefault();
    enviadoForm();
})
