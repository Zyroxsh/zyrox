function reloj() {
  // Iniciar la función Date
  tiempo = new Date()

  // Obtener los datos
  año = tiempo.getFullYear()
  mes = tiempo.getMonth()
  dia = tiempo.getDate()
  diaSemana = tiempo.getDay()
  hora = tiempo.getHours()
  minuto = tiempo.getMinutes()

  // Crear la cadena
  tiempoFinal = diaSemana.toString() + " " + " " + dia + " de " + mes.toString() + " " + año + "    " + hora + ":" + minuto

  // Establecer la fecha
  document.getElementById("date").innerHTML = tiempoFinal


  // Llamar a la función cada segundo
  setTimeout(() => {
    reloj()
  }, 1000);
}
