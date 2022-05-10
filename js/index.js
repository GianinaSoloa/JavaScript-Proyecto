
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

aberturas.push(new Abertura("aluminio", 0.05))

aberturas.push(new Abertura("pvc", 0.075))


const placards = []

placards.push(new Placard("sin placard", 0))

placards.push(new Placard("melamina", 0.05))

placards.push(new Placard("madera maciza", 0.075))


/* Declaro 3 funciones ya que quiero que tenga siempre la posibilidad de salir en cada pregunta, y a futuro serán muchas más preguntas */

const ingresoAbertura = () => {

  let aberturaCliente = prompt ("¿Qué aberturas prefieres? ¿aluminio ó pvc? Ingrese 0 si desea salir");

  while (aberturaCliente !== "0" && aberturaCliente !== "aluminio" && aberturaCliente !== "pvc") {

    alert("Por favor ingrese un parámetro correcto");

    aberturaCliente = prompt ("¿Qué aberturas prefieres? ¿aluminio ó pvc? Ingrese 0 si desea salir");

  }
	
  if (aberturaCliente === "0"){
	  
    let botonPresupuesto = document.getElementById("botonPresupuesto");
	  
      botonPresupuesto.className = "background-color-error";

      let parrafo = document.createElement("p");
	  
      parrafo.id = "pPresupuesto";
	  
      parrafo.innerHTML = "<p>Eligió salir. Para calcular un presupuesto haga clic nuevamente en el botón.</p>"; 
	  
      parrafoPresupuesto.append(parrafo);
	  
    }
	
  return aberturaCliente;

}


const ingresoPlacard = () => {

  let placardCliente = prompt ("¿Qué placard prefieres? ¿melamina, madera maciza o sin placard? Ingrese 0 si desea salir");

  while (placardCliente !== "0" && placardCliente !== "melamina" && placardCliente !== "madera maciza" && placardCliente !== "sin placard") {

    alert("Por favor ingrese un parámetro correcto");

    placardCliente = prompt ("¿Qué placard prefieres? ¿melamina, madera maciza o sin placard? Ingrese 0 si desea salir");

  }

  return placardCliente;

}


const ingresoMetros = () => {

  let metrosCliente = prompt ("¿Cuántos m2 tendrá tu casa? Ingrese 0 si desea salir");

  while (metrosCliente !== "0" && isNaN(metrosCliente)) {

    alert("Por favor ingrese un número");

    metrosCliente = parseFloat(prompt("¿Cuántos m2 tendrá tu casa? Ingrese 0 si desea salir"));

  }

  return metrosCliente;

}

let boton = document.getElementById("botonPresupuesto")

boton.onclick = () => {
  
/* Comienzo cálculo de presupuesto */

let abertura = ingresoAbertura();

if (abertura !== "0"){

  let placard = ingresoPlacard();

  if (placard !== "0"){

    let metros = ingresoMetros();

    if (metros !== "0"){

      const aberturaSeleccionada = aberturas.find((x) => x.tipoAbertura === abertura);

      const placardSeleccionado = placards.find((x) => x.tipoPlacard === placard);

      let seleccion =  aberturaSeleccionada.calcularAbertura() +  placardSeleccionado.calcularPlacard() + usd;

      const total = (seleccion,metros) => seleccion * metros;

      let casaTotal = total(seleccion,metros);      


      alert(`El precio será de USD ${seleccion}  por m2, por ende tu casa saldrá aproximadamente USD ${casaTotal}`);
      
      let botonPresupuesto = document.getElementById("botonPresupuesto");
		
      botonPresupuesto.innerText = "Presupuesto Calculado Correctamente";
		
      botonPresupuesto.className = "background-color-fine";
		
      document.getElementById("pPresupuesto");
	
    }

  }
}

}