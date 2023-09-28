// Variables globales
const carrito = [];

const productos = [{

  nombre: "Pro plan",
 
  precio: 4000,
 
  cantidad: 1,
 
 },
 
 {
 
  nombre: "Eukanuba",
 
  precio: 3000,
 
  cantidad: 1,
 
 },
 {
 
    nombre: "Catpro",
   
    precio: 3000,
   
    cantidad: 1,
   
   },
   {
 
    nombre: "chupete",
   
    precio: 2000,
   
    cantidad: 1,
   
   },
   {
 
    nombre: "Barilla",
   
    precio: 2000,
   
    cantidad: 1,
   
   },
   {
 
    nombre: "Snack",
   
    precio: 1000,
   
    cantidad: 1,
   
   },
   {
 
    nombre: "Rascador",
   
    precio: 4000,
   
    cantidad: 1,
   
   },
   {
 
    nombre: "Mordillo",
   
    precio: 2000,
   
    cantidad: 1,
   
   },
   {
 
    nombre: "Arenero",
   
    precio: 6000,
   
    cantidad: 1,
   
   },
 
 {
 
  nombre: "Pro plan michis",
 
  precio: 5000,
 
  cantidad: 1,
 
 }];
 
 
 
 carrito.push(productos);

// Función de buscar un producto en nuestro carrito 
function enCarrito(nombrePrompt) {
  return carrito.find((producto) => producto.nombre == nombrePrompt);
}

// Función para buscar productos
function buscar() {
  const keyword = prompt("¿Que producto deseas buscar?");

  const arrayResultados = carrito.filter((el) =>
    // toLowerCase convierte un string en minúsculas
    el.nombre.toLowerCase().includes(keyword.toLowerCase())
  );
  console.log(arrayResultados);
}

// Función para agregar un producto al carrito
function agregar() {

let nombrePrompt;
  do {
    nombrePrompt = prompt("ingrese el nombre del producto"); 
    precioPrompt= prompt("ingrese el precio del producto");
    
  } while (!nombrePrompt); 

  console.log("nombre ingresado:", nombrePrompt);


 const nuevoProducto = {
    nombre: nombrePrompt,
    precio: parseInt(precioPrompt),
    subtotal: parseInt(precioPrompt),
    cantidad: 1,
  };
 

  const productoEncontrado = enCarrito(nombrePrompt);


  
  

  if (productoEncontrado) {
    productoEncontrado.cantidad++;
    productoEncontrado.precio = productoEncontrado.precio * productoEncontrado.cantidad;
  } else {

    carrito.push(nuevoProducto);
  }
 


  

   

  alert("El producto " + nombrePrompt + " fue agregado al carrito.");
  listar();
 
}

// Función para listar los productos del carrito
function listar() {
  console.clear();
  console.log("Productos que hay en el carrito:");


  carrito.forEach((producto) => {
    console.log("----------");
    console.log("Nombre:", producto.nombre);
    console.log("Precio:", producto.precio);
    console.log("Cantidad:", producto.cantidad);
  });

 
  const totalCarrito = carrito.reduce((acu, el) => acu + el.precio, 0);
  console.log("Total: $", totalCarrito);


  const preciosActualizados = carrito.map((producto) => {
    return {
      nombre: producto.nombre,
      precio: producto.precio * 1.25,
      cantidad: producto.cantidad,
    };
  });
  console.log("Precios actualizados:", preciosActualizados);

 
  const nuevoArrayReordenado = carrito.sort((el1, el2) => {
    if (el1.precio < el2.precio) {
      return 1;
    }
    if (el1.precio > el2.precio) {
      return -1;
    }
    return 0;
  });
  console.log("Nuevo array reordenado:", nuevoArrayReordenado);
}

// Función para quitar un producto del carrito
function quitar() {
  const nombrePrompt = prompt("¿Qué producto queres quitar?");

  const productoEncontrado = enCarrito(nombrePrompt);

  if (productoEncontrado) {
    const indiceProducto = carrito.indexOf(productoEncontrado);
   
    carrito.splice(indiceProducto, 1);
  
    alert("El producto " + productoEncontrado.nombre + " fue borrado del carrito.");
    listar();
  } else {
    alert("No se encontro el producto " + nombrePrompt + " en el carrito.");
  }
}