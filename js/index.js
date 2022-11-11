
//agrego los objetos con arreglos
const Producto = [
    { nombre: "vela Almendra", tipo: "vela", descripcion: "frasco almendra de 290 cc.", precio: 550 },
    { nombre: "vela Hogareña", tipo: "vela", descripcion: "frasco anchoero de 100 cc.", precio: 330 },
    { nombre: "vela Clasica", tipo: "vela", descripcion: "frasco yogurtero de 200 cc.", precio: 460 },
    { nombre: "vela Eco", tipo: "vela", descripcion: "maceta de yeso nº4", precio: 280 },
    { nombre: "atrapasueño clasico", tipo: "atrapasueño", descripcion: "Incluye plumas y nombre en alambre forrado o fibrofacil.", precio: 550 },
    { nombre: "arbol de la vida ", tipo: "atrapasueño", descripcion: "Arbol de la Vida dentro de atrapasueño.", precio: 680 },
    { nombre: "atrapasueño con frase", tipo: "atrapasueño", descripcion: "Realizado en fibrofacil calado de 25 cm.", precio: 400 },
    { nombre: "atrapasueño luna", tipo: "atrapasueño", descripcion: "Atrapasueño en forma de luna.", precio: 520 },
    { nombre: "arcoiris guirnalda", tipo: "arcoiris", descripcion: "Ideal para decorar cuarto infantil.", precio: 750 },
    { nombre: "arcoiris colgante", tipo: "arcoiris", descripcion: "Arociris de 30 cm.", precio: 450 },
    { nombre: "llavero arcoiris", tipo: "llavero", descripcion: "Llavero en forma de Arcoiris nordico", precio: 280 },
    { nombre: "llavero cactus", tipo: "llavero", descripcion: "Llavero en forma de cactus nordico.", precio: 280 }

]

// crear carrito
let carrito = []
let precio = 0;
//entrada con prompt, elegir si quiere comprar o no
let eleccion = prompt(`hola bienvenido a Epikie,
desea comprar algo?
porfavor ingrese si o no`);

if (eleccion === "si") {
    const nuevaEleccion = Producto.map(
        (Producto) => Producto.nombre + " " + "$" + Producto.precio);
    alert(nuevaEleccion.join("/"));




} else if (eleccion === "no") {
    alert("Esperamos que vuelva pronto");

} else {
    alert("ingrese una opcion valida");
}

// funcion para elegir que producto
while (eleccion === "si") {
    const Producto = prompt("ingrese el nombre del articulo que desea comprar:");

    if (Producto === "vela Almendra" || Producto === "vela Hogareña"
        || Producto === "vela Clasica" || Producto === "vela Eco"
        || Producto === "atrapasueño clasico" || Producto === "arbol de la vida"
        || Producto === "atrapasueño con frase" || Producto === "atrapasueño luna" || Producto === "arcoiris guirnalda"
        || Producto === "arcoiris colgante" || Producto === "llavero arcoiris" || Producto === "llavero cactus") {

        switch (Producto) {
            case "vela almendra":
                precio: 550;
                break;

            case "vela hogareña":
                precio: 330;
                break;

            case "vela clasica":
                precio: 460;
                break;

            case "vela eco":
                precio: 280;
                break;

            case "atrapasueño clasico":
                precio: 550;
                break;

            case "arbol de la vida":
                precio: 680;
                break;

            case "atrapasueño con frase":
                precio: 400;
                break;

            case "atrapasueño luna":
                precio: 520;
                break;

            case "arcoiris guirnalda":
                precio: 750;
                break;

            case "arcoiris colgante":
                precio: 450;
                break;

            case "llavero arcoiris":
                precio: 280;
                break;

            case "llavero cactus":
                precio: 280;
                break;

            default:
                break;
        }
        // queda haciendo un bucle
    let cantidad = parseInt(prompt("Cuantas unidades quiere comprar?"));
    
    carrito.push ({Producto, precio, cantidad});
    alert(carrito);
    } else {
        alert ( "no tenemos ese producto")
    }
  eleccion = prompt ( "Desea agregar otro producto mas?");
}
