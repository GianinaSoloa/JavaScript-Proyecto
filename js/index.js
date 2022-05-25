
// La declaro como let ya que probablemente se modifique en el tiempo debido a la inflación
let usd = 800;

class Abertura {
  constructor (tipoAbertura, porcentaje) {
  this.tipoAbertura = tipoAbertura;
  this.porcentaje = porcentaje;
  }

  calcularAbertura(){
    return this.porcentaje * usd; 
  }
}

class Placard {
  constructor (tipoPlacard, porcentaje) {
  this.tipoPlacard = tipoPlacard;
  this.porcentaje = porcentaje;
  }

  calcularPlacard(){
  return this.porcentaje * usd;
  }
}

const aberturas = []
aberturas.push(new Abertura("aluminio", 0.05));
aberturas.push(new Abertura("pvc", 0.075));


const placards = []
placards.push(new Placard("sin placard", 0));
placards.push(new Placard("melamina", 0.05));
placards.push(new Placard("madera maciza", 0.075));

const abertura = document.getElementById ("seleccionAbertura");
aberturas.forEach(el => {
  abertura.innerHTML += `<option value ="${el.tipoAbertura}">${el.tipoAbertura}</option>`;
})

const placard = document.getElementById ("seleccionPlacard");
placards.forEach(el => {
  placard.innerHTML += `<option value ="${el.tipoPlacard}">${el.tipoPlacard}</option>`;
})

const metros = document.getElementById ("metros");

// Verificar datos

const error = () =>{
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: '¡Parece que no ingresaste un parámetro válido!',
  })
}

metros.addEventListener("input", () => {
  if (isNaN(metros.value) || metros.value <= "0") {
    error();
    metros.className = "error";
  }
})


// Almaceno en Local Storage 

metros.addEventListener("input", function() {
  localStorage.setItem("abertura", seleccionAbertura.selectedIndex);
})

seleccionPlacard.addEventListener("input", function() {
  localStorage.setItem("placard", seleccionPlacard.selectedIndex);
})

metros.addEventListener("input", function() {
  localStorage.setItem("metros", metros.value);
})

// Muestro datos almacenados en Local Storage en DOM

function mostrarDatos(){
  localStorage.length > 0 && (abertura.selectedIndex = localStorage.getItem("abertura").toString());
  localStorage.length > 0 && (placard.selectedIndex = localStorage.getItem("placard").toString());
  localStorage.length > 0 && (metros.value = localStorage.getItem("metros"));
};

mostrarDatos();

// Comienzo cálculo de presupuesto

let boton = document.getElementById("botonPresupuesto");
boton.addEventListener("click", () => {

  if (abertura.value != "aluminio" && abertura.value != "pvc") {
    error();
    abertura.className = "error";
  }
  if (placard.value != "sin placard" && placard.value != "melamina" && placard.value != "madera maciza") {
    error();
    placard.className = "error";
  } 
  if (isNaN(metros.value) || metros.value <= "0") {
    error();
    metros.className = "error";
  }

  const aberturaSeleccionada = aberturas.find((aberturas) => aberturas.tipoAbertura === abertura.value);

  const placardSeleccionado = placards.find((placards) => placards.tipoPlacard === placard.value);

  if (aberturaSeleccionada != null && placardSeleccionado != null) {

  let seleccion =  aberturaSeleccionada.calcularAbertura() +  placardSeleccionado.calcularPlacard() + usd;

  const total = (valorSeleccion,valorMetros) => valorSeleccion * valorMetros;

  if (isNaN(metros.value) || metros.value === "") {
    error();
    metros.className = "error";
  } else {
    let casaTotal = total(seleccion,metros.value);
    const correcto = () =>{
      Swal.fire({
        icon: 'success',
        title: '¡Presupuesto creado correctamente!',
        text: `El precio será de USD ${seleccion} por m2, por ende tu casa saldrá aproximadamente USD ${casaTotal}`,
      })
    }
    correcto();
  }

  // Quitar recuadro rojo

  abertura.className = "correcto"; 
  placard.className = "correcto"; 
  metros.className = "correcto";  
}
})

