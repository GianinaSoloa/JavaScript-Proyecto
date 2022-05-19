
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
    let error = document.createElement("div");
    error.className = "container";
    error.innerHTML = "<h3>Por favor ingrese un parámetro válido</h3>"; 
    calcularPresupuesto.append(error);
  
    let botonCerrarError = document.createElement("a");
    botonCerrarError.className = "botonPresupuesto";
    botonCerrarError.innerHTML = "CERRAR"; 
    error.append(botonCerrarError);
  
    botonCerrarError.onclick = () => {
      error.className = "containerNotShow";
    }
}

abertura.addEventListener("input", () => {
  if (abertura.value != "aluminio" && abertura.value != "pvc") {
    error();
    abertura.className = "error";
  }
})

placard.addEventListener("input", () => {
  if (placard.value != "sin placard" && placard.value != "melamina" && placard.value != "madera maciza") {
    error();
    placard.className = "error";
  }
})

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
  if (localStorage.length > 0){
    abertura.selectedIndex = localStorage.getItem("abertura").toString();
    placard.selectedIndex = localStorage.getItem("placard").toString();
    metros.value = localStorage.getItem("metros");
  }
};

mostrarDatos();

// Comienzo cálculo de presupuesto

let boton = document.getElementById("botonPresupuesto");
boton.addEventListener("click", () => {

  if (abertura.value != "aluminio" && abertura.value != "pvc") {
    error();
    abertura.className = "error";
  }else if (placard.value != "sin placard" && placard.value != "melamina" && placard.value != "madera maciza") {
    error();
    placard.className = "error";
  } 

  const aberturaSeleccionada = aberturas.find((aberturas) => aberturas.tipoAbertura === abertura.value);
  const placardSeleccionado = placards.find((placards) => placards.tipoPlacard === placard.value);
  let seleccion =  aberturaSeleccionada.calcularAbertura() +  placardSeleccionado.calcularPlacard() + usd;
  const total = (valorSeleccion,valorMetros) => valorSeleccion * valorMetros;

  if (isNaN(metros.value) || metros.value === "") {
    error();
    metros.className = "error";
  } else {
    let casaTotal = total(seleccion,metros.value);
    let presupuestoCreado = document.createElement("div");
    presupuestoCreado.className = "container";
    presupuestoCreado.innerHTML = `<h3>¡Tu presupuesto ha sido creado con éxito!</h3><h4>El precio será de USD ${seleccion} por m2, por ende tu casa saldrá aproximadamente USD ${casaTotal}</h4><br><br>`; 
    calcularPresupuesto.append(presupuestoCreado);

    let botonCerrar = document.createElement("a");
    botonCerrar.className = "botonPresupuesto";
    botonCerrar.innerHTML = "CERRAR"; 
    presupuestoCreado.append(botonCerrar);
  
    botonCerrar.onclick = () => {
      presupuestoCreado.className = "containerNotShow";
    }
  }

  // Quitar recuadro rojo

  abertura.className = "correcto"; 
  placard.className = "correcto"; 
  metros.className = "correcto";  

})



