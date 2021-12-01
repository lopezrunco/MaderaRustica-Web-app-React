import React from "react"
import { Link } from "react-router-dom"

const PortfolioItem = ({
    // Deconstruct the prop into the content components
    portfolioObject: {
        title,
        description,
        subtitle,
        bgImage,
        id
    },
}) => {
    return (
        <div className='portfolio-item-wrap'>
            {/* Set image url from prop cover */}
            <img className='portfolio-item-cover' src={bgImage} alt='Portfolio item' />

            <h3>{title}</h3>
            <h4>{subtitle}</h4>

            <footer>
                {/* Generate a dinamic route using the id from the props */}
                <Link to={`/catalogo/${id}`}>Ver</Link>
            </footer>
        </div>
    )
}

export default PortfolioItem