import {Logo} from './Logo'
import '../styles/navBar.css'

export function NavBar() {
  return (
    <nav className='navBar'>
      <ul>
        <Logo/>
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="/productos">Productos</a>
        </li>
        <li>
          <a href="/contacto">Contacto</a>
        </li>
      </ul>
    </nav>
  );
}
