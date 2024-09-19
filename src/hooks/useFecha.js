// export function useFecha () {
//   const fecha = new Date().getFullYear()
//   const dia = new Date().getDate()
//   const mes = new Date().getMonth()
//   const hora = new Date().getHours()
//   const minutos = new Date().getMinutes()
//   const fechaActual = `${dia}/${mes}/${fecha} - ${hora}:${minutos} hs`

//   return { fechaActual }
// }

// refactorizado
export function useFecha () {
  // Instancia de Fecha Única: En lugar de crear múltiples Date instancias, una sola instancia (now) se crea y se reutiliza, lo cual es más eficiente.
  const now = new Date()
  const fecha = now.getFullYear()
  const dia = now.getDate()
  // Ajuste de Mes: El mes se ajusta agregando 1 desdegetMonth()devuelve un índice basado en cero (0 para Enero, 1 para Febrero, etc.).
  const mes = now.getMonth() + 1
  const hora = now.getHours()
  // Minutos Formatados: Los minutos están formateados para mostrar siempre dos dígitos usandopadStart(2, '0'), asegurando una pantalla consistente (por ejemplo,09 en lugar de 9).
  const minutos = now.getMinutes().toString().padStart(2, '0')

  const fechaActual = `${dia}/${mes}/${fecha} - ${hora}:${minutos} hs`

  return { fechaActual }
}
