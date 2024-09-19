import foto from '../assets/image/3.png'
import { useFecha } from '../hooks/useFecha'
import { useQuantity } from '../hooks/useQuantity'
import { CarritoContext } from '../context/CarritoContext'
import { useReactToPrint } from 'react-to-print'
import { useContext, useRef } from 'react'

export function CarritoCompras () {
  const { totalPagar } = useQuantity()
  const { datos } = useContext(CarritoContext)
  const componenteRef = useRef()
  const { fechaActual } = useFecha()

  const handlePrint = useReactToPrint({
    content: () => componenteRef.current,
    documentTitle: 'Ticket_tienda_virtual.pdf',
    onAfterPrint: () => window.alert('Impresion exitosa')
  })

  return (
    <>
      <div ref={componenteRef} className='carro'>
        <img src={foto} alt='no hay foto' style={{ width: '200px' }} />
        <h1 className='titulo'>Tienda Virtual</h1>
        <p className='subtitulos'>4000 - San Miguel de Tucumán</p>
        <p className='subtitulos'>{fechaActual}</p>

        <table>
          <thead>
            <tr className='encabesado'>
              <td>Nombre</td>
              <td>Cantidad</td>
              <td>Precio</td>
              <td>Sub-total</td>
            </tr>
          </thead>
          <tbody>
            {datos &&
              datos?.map((item) => (
                <tr key={item.id} className='encabesado'>
                  <th>{item.nombre}</th>
                  <th>{item.quantity}</th>
                  <th>ARS: ${item.precio}</th>
                  <th>ARS: ${item.precio * item.quantity}</th>
                </tr>
              ))}
          </tbody>
        </table>
        <h1 className='subtitulos'>Total a Pagar: ARS $ {totalPagar}</h1>
        <h3 className='subtitulos'>Gracias por su compra !!!</h3>
      </div>
      {
        datos.length !== 0
          ? (
            <button onClick={handlePrint}>Imprimir Ticket</button>
            )
          : (null)
      }

    </>
  )
}
