const app = new Vue({
  el: '#app',
  data: {
    nombre: '',
    descripcion: '',
    icono: '',
    url: '',
    version: ''
  },
  methods: {
    grabar() {
      let producto = {
        nombre: this.nombre,
        descripcion: this.descripcion,
        icono: this.icono,
        url: this.url,
        version: this.version
      };

      axios.post('https://francocir.pythonanywhere.com/productos', producto)
        .then(function () {
          alert("Registro grabado");
          window.location.href = "../index.html";
        })
        .catch(err => {
          console.error(err);
          alert("Error al Grabar");
        });
    }
  }
});
