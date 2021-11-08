import { Link } from 'react-router-dom'

function Nav() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/catalogo">Catálogo</Link>
                    </li>
                    <li>
                        <Link to="/testimonios">Testimonios</Link>
                    </li>
                    <li>
                        <Link to="/contacto">Contacto</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav