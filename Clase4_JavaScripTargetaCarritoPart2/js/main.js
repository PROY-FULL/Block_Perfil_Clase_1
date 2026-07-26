const carrito = [
  { nombre: "Laptop Gamer", precio: 1200 },
  { nombre: "Mause Óptico", precio: 25 },
  { nombre: "Teclado Mecánico", precio: 80 },
];
/*
carrito[0];
carrito[1];
carrito[2];*/

let total = 0;

const listaHTML = document.getElementById("list-productos");

for (let i = 0; i < carrito.length; i++) {
  console.log(i);
  let item = document.createElement("li");
  item.textContent = `${carrito[i].nombre} - $${carrito[i].precio}`;
  listaHTML.appendChild(item);

  total = total + carrito[i].precio;
}

document.getElementById("total-precio").textContent =
  `Total a Pagar: $${total}`;

const mensaje = document.getElementById("mensaje-envio");

if (total >= 1000) {
  mensaje.textContent = "¡Felicidades Tienes Envio Gratis de prioridad!";
  mensaje.className = "gratis";
} else {
  mensaje.textContent =
    "Añade mas productos para obtener envio gratis(Minimo 1000)";
  mensaje.className = "alerta";
}
