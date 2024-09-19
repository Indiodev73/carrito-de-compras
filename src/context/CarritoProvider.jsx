import { useState } from 'react'
import { CarritoContext } from './CarritoContext'

export function CarritoProvider ({ children }) {
  const [datos, setDatos] = useState([])
  // useEffect(() => {
  //   setDatos(data)
  // }, [])

  return (
    <CarritoContext.Provider value={{ datos, setDatos }}>
      {children}
    </CarritoContext.Provider>
  )
}
