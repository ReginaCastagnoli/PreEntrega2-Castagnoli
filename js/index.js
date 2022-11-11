//creo la clase para crear objetos con la plantilla
class Producto {
    constructor (tipo, descripcion, precio, estaDisponible) {
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.precio = precio;
        this.estaDisponible = estaDisponible;
    }
}

//agrego los objetos con arreglosgitt ad

const velaAlmendra = new Producto ( "vela", " frasco almendra de 290 cc.", 550, " esta disponible" );
const velaHogarenia = new Producto ( "vela", " frasco anchoero de 100 cc", 330, " esta disponible" );
const velaClasica = new Producto ( "vela", "frasco yogurtero de 200 cc.", 460, " esta disponible" );
const velaEco = new Producto ( "vela", " en maceta nº4 de yeso.", 280, " esta disponible" );
const atrapasuenioClasico = new Producto ( "atrapasueño", " Incluye plumas y nombre en alambre forrado o fibrofacil.", 550, " esta disponible" );
const atrapasuenioArbol = new Producto ( "atrapasueño", "Arbol de la Vida dentro de atrapasueño.", 680, " esta disponible" );
const atrapasuenioFrase = new Producto ( "atrapasueño", "Realizado en fibrofacil calado de 25 cm." ,400,  "esta disponible" );
const atrapasuenioLuna = new Producto ( "atrapasueño", "Atrapasueño en forma de luna. ", 520, " esta disponible" );
const arcoirisGuirnalda = new Producto ( "arcoiris", "Ideal para decorar cuarto infantil.", 750, " esta disponible" );
const arcoirisColgante = new Producto ( "arcoiris", "Arociris de 30 cm.", 450, " esta disponible" );
const arcoirisLlavero = new Producto ( "llavero", "Llavero en forma de Arcoiris nordico", 280, " esta disponible" );
const cactusLlavero = new Producto ( "llavero", "Llavero en forma de cactus nordico.", 280, " esta disponible" );



//entrada con prompt

const productoElegido = prompt(`Ingrese el numero del producto elegido
 1. Vela Almendra
 2. Vela Hogareña
 3. Vela Clasica
 4. Vela Eco
 5. Atrapasueño Clasico
 6. Atrapasueño Arbol de la vida
 7. Atrapasueño con Frase
 8. Atrapasueño Luna
 9. Arcoiris Guirnalda
 10. Arcoiris Colgante
 11. Arcoiris Llavero
 12. Cactus Llavero
 13. Ninguno
`);

//salida con alert 
alert("Usted eligio el producto nº" + productoElegido);