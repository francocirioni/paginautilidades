new Vue({
  el: '#app',
  data: {
    productos: [],
    nombre: '',
    descripcion: '',
    icono: '',
    url: '',
    version: ''
  },
  mounted() {
    this.obtenerProductos();
  },
  methods: {
    obtenerProductos() {
      axios.get('https://francocir.pythonanywhere.com/productos')
        .then(response => {
          this.productos = Object.values(response.data);
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
    },
    editarProducto(id) {
      const url = 'https://francocir.pythonanywhere.com/productos/' + id;
      const datos = {
        nombre: this.nombre,
        descripcion: this.descripcion,
        icono: this.icono,
        url: this.url,
        version: this.version
      };
    
      axios.put(url, datos)
        .then(response => {
          console.log('Producto editado exitosamente');
          // Realizar las acciones necesarias después de la edición del producto
        })
        .catch(error => {
          console.error('Error al editar el producto', error);
        });
    },
    grabar() {
      // Obtener el ID de la URL
      const urlParams = new URLSearchParams(window.location.search);
      const id = urlParams.get('id');
      
      // Llamar al método para editar el producto con el ID obtenido
      this.editarProducto(id);
    }
  }
});



