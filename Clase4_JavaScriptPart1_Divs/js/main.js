//Declaracion de variables constantes
let valor;
let autos = ["ford", "toyota"];

console.log(valor);
alert("Mi primer ejemplo");
console.log("Mi primer mensaje");
console.log(2 + 2);
console.log("¡Hol a todos! Observen este numero:", 5 + 18);
console.error("La curp debe tener un valor correto");
document.writeln("<h1>Mi titulo</h1>");

let total = 50;
let contador = 1;

while (contador <= total) {
  document.writeln(`<div>
          <p>
            ${contador}.-Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
             id dolor elit. Sed ac feugiat sem. Sed a odio luctus, scelerisque leo sed, 
             auctor risus. Sed tempor sem eros, in commodo elit pellentesque non. 
          </p>`);
  //contador = contador + 1;
  contador++;
}
