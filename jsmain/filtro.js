    function obtenerProductos(categoria) {
    axios.get('https://francocir.pythonanywhere.com/productos')
      .then(response => {
        const productos = response.data;
  
        if (categoria) {
          const productosFiltrados = productos.filter(producto => {
            for (const campo in producto) {
              if (producto[campo].toString().includes(categoria)) {
                return true;
              }
            }
            return false;
          });
          mostrarProductos(productosFiltrados);
        } else {
          mostrarProductos(productos);
        }
      })
      .catch(error => {
        console.error(error);
      });
  }
  
  function mostrarProductos(productos) {
    const productosContainer = document.getElementById('productos-container');
  
    productosContainer.innerHTML = '';
  
    productos.forEach(producto => {
      const productoElement = document.createElement('div');
      productoElement.classList.add('card');
      productoElement.setAttribute('v-for', 'producto in productos');
      productoElement.setAttribute(':key', 'producto.nombre');
      productoElement.setAttribute('data-aos', '"fade-right"');
     
      

  
      const frontElement = document.createElement('div');
      frontElement.classList.add('front');
      frontElement.innerHTML = `
        <span class="vacio"></span>
        <span class="contendoricono">
          <span class="icono">
            <img class="imagendentrodeicono" src="${producto.icono}" alt="">
          </span>
        </span>
        <span class="nombre">
          <p>${producto.nombre}</p>
        </span>
        <span class="version">
          <p>${producto.version}<span style="display: none;">${producto.id}</span></p>
        </span>
      `;
  
      const backElement = document.createElement('div');
      backElement.classList.add('back');
      backElement.innerHTML = `
        <span class="barraback">
          <img class="icono2" src="${producto.icono}" alt="">
          <span class="contenedorbotones" style="display: none;">
            <button class="botones">
              <a class="botonesa" href="neweditar/edito.html?id=${producto.id}">
                <img class="imagenboton" src="imagenes/lapiz.png">
              </a>
            </button>
            <button class="botones" onclick="eliminarProducto(${producto.id})">
              <img class="imagenboton" src="imagenes/eliminar.png" alt="">
            </button>
          </span>
        </span>
        <span class="descripcion">
          ${producto.descripcion}
        </span>
        <span class="contenedorboton">
          <a class="linkboton" href="${producto.url}"><button class="lin">URL</button></a>
        </span>
      `;
  
      productoElement.appendChild(frontElement);
      productoElement.appendChild(backElement);
  
      productosContainer.appendChild(productoElement);
    });
  }
  

  obtenerProductos(null);
  
  const filtroButtons = document.querySelectorAll('.filtro-btn');
  filtroButtons.forEach(button => {
    button.addEventListener('click', function() {
      const categoria = this.getAttribute('data-categoria');
      obtenerProductos(categoria);
    });
  });

  const todosBtn = document.getElementById('todos-btn');
  todosBtn.addEventListener('click', function() {
    obtenerProductos(null);
  });
  



























  
  
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
  