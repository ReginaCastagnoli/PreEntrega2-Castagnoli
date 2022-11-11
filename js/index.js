
//agrego los objetos con arreglos
const Producto = [
    {nombre: "vela Almendra", tipo: "vela", descripcion: "frasco almendra de 290 cc.", precio: 550},
    {nombre: "vela Hogareña", tipo: "vela", descripcion: "frasco anchoero de 100 cc.", precio: 330},
    {nombre: "vela Clasica", tipo: "vela", descripcion: "frasco yogurtero de 200 cc.", precio: 460},
    {nombre: "vela Eco", tipo: "vela", descripcion: "maceta de yeso nº4", precio: 280},
    {nombre: "atrapasueño clasico", tipo: "atrapasueño", descripcion: "Incluye plumas y nombre en alambre forrado o fibrofacil.", precio: 550},
    {nombre: "arbol de la vida ", tipo: "atrapasueño", descripcion: "Arbol de la Vida dentro de atrapasueño.", precio: 680},
    {nombre: "vela Almendra", tipo: "atrapasueño", descripcion: "frasco almendra de 290 cc.", precio: 550},
    {nombre: "atrapasueño con frase", tipo: "atrapasueño", descripcion: "Realizado en fibrofacil calado de 25 cm.", precio: 400},
    {nombre: "atrapasueño luna", tipo: "atrapasueño", descripcion: "Atrapasueño en forma de luna.", precio: 520},
    {nombre: "arcoiris guirnalda", tipo: "arcoiris", descripcion: "Ideal para decorar cuarto infantil.", precio: 750},
    {nombre: "arcoiris colgante", tipo: "arcoiris", descripcion: "Arociris de 30 cm.", precio: 450},
    {nombre: "llavero arcoiris", tipo: "llavero", descripcion: "Llavero en forma de Arcoiris nordico", precio: 280},
    {nombre: "llavero cactus", tipo: "llavero", descripcion: "Llavero en forma de cactus nordico.", precio: 280}

]

// crear carrito
let carrito = []

//entrada con prompt
let eleccion = prompt (`hola bienvenido a Epikie,
desea comprar algo?
porfavor ingrese si o no`);

if ( eleccion === "si")
{
    alert("Excelente, mire por favor las siguientes opciones:");
    const nuevaEleccion = Producto.map (
        (Producto) => Producto.nombre + " " + "$" + Producto.precio );
        alert ( nuevaEleccion.join ("/") );
   
} else if ( eleccion === "no" ){
    alert ("Esperamos que vuelva pronto");

} else { 
    alert  ("ingrese una opcion valida");
}
    

