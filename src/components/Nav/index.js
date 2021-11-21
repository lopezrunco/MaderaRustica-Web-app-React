import { Link } from 'react-router-dom'

import './style.scss'

function Nav() {
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col header-container">
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/"><i class="fas fa-home"></i><span>Nosotros</span></Link>
                                </li>
                                <li>
                                    <Link to="/catalogo"><i class="fas fa-briefcase"></i><span>Catálogo</span></Link>
                                </li>
                                <li>
                                    <Link to="/servicios"><i class="fas fa-cog"></i><span>Servicios</span></Link>
                                </li>
                                <li>
                                    <Link to="/testimonios"><i class="far fa-comments"></i><span>Testimonios</span></Link>
                                </li>
                                <li>
                                    <Link to="/novedades"><i class="fas fa-newspaper"></i><span>Novedades</span></Link>
                                </li>
                                <li>
                                    <Link to="/contacto"><i class="fas fa-envelope"></i><span>Contacto</span></Link>
                                </li>
                            </ul>
                        </nav>
                        <a className="primary-button" href="/"><i class="fas fa-download"></i>Catálogo</a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Nav