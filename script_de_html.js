// declaro la funcion aleatorio //
function aleatorio(min,max)
{ return Math.floor(Math.random()*(max-min+1)+min) }

// declaro otra funcion llamada "eleccion" //
function eleccion(jugada)
{
   let resultado =""

   if (jugada == 1)
   {
       resultado = "Piedra 🥌"
   } 
   else if (jugada == 2)
   {
       resultado = "Papel 🧻"
   } 
   else if (jugada == 3){
       resultado = "Tijera ✂"
   } 
   else 
   {
       resultado = "cualquier wea"
   }
   return resultado
}
// Variables //
let victorias = 0
let derrotas = 0

let jugador = 0
let pc = aleatorio(1,3)

// Bucle //
while (victorias < 3 && derrotas < 3)
{ 
   jugador = prompt("Elige:\n 1.Piedra 🥌\n 2.Papel 🧻\n 3.Tijera ✂")
   
   alert("Haz elegido: " + eleccion(jugador))
   alert("PC elige: " + eleccion(pc))

// Algoritmo del Combate (esta dentro del bucle) //
   if (pc == jugador)
   {
       alert("EMPATE")
   }
   else if ( (jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2) )
   {
       alert("GANASTE!")
       victorias = victorias + 1
   }
   else if ( (jugador == 3 && pc == 1) || (jugador == 1 && pc == 2) || (jugador == 2 && pc == 3) )
   {
       alert("PERDISTE")
       derrotas = derrotas + 1
   }
   else {
       alert("Perdiste, pero por pndejo")
       derrotas = derrotas + 1
   }
}

// Mensaje final al terminar el juego //
if (victorias == 3){
    alert("Resultado final:\n victorias -> "+ victorias + "\n derrotas -> "+ derrotas +"\n Ganaste Papu😎👌") }
  
else{
    alert("Resultado final:\n victorias -> "+ victorias + "\n derrotas -> "+ derrotas +"\n Vales queso🧀🐀") }