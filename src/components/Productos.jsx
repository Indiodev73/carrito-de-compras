import { useProductos } from '../hooks/useProductos'
import { useNavigate } from 'react-router-dom'

export function Productos ({ id, nombre, precio, imagen, detalle }) {
  const { cantidadPorId, handleAgregar, handleQuitar } = useProductos({
    id,
    nombre,
    precio,
    imagen,
    detalle
  })
  const navigate = useNavigate()

  const handleDobleClick = (e) => {
    e.preventDefault()
    navigate(`/detalle/${id}`)
  }

  return (
    <>
      <li className='producto'>
        {cantidadPorId > 0 && (
          <div className='item-quantity'>{cantidadPorId}</div>
        )}
        <p>{nombre}</p>
        <img src={imagen} alt={nombre} onDoubleClick={handleDobleClick} />
        <p className='item-precio'>ARS $ - {precio}</p>

        {cantidadPorId === 0
          ? (
            <button className='button-agregar' onClick={handleAgregar}>
              Agregar
            </button>
            )
          : (
            <button className='button-mas' onClick={handleAgregar}>
              Agregar más
            </button>
            )}

        {cantidadPorId > 0 && (
          <button className='button-quitar' onClick={handleQuitar}>
            Quitar item
          </button>
        )}
      </li>

    </>
  )
}
