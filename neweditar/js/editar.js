new Vue({
    el: '#app',
    data: {
      nombre: '',
      descripcion: '',
      icono: '',
      url: '',
      version: ''
    },
    mounted: function () {
      this.obtenerProducto();  //tener los datos al cargar la pagina
    },

    
    methods: {
      obtenerProducto: function () {
        var url = window.location.href;
        var indiceIgual = url.indexOf("=");
        var resultado2 = url.slice(indiceIgual + 1);
        var id = resultado2;
        var urlApi = 'https://francocir.pythonanywhere.com/productos/' + id;

        axios.get(urlApi)
          .then(response => {
            var producto = response.data;

          
            this.nombre = producto.nombre;
            this.descripcion = producto.descripcion;
            this.icono = producto.icono;
            this.url = producto.url;
            this.version = producto.version;
          })
          .catch(error => {
            console.error(error);
          });
      },



      updateProducto: function () {
        var url = window.location.href;
        var indiceIgual = url.indexOf("=");
        var resultado2 = url.slice(indiceIgual + 1);
        var divResultado2 = document.getElementById("resultado2");
        divResultado2.textContent = resultado2;
        var id = resultado2;
        var url = 'https://francocir.pythonanywhere.com/productos/' + id;
        var data = {
          nombre: this.nombre,
          descripcion: this.descripcion,
          icono: this.icono,
          url: this.url,
          version: this.version
        };

        axios.put(url, data)
          .then(function (response) {
            console.log(response.data);

            window.location.href = '../index2.html';

          })
          .catch(function (error) {
            console.error(error);
          });
      }
    }
  });