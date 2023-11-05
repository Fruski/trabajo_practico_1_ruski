const listaproductos [
    { 
        producto_id:1,
        seguro: basico,
        precio:500
    }

    {
        producto_id:2,
        seguro: intermedio,
        precio:1000
    }

    {
        producto_id:3,
        seguro: premium,
        precio:1500
    }
]



function addToCart(listaProductos){

    boton.addEventListener('click', function(evento){
   // console.log(evento);
   // console.log(evento.target);

   // alert('Producto agregado al carrito')
    
   let id = evento.target.id    /*declaro variable del evento para saber el boton que genero el click*/
   console.log(id);
   id = id.slice(3)   /*se filtra por el metodo slice para obtener el numero id*/
   console.log(id);

   let busqueda = listaProductos.find( (elemento) => { return producto_id == id})  /*declaro funcion flecha*/
   console.log(importe);
   arrayCarrito.push(listaProductos)  /*agergo elementos al arrayCarrito*/
   console.log(arrayseguro);

 })
}