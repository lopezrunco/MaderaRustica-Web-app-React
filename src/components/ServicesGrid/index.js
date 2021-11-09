import ServiceItem from "../ServicesItem"

function ServicesGrid() {
    return (
        <div className="services-grid">
            <div className="row">
                <ServiceItem 
                    iconClassName="fas fa-battery-full" 
                    title="Rendimiento" 
                    text="Evaluar la durabilidad y el rendimiento de sus productos de mobiliario para cumplir con los estándares de la industria y las expectativas de los clientes." 
                />
                <ServiceItem 
                    iconClassName="fas fa-globe-americas" 
                    title="Medioambiente" 
                    text="Demostrar la reducción de impacto negativo social y medioambiental de sus muebles mientras garantizamos resultados positivos para las personas, el planeta y el beneficio." 
                />
                <ServiceItem 
                    iconClassName="fas fa-burn" 
                    title="Inflamabilidad" 
                    text="Determinar la resistencia al fuego de los muebles, tejidos para fundas y materiales de relleno, de acuerdo con los estándares nacionales e internacionales." 
                />
                <ServiceItem 
                    iconClassName="fas fa-comment-dots" 
                    title="Consultoría" 
                    text="Solicite nuestra experiencia para favorecer su negocio. Podemos ayudarle tanto si necesita apoyo con el cumplimiento regulatorio, recursos adicionales o hacer frente a los desafíos de la industria." 
                />
                <ServiceItem 
                    iconClassName="fas fa-plug" 
                    title="Seguridad eléctrica" 
                    text="Asegurar que los productos de mobiliario que integran componentes eléctricos, como son las mesas con altura ajustable, los sistemas de paneles y unidades de distribución de energía cumplen con los estándares de seguridad." 
                />
                <ServiceItem 
                    iconClassName="fas fa-handshake" 
                    title="Mantenimiento" 
                    text="Nuestros muebles son de terror, aguantan una vida. Pero llegado el momento, despreocúpse por el mantenimiento. Nosotros lo hacemos por usted." 
                />
            </div>
        </div>
    )
}

export default ServicesGrid