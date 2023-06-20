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
      axios.get('http://francocir.pythonanywhere.com/productos')
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
        this.productos.splice(index, 1);
    }

        axios.put('http://francocir.pythonanywhere.com/productos', this.productos)
          .then(response => {
            console.log('Producto eliminado de la base de datos');
          })
  }}

});
