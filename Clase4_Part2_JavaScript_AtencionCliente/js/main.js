//Array inicial con la fila de clientes ordenados por llegada
let filaEspera = [
  "Cliente #102",
  "Cliente #103",
  "Cliente #104",
  "Cliente #105",
  "Cliente #106",
];

const consolaHTML = document.getElementById("consola");
let renglonesHTML = "";

//Usamos While que se ejecutara mientras el array tenga elementos con la condicion de que longitud > 0

while (filaEspera.length > 0) {
  // .shift() es un metodo de java script que saca elementos del array
  console.log(filaEspera.length);
  let clienteAtendido = filaEspera.shift();

  console.log(filaEspera.length);

  //vamos guardar el texto que mostraremos en la pagina
  renglonesHTML += `>> Atendiendo con éxito a:<strong>${clienteAtendido}</strong>.<br>`;
  renglonesHTML += `--- Quedan ${filaEspera.length} personas en espera.<br><br>`;
}

//Añadir un mensaje final
renglonesHTML += `<span style='color:#2ecc71;'>📋 ¡Fila vacía! Todos los clientes han sido atendidos.</span>`;

console.log(renglonesHTML);
consolaHTML.innerHTML = renglonesHTML;
