import ServiceItem from "../ServicesItem"
import { servicesArray } from '../../data'

function ServicesGrid() {
    return (
        <div className="services-grid">
            <div className="row">

                {/* Returns a ServiceItem component for every object on the array */}
                {servicesArray.map(({ iconClassName, title, text, id }) => (

                    <ServiceItem
                        key={id}
                        iconClassName={iconClassName}
                        title={title}
                        text={text}
                    />

                ))}
            </div>
        </div>
    )
}

export default ServicesGrid