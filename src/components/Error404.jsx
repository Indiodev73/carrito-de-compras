import { Link } from 'react-router-dom'

const titleStyle = {
  listStyle: 'none',
  textDecoration: 'none'
}

export function Error404 () {
  return (
    <div>
      <h1>ERROR 404</h1>
      <h3 className='error404'>Page Not Fount</h3>
      <Link to='/' style={titleStyle}>
        <h2 className='titulo'>◀️ Volver</h2>
      </Link>
    </div>
  )
}
