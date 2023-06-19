new Vue({
  el: '#app',
  data: {
    productos: []
  },
  mounted() {
    this.obtenerProductos();
  },

  methods: {
    obtenerProductos() {
      axios.get('https://misutilidades-a9f69-default-rtdb.firebaseio.com/productos.json')
        .then(response => {
          this.productos = Object.values(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    },
    eliminarProducto(nombre) {
      const index = this.productos.findIndex(producto => producto.nombre === nombre);
      if (index !== -1) {
        this.productos.splice(index, 1); // Eliminar el producto de la lista local

        axios.put('https://misutilidades-a9f69-default-rtdb.firebaseio.com/productos.json', this.productos)
          .then(response => {
            console.log('Producto eliminado de la base de datos');
          })
          .catch(error => {
            console.error(error);
          });
      }
    },


    //         crearProducto() {
    //      const nombre = document.getElementById('nombre').value;
    //    const version = document.getElementById('version').value;
    //  const descripcion = document.getElementById('descripcion').value;
    //const icono = document.getElementById('icono').value;
    //const url = document.getElementById('url').value;

    //if (nombre && version && descripcion && icono && url) {
    //const nuevoProducto = {
    //nombre: nombre,
    //version: version,
    //descripcion: descripcion,
    //icono: icono,
    //url: url
    //};

    //this.productos.push(nuevoProducto); // Agregar el nuevo producto a la lista local

    //axios.put('https://misutilidades-a9f69-default-rtdb.firebaseio.com/productos.json', this.productos)
    //.then(response => {
    // console.log('Nuevo producto creado y guardado en la base de datos');
    //})
    //.catch(error => {
    // console.error(error);
    //});
    //} else {
    //console.log('Por favor, complete todos los campos');
    //}
    //}
  }
});
