new Vue({
    el: '#app',
    data: {
      productos: []
    },
    mounted() {
      axios.get('https://misutilidades-a9f69-default-rtdb.firebaseio.com/productos.json')
        .then(response => {
          this.productos = Object.values(response.data.productos);
        })
        .catch(error => {
          console.error(error);
        });
    }
  });