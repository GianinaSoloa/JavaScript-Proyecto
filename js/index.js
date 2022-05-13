
/* La declaro como let ya que probablemente se modifique en el tiempo debido a la inflación */
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
  abertura.innerHTML += `<option value ="${el.tipoAbertura}">${el.tipoAbertura}</option>`
})

const placard = document.getElementById ("seleccionPlacard");
placards.forEach(el => {
  placard.innerHTML += `<option value ="${el.tipoPlacard}">${el.tipoPlacard}</option>`
})

const metrosMal = document.getElementById ("metros");
metrosMal.addEventListener("input", () => {
  if (isNaN(metrosMal.value)) {
    let error = document.createElement("div");
    error.className = "container";
    error.innerHTML = "<h3>Por favor ingrese un número</h3>"; 
    calcularPresupuesto.append(error);
  
    let botonCerrarError = document.createElement("a");
    botonCerrarError.className = "botonPresupuesto";
    botonCerrarError.innerHTML = "<a>CERRAR</a>"; 
    error.append(botonCerrarError);
  
    
    botonCerrarError.onclick = () => {
      error.className = "containerNotShow";
    }
    
    metrosMal.className = "error";
  }
})

let boton = document.getElementById("botonPresupuesto")
boton.onclick = () => {
  
/* Comienzo cálculo de presupuesto */
  const aberturaSeleccionada = aberturas.find((x) => x.tipoAbertura === abertura.value);
  const placardSeleccionado = placards.find((x) => x.tipoPlacard === placard.value);
  let seleccion =  aberturaSeleccionada.calcularAbertura() +  placardSeleccionado.calcularPlacard() + usd;
  const total = (seleccion,metros) => seleccion * metros.value;
  let casaTotal = total(seleccion,metros);  
  
  let presupuestoCreado = document.createElement("div");
  presupuestoCreado.className = "container";
  presupuestoCreado.innerHTML = `<h3>¡Tu presupuesto ha sido creado con éxito!</h3><h4>El precio será de USD ${seleccion} por m2, por ende tu casa saldrá aproximadamente USD ${casaTotal}</h4><br><br>`; 
  calcularPresupuesto.append(presupuestoCreado);

  let botonCerrar = document.createElement("a");
  botonCerrar.className = "botonPresupuesto";
  botonCerrar.innerHTML = "<a>CERRAR</a>"; 
  presupuestoCreado.append(botonCerrar);

  botonCerrar.onclick = () => {
    presupuestoCreado.className = "containerNotShow";
  }

  const metrosBien = document.getElementById ("metros");
  metrosBien.className = "correcto";  

}



