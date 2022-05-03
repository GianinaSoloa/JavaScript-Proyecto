
let usd = 800;

const aberturas = [

  { tipo: "aluminio", porcentaje: 0.05 },

  { tipo: "pvc", porcentaje: 0.075 }

]

const placards = [

  { tipo: "sin placard", porcentaje: 0 },

  { tipo: "melamina", porcentaje: 0.05 },

  { tipo: "madera maciza", porcentaje: 0.075 }

]

alert("¡Hola! Te daremos un presupuesto aproximado de tu casa llave en mano. Para ello necesitamos algunos datos.");

let abertura = prompt ("¿Qué aberturas prefieres? ¿aluminio ó pvc?");

  if(abertura !== "aluminio" && abertura !== "pvc") {

    alert("Por favor ingrese un parámetro correcto");

    abertura = prompt ("¿Qué aberturas prefieres? ¿aluminio ó pvc?");

  }

let placard = prompt ("¿Qué placard prefieres? ¿melamina, madera maciza o sin placard?");

  if(placard !== "melamina" && placard !== "madera maciza" && placard != "sin placard") {

    alert("Por favor ingrese un parámetro correcto");

    placard = prompt ("¿Qué placard prefieres? ¿melamina, madera maciza o sin placard?");

  }
 
  let metros = parseFloat(prompt("¿Cuántos m2 tendrá tu casa"));

  if (isNaN(metros)) {

    alert("Por favor ingrese un número");

    metros = parseFloat(prompt("¿Cuántos m2 tendrá tu casa"));

  }


let aberturaSeleccionada = aberturas.find((x) => x.tipo === abertura);

let placardSeleccionado = placards.find((x) => x.tipo === placard);

let seleccion = (aberturaSeleccionada.porcentaje * usd) + (placardSeleccionado.porcentaje * usd) + usd;

const total = (seleccion,metros) => seleccion * metros;

let casaTotal = total(seleccion,metros);      


alert(`El precio por m2 será de USD ${seleccion} por ende tu casa saldrá aproximadamente USD ${casaTotal}`);