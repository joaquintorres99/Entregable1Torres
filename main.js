const precioPersonas = 1900
const precioCapas = 1100

const tipoBizcochuelo = {
    chocolate: 100,
    vainilla: 60,
    limon: 70
}

const tipoRevestimiento = {
    chocolate: 200,
    crema: 150,
    merengue: 175
}

function calcularPrecio(personas, capas, bizcochuelo, revestimiento) {
    const precioTamaño = personas * precioPersonas;
    const precioCapa = capas * precioCapas;
    const precioBizcochuelo = tipoBizcochuelo[bizcochuelo];
    const precioRevestimiento = tipoRevestimiento[revestimiento];
    let precioTotal = precioTamaño + precioCapa + precioBizcochuelo + precioRevestimiento;
    return(precioTotal);
}

let nombre = prompt("Hola, ingresa tu nombre para iniciar el pedido");
const personas = parseInt(prompt(`${nombre}, ingresá la cantidad de personas para tu torta`))
const capas = parseInt(prompt("Ahora ingresa la cantidad de capas"))
const bizcochuelo = prompt("Ingresa el tipo de bizcochuelo. (chocolate/vainilla/limon)")
const revestimiento = prompt("Por último, elegí el revestimiento. (chocolate/crema/merengue)")

let precioTotal = calcularPrecio(personas, capas, bizcochuelo, revestimiento)

if (confirm("¿Terminar pedido?")) {
    alert(`El precio de tu torta es $${precioTotal}`)
} else {
    alert("Volvé a iniciar")
}
