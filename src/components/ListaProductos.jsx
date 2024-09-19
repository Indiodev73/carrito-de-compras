import data from '../api/data.json'
import { Footer } from './Footer'
import { useState } from 'react'
import { Buscador } from './Buscador'
import { Productos } from './Productos'

export function ListaProductos () {
  const [buscar, setBuscar] = useState('')

  const handleSearch = (e) => {
    setBuscar(e.target.value)
  }

  const resultadoBusqueda = buscar
    ? data.filter((item) => item.nombre.toLowerCase().includes(buscar.toLowerCase()))
    : data

  return (
    <>
      <Buscador buscar={buscar} handleSearch={handleSearch} />
      <main>
        <ul className='productos'>
          {resultadoBusqueda?.length > 0
            ? (
                resultadoBusqueda?.map((elem) => (
                  <Productos
                    key={elem.id}
                    id={elem.id}
                    nombre={elem.nombre}
                    imagen={elem.imagen}
                    precio={elem.precio}
                    detalle={elem.detalle}
                  />
                ))
              )
            : (
              <p>Sin Respueta</p>
              )}
        </ul>
      </main>
      <Footer />
    </>
  )
}
