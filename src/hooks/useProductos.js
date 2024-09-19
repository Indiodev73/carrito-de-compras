import { useContext } from 'react'
import { CarritoContext } from '../context/CarritoContext'

export function useProductos ({ id, nombre, precio, imagen, detalle }) {
  const { datos, setDatos } = useContext(CarritoContext)

  // function agregarAlCarrito () {
  //   setDatos((currItem) => {
  //     const newItem = currItem.find((item) => item.id === id)

  //     if (newItem) {
  //       return currItem.map((item) => {
  //         if (item.id === id) {
  //           return { ...item, quantity: item.quantity + 1 }
  //         } else {
  //           return item
  //         }
  //       })
  //     } else {
  //       return [...currItem, { id, quantity: 1, precio, nombre, imagen, detalle }]
  //     }
  //   })
  // }

  function agregarAlCarrito () {
    setDatos((currItems) => {
      const itemIndex = currItems.findIndex((item) => item.id === id)

      // Lógica Condicional: La verificación condicional para saber si el elemento existe es más clara con itemIndex !== -1, haciendo que sea más fácil de entender.
      if (itemIndex !== -1) {
      // Lógica de Mapeo: La lógica de mapeo se simplifica utilizando el índice directamente, lo que reduce la necesidad de una verificación adicional dentro de la función de mapa.
        return currItems.map((item, index) =>
          index === itemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
      // Creación de Nuevos Artículos: La creación del nuevo elemento se encapsula en una sola variable, mejorando la claridad.
        const newItem = { id, quantity: 1, precio, nombre, imagen, detalle }
        return [...currItems, newItem]
      }
    })
  }

  // function quitarDelCarrito ({ id }) {
  //   setDatos((currItem) => {
  //     if (currItem.find((item) => item.id === id)?.quantity === 1) {
  //       return currItem.filter((item) => item.id !== id)
  //     } else {
  //       return currItem.map((item) => {
  //         if (item.id === id) {
  //           return { ...item, quantity: item.quantity - 1 }
  //         } else {
  //           return item
  //         }
  //       })
  //     }
  //   })
  // }

  function quitarDelCarrito ({ id }) {
    setDatos((currItems) => {
      const item = currItems.find((item) => item.id === id)
      // Devolución Anticipada para Artículos No Existentes: Se agrega una devolución anticipada si el artículo no se encuentra en el carrito, lo que evita el procesamiento innecesario.
      if (!item) return currItems

      if (item.quantity === 1) {
        // Remove item if quantity is 1
        return currItems.filter((item) => item.id !== id)
      } else {
        // Mapeo Condicional: La lógica de mapeo se simplifica al verificar directamente el id en la función map, reduciendo la necesidad de condicionales anidados.
        return currItems.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      }
    })
  }

  // function obtenerCantidadPorId (id) {
  //   return datos.find((item) => item.id === id)?.quantity || 0
  // }

  function obtenerCantidadPorId (id) {
    // Variable Descriptiva: La variable item se utiliza para almacenar el artículo encontrado, dejando en claro lo que se está verificando.
    const item = datos.find((item) => item.id === id)
    // Lógica de Devolución Simplificada: La declaración de devolución se simplifica para usar una verificación condicional directa, mejorando la legibilidad.
    // Retorno Temprano: La función ahora vuelve claramente 0 si no se encuentra el elemento, hacer que la lógica sea más fácil de seguir.
    return item ? item.quantity : 0
  }

  const cantidadPorId = obtenerCantidadPorId(id)

  const handleAgregar = (e) => {
    e.preventDefault()
    agregarAlCarrito()
  }
  const handleQuitar = (e) => {
    e.preventDefault()
    quitarDelCarrito({ id })
  }

  return { cantidadPorId, handleAgregar, handleQuitar }
}
