function eliminarProducto(id) {
    const url = 'https://francocir.pythonanywhere.com/productos/' + id;
    var options = {
      method: 'DELETE',
    };
  
    fetch(url, options)
      .then(res => res.text()) 
      .then(res => {
        console.log('Producto eliminado');
        location.reload();
      })
      .catch(error => {
        console.error('Error', error);
      });
  }
  