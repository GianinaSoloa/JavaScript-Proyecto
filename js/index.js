
let usd = 800;

const aberturas = [

  { abertura: "aluminio", porcentaje: 0.05 },

  { abertura: "pvc", porcentaje: 0.075 }

]

const placards = [

  { placard: "sin placard", porcentaje: 0 },

  { placard: "melamina", porcentaje: 0.05 },

  { placard: "madera maciza", porcentaje: 0.075 }

]



class CasaCliente {

    constructor (tipoAbertura, tipoPlacard) {

      this.tipoAbertura = tipoAbertura;

      this.tipoPlacard = tipoPlacard;
    }

}


const ingresoAbertura = () => {

  let aberturaCliente = prompt ("¿Qué aberturas prefieres? ¿aluminio ó pvc? Ingrese 0 si desea salir");

  while (aberturaCliente !== "0" && aberturaCliente !== "aluminio" && aberturaCliente !== "pvc") {

    alert("Por favor ingrese un parámetro correcto");

    aberturaCliente = prompt ("¿Qué aberturas prefieres? ¿aluminio ó pvc? Ingrese 0 si desea salir");

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

    metros = parseFloat(prompt("¿Cuántos m2 tendrá tu casa? Ingrese 0 si desea salir"));

  }

  return metrosCliente;

}


let abertura = ingresoAbertura();

if (abertura !== "0"){

  let placard = ingresoPlacard();

  if (placard !== "0"){

    let metros = ingresoMetros();

    if (metros !== "0"){

      const aberturaSeleccionada = aberturas.find((x) => x.abertura === abertura);

      const placardSeleccionado = placards.find((x) => x.placard === placard);

      let seleccion = (aberturaSeleccionada.porcentaje * usd) + (placardSeleccionado.porcentaje * usd) + usd;

      const total = (seleccion,metros) => seleccion * metros;

      let casaTotal = total(seleccion,metros);      


      alert(`El precio será de USD ${seleccion}  por m2, por ende tu casa saldrá aproximadamente USD ${casaTotal}`);
    
    }

  }
}
