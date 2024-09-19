import { Link } from 'react-router-dom'

const titleStyle = {
  listStyle: 'none',
  textDecoration: 'none'
}

export function Footer () {
  const fecha = new Date().getFullYear()
  return (
    <footer className='footer'>
      <ul className='mejor'>
        <li className='textual'>
          <h5>
            <span>José María Asial Diaz</span>
          </h5>
        </li>
        <li className='textual'>
          <Link
            style={titleStyle}
            to='https://api.whatsapp.com/send?phone=543813448362'
            target='_blank'
            rel='noreferrer'
          >
            <h5>Mandame un WhatsApp</h5>
          </Link>
        </li>
        <li className='textual'>
          <Link
            style={titleStyle}
            to='https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ifkv=ASKXGp0Q_63jDgoznuOpI0rYO1-pLEY5d9aXwFIVp84DmfUOPTOgzxHrUyiXry10ES0kltQo5dXtMA&rip=1&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S1829283882%3A1705037627881812&theme=glif'
            target='_blank'
            rel='noreferrer'
          >
            <h5>Mandame un email</h5>
          </Link>
        </li>
        <li className='textual'>
          <Link
            style={titleStyle}
            to='https://es.wikipedia.org/wiki/Derecho_de_autor'
            target='_blank'
            rel='noreferrer'
          >
            <h5>Todos los derechos reservados © {fecha}</h5>
          </Link>
        </li>
      </ul>
    </footer>
  )
}
