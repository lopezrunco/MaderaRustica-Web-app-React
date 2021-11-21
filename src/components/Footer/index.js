import './style.scss'

import SocialLinks from '../SocialLinks'

function Footer() {
    return (
        <footer>
            <div className="container mb-4">
                <div className="row">
                    <div className="footer-wrapper">
                        <div className="site-info">
                            <p>© Rústica | Todos los derechos reservados | Desarrollo: <a href="https://www.lopezrunco.com/" target="_blank" rel="noreferrer">lopezrunco</a></p>
                        </div>
                        <SocialLinks />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer