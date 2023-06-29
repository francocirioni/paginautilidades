function redireccionar() {
    window.location.href = 'index.html';
  }


  const inputContraseña = document.getElementById("inputContraseña");
  const botones = document.getElementsByClassName("contenedorbotones");
  
  document.getElementById("btnIngresar").addEventListener("click", function() {
    const contraseña = inputContraseña.value;
  
    if (contraseña === "admin") {

        window.location.href = "index2.html";
      
    }else { window.alert("contraseña incorrecta");}
   
  });
