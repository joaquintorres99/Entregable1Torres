let listapedidos = [];
const precioPersonas = 1900;
const precioCapas = 1100;

const tipoBizcochuelo = [
    { tipo: 'chocolate', precio: 100 },
    { tipo: 'vainilla', precio: 60 },
    { tipo: 'limon', precio: 70 }
];

const tipoRevestimiento = [
    { tipo: 'chocolate', precio: 200 },
    { tipo: 'crema', precio: 150 },
    { tipo: 'merengue', precio: 175 }
];

function calcularPrecio(personas, capas, bizcochuelo, revestimiento) {
    const precioTamaño = personas * precioPersonas;
    const precioCapa = capas * precioCapas;
    const precioBizcochuelo = tipoBizcochuelo.find(item => item.tipo === bizcochuelo)?.precio || 0;
    const precioRevestimiento = tipoRevestimiento.find(item => item.tipo === revestimiento)?.precio || 0;
    let precioTotal = precioTamaño + precioCapa + precioBizcochuelo + precioRevestimiento;
    return precioTotal;
}

function iniciarPedido() {
    let nombre = prompt("Hola, ingresa tu nombre para iniciar el pedido");
    const personas = parseInt(prompt(`${nombre}, ingresá la cantidad de personas para tu torta`));
    const capas = parseInt(prompt("Ahora ingresa la cantidad de capas"));
    const bizcochuelo = prompt("Ingresa el tipo de bizcochuelo. (chocolate/vainilla/limon)");
    const revestimiento = prompt("Por último, elegí el revestimiento. (chocolate/crema/merengue)");

    let precioTotal = calcularPrecio(personas, capas, bizcochuelo, revestimiento);

    if (confirm("¿Terminar pedido?")) {
        listapedidos.push({ nombre, personas, capas, bizcochuelo, revestimiento, precioTotal });
        alert(`El precio de tu torta es $${precioTotal}`);
    } else {
        alert("Volvé a iniciar");
    }
}

function mostrarPedidos() {
    console.log("Pedidos realizados:");
    listapedidos.forEach(pedido => {
        console.log(`Nombre: ${pedido.nombre}, Personas: ${pedido.personas}, Capas: ${pedido.capas}, Bizcochuelo: ${pedido.bizcochuelo}, Revestimiento: ${pedido.revestimiento}, Precio: $${pedido.precioTotal}`);
    });
}

let continuar = true;
while (continuar) {
    iniciarPedido();

    if (!confirm("¿Desea calcular otro precio?")) {
        continuar = false;
    }
}

mostrarPedidos();