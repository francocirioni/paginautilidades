function eliminarProducto(id) {
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
  