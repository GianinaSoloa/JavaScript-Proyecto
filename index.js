
let usd = 800;

const aberturas = [
  {abertura: "aluminio", precio: 40},
  {abertura: "pvc", precio: 60}
]

const placards = [
  {placard: "sin placard", precio: 0},
  {placard: "melamina", precio: 40},
  {placard: "madera maciza", precio: 60}
]

class casaCliente {
    constructor (tipoAbertura, tipoPlacard){
      this.tipoAbertura = tipoAbertura;
      this.tipoPlacard = tipoPlacard;
    }

  calcularTotal(){
    return usd + this.tipoAbertura + this.tipoPlacard;
  }  
}

alert("¡Hola! Te daremos un presupuesto aproximado de tu casa llave en mano. Para ello necesitamos algunos datos.");

let abertura = prompt ("¿Qué aberturas prefieres? ¿aluminio ó pvc?");
  if(abertura !== "aluminio" && abertura !== "pvc"){
    alert("Por favor ingrese un parámetro correcto");
    abertura = prompt ("¿Qué aberturas prefieres? ¿aluminio ó pvc?");
  }

let placard = prompt ("¿Qué placard prefieres? ¿melamina, madera maciza o sin placard?");
  if(placard !== "melamina" && placard !== "madera maciza" && placard != "sin placard"){
    alert("Por favor ingrese un parámetro correcto");
    placard = prompt ("¿Qué placard prefieres? ¿melamina, madera maciza o sin placard?");
  }

let total = parseFloat(prompt("¿Cuántos m2 tendrá tu casa"));
  if (isNaN(total)){
    alert("Por favor ingrese un número");
    total = parseFloat(prompt("¿Cuántos m2 tendrá tu casa"));
  }

if (abertura === "aluminio" && placard === "sin placard"){
    const eleccionUsuario = new casaCliente (aberturas[0].precio, placards[0].precio);
    let totalMetros = eleccionUsuario.calcularTotal();
    let casaTotal = total * totalMetros;
    alert(`El precio por m2 te saldría aproximadamente USD ${totalMetros} por ende el precio de tu casa será aproximadamente de USD ${casaTotal}`);
}else if (abertura === "aluminio" && placard === "melamina"){
    let eleccionUsuario2 = new casaCliente (aberturas[0].precio, placards[1].precio);
    let totalMetros2 = eleccionUsuario2.calcularTotal();
    let casaTotal2 = total * totalMetros2;
    alert(`El precio por m2 te saldría aproximadamente USD ${totalMetros2} por ende el precio de tu casa será aproximadamente de USD ${casaTotal2}`);
}else if (abertura === "aluminio" && placard === "madera maciza"){  
    let eleccionUsuario3 = new casaCliente (aberturas[0].precio, placards[2].precio);
    let totalMetros3 = eleccionUsuario3.calcularTotal();
    let casaTotal3 = total * totalMetros3;
    alert(`El precio por m2 te saldría aproximadamente USD ${totalMetros3} por ende el precio de tu casa será aproximadamente de USD ${casaTotal3}`);
}else if (abertura === "pvc" && placard === "sin placard"){ 
      let eleccionUsuario4 = new casaCliente (aberturas[1].precio, placards[0].precio);
      let totalMetros4 = eleccionUsuario4.calcularTotal();
      let casaTotal4 = total * totalMetros4;
      alert(`El precio por m2 te saldría aproximadamente USD ${totalMetros4} por ende el precio de tu casa será aproximadamente de USD ${casaTotal4}`);
}else if (abertura === "pvc" && placard === "melamina"){ 
    let eleccionUsuario5 = new casaCliente (aberturas[1].precio, placards[1].precio);
    let totalMetros5 = eleccionUsuario5.calcularTotal();
    let casaTotal5 = total * totalMetros5;
    alert(`El precio por m2 te saldría aproximadamente USD ${totalMetros5} por ende el precio de tu casa será aproximadamente de USD ${casaTotal5}`);
}else if (abertura === "pvc" && placard === "madera maciza"){ 
    let eleccionUsuario6 = new casaCliente (aberturas[1].precio, placards[2].precio);
    let totalMetros6 = eleccionUsuario6.calcularTotal();
    let casaTotal6 = total * totalMetros6;
    alert(`El precio por m2 te saldría aproximadamente USD ${totalMetros6} por ende el precio de tu casa será aproximadamente de USD ${casaTotal6}`);
}
