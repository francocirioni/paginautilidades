  // Obtener el modal
  var modal = document.getElementById("myModal");
  // Obtener el botón que abre el modal
  var btn = document.getElementById("openModal");
  // Obtener el elemento <span> que cierra el modal
  var span = document.getElementsByClassName("close")[0];
  // Cuando se haga clic en el botón, abrir el modal
  btn.onclick = function () {
    modal.style.display = "block"; }
  // Cuando se haga clic en <span> (x), cerrar el modal
  span.onclick = function () {
    modal.style.display = "none";  }
  // Cuando el usuario haga clic fuera del modal, cerrarlo
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }}
  // Obtener el formulario
  var form = document.getElementById("myForm");
  // Escuchar el evento de envío del formulario
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar el envío del formulario   
    // Cerrar el modal después de enviar el formulario
    modal.style.display = "none";
  });


  document.getElementById("openModaleditar").addEventListener("click", function () {
    document.getElementById("modaleditar").style.display = "block";
  });

  document.getElementsByClassName("closeeditar")[0].addEventListener("click", function () {
    document.getElementById("modaleditar").style.display = "none";
  });

  document.getElementById("myFormeditar").addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("modalNameeditar").value;
    var email = document.getElementById("modalEmaileditar").value;
    console.log("Nombreeditar: " + name);
    console.log("Emaileditar: " + email);
    document.getElementById("modaleditar").style.display = "none";
  });