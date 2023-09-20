const boton = document.querySelector("#boton");
const texto = document.getElementById("texto-hex")

  function generarColorAleatorio() {
    let chartset = "ABCDEF0123456789";
    let color = "#";

      for (let i = 0; i < 6; i++) {
        let indiceRandom = Math.floor(Math.random() * 16)
        color += chartset[indiceRandom];
      }
      return color;
  }

  function trigger() {
    let colorRandom = generarColorAleatorio()
    texto.textContent = colorRandom
    document.body.style.backgroundColor = colorRandom
  }

  
    boton.addEventListener("click", trigger)

// 	setInterval(cambiarFondo, 1500);   era para cambiar fondo cada cierto tiempo