import { Link } from 'react-router-dom'
import { useQuantity } from '../hooks/useQuantity'

const titleStyle = {
  listStyle: 'none',
  textDecoration: 'none'
}

export function Header () {
  const { quantity } = useQuantity()

  return (
    <header>
      <Link to='/' style={titleStyle}>
        <h2 className='titulo'>Tienda Virtual</h2>
      </Link>
      <Link to='/carrito' style={titleStyle}>
        <h4 className='subtitulo'>
          🛒 Carrito:   <span className='cart-count'>{quantity}</span>
        </h4>
      </Link>
    </header>
  )
}
