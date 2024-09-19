import './style/app.css'
import { Header } from './components/Header'
import { Error404 } from './components/Error404'
import { ListaProductos } from './components/ListaProductos'
import { CarritoCompras } from './components/CarritoCompras'
import { CarritoProvider } from './context/CarritoProvider'
import { DetalleProducto } from './components/DetalleProducto'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export function App () {
  return (
    <div className='page'>
      <CarritoProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<ListaProductos />} />
            <Route path='/carrito' element={<CarritoCompras />} />
            <Route path='/detalle/:productId' element={<DetalleProducto />} />
            <Route path='*' element={<Error404 />} />
          </Routes>
        </BrowserRouter>
      </CarritoProvider>
    </div>
  )
}
