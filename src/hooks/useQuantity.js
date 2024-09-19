import { useContext } from 'react'
import { CarritoContext } from '../context/CarritoContext'
// import datos from '../api/data.json'

export function useQuantity () {
  const { datos } = useContext(CarritoContext)

  const quantity = datos.reduce((acc, curr) => acc + curr.quantity, 0)

  const totalPagar = datos.reduce((acc, curr) => acc + curr.quantity * curr.precio, 0)

  return { quantity, totalPagar }
}
