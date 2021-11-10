import ServiceItem from "../ServicesItem"

function ServicesGrid() {
    return (
        <div className="services-grid">
            <div className="row">
                <ServiceItem 
                    iconClassName="fas fa-battery-full" 
                    title="Rendimiento" 
                    text="Evaluar la durabilidad y el rendimiento de los productos para cumplir con las expectativas de los clientes." 
                />
                <ServiceItem 
                    iconClassName="fas fa-globe-americas" 
                    title="Medioambiente" 
                    text="Reduccir el impacto medioambiental mientras garantizamos resultados positivos para las personas." 
                />
                <ServiceItem 
                    iconClassName="fas fa-burn" 
                    title="Inflamabilidad" 
                    text="Determinar la resistencia al fuego de los muebles, tejidos para fundas y materiales de relleno." 
                />
                <ServiceItem 
                    iconClassName="fas fa-comment-dots" 
                    title="Consultoría" 
                    text="Solicite nuestra experiencia para favorecer cualquier aspecto de su negocio." 
                />
                <ServiceItem 
                    iconClassName="fas fa-plug" 
                    title="Seguridad eléctrica" 
                    text="Asegurar que los productos de mobiliario cumplan con los estándares de seguridad." 
                />
                <ServiceItem 
                    iconClassName="fas fa-handshake" 
                    title="Mantenimiento" 
                    text="Llegado el momento, despreocúpse por el mantenimiento. Nosotros lo hacemos por usted." 
                />
            </div>
        </div>
    )
}

export default ServicesGrid