fetch('https://my-json-server.typicode.com/francocirioni/jsonutilidad/db')
  .then(response => response.json())
  .then(data => {
    const programas = data.programas;
    const contenedor = document.querySelector('.contenedor');

    programas.forEach(programa => {
      const cardDiv = document.createElement('div');
      cardDiv.classList.add('card');

      const frontDiv = document.createElement('div');
      frontDiv.classList.add('front');
      const backDiv = document.createElement('div');
      backDiv.classList.add('back');

      const agregarDatos = (elemento, id) => {
        const span = document.createElement('span');
        span.classList.add('datos');

        if (id === 'icono') {
          const img = document.createElement('img');
          img.src = programa[id];
          img.classList.add('icono');
          span.appendChild(img);
        } else {
          span.textContent = programa[id];
        }

        elemento.appendChild(span);
      };

      ['nombre', 'version', 'fondo', 'icono'].forEach(id =>
        agregarDatos(frontDiv, id)
      );

      ['descripcion', 'url', 'otro'].forEach(id => agregarDatos(backDiv, id));

      cardDiv.appendChild(frontDiv);
      cardDiv.appendChild(backDiv);

      contenedor.appendChild(cardDiv);
    });
  })
  .catch(error => {
    console.error('Error al obtener los datos del JSON:', error);
  });
