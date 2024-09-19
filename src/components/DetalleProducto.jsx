import datos from '../api/data.json'
import { useParams } from 'react-router-dom'

export function DetalleProducto () {
  const { productId } = useParams()
  const cambiarId = Number(productId)

  const obtenerProductoPorId = datos.find((item) => item.id === cambiarId)

  return (
    <div>
      <h1>Detalles del Producto</h1>
      <h2>{obtenerProductoPorId.nombre}</h2>
      <img src={obtenerProductoPorId.imagen} alt={obtenerProductoPorId.nombre} />
      <h2>ARS: $<strong>{obtenerProductoPorId.precio}</strong></h2>
      <p>{obtenerProductoPorId.detalle}</p>
    </div>
  )
}
