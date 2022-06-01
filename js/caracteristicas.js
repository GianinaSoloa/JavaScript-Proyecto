// Muestro características a través de un json

const errorApi = () =>{
    Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: '¡Se ha producido un error, por favor intente más tarde!',
    })
}

function caracteristicas () {
    try {
        let botonCaracteristicas = document.getElementById("botonCaracteristicas");
        botonCaracteristicas.addEventListener("click", async () => {
            const container = document.getElementById("containerCaract");
            container.className = "container";

            let response = await fetch('../data/api.json');
            let data = await response.json();

            data.forEach((producto) => {
                const div = document.createElement("div");
                div.className = "divCaract";
                div.innerHTML = `
                    <h3>${producto.nombre}</h3>
                    <p>${producto.descripcion}</p>
                    <img src='${producto.img}'>
                    <br><br>
                    <p>${producto.precio} por m2</p>
                    <hr/>   
                `;
                container.append(div);
            });

            let botonCerrar = document.createElement("a");
            botonCerrar.className = "botonPresupuesto";
            botonCerrar.innerHTML = "<a>CERRAR</a>"; 
            container.append(botonCerrar);
        
            botonCerrar.addEventListener("click", () => {   
                container.className = "containerOcultar";
                containerCaract.innerHTML = ""; 
            })

            
        })

    } catch (err){
        errorApi();
    }
}

caracteristicas ();