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
      axios.get('https://francocir.pythonanywhere.com/productos')
        .then(response => {
          this.productos = Object.values(response.data);
          this.ocultarTarjetasNoAudio();
        })
        .catch(error => {
          console.error(error);
        });
    },    
    
    eliminarProducto(id) {
      const url = 'https://francocir.pythonanywhere.com/productos/' + id;
      var options = {
        method: 'DELETE',
      };
    
      fetch(url, options)
        .then(res => res.text()) 
        .then(res => {
          console.log('Producto eliminado de la base de datos');
          location.reload();
        })
        .catch(error => {
          console.error('Error al eliminar el producto de la base de datos', error);
        });
    }


    



}

});

