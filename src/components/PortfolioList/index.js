import React from "react"
import PortfolioItem from './PortfolioItem'

// Recibes the data as prop
const PortfolioList = ({ portfolio }) => (
    <div className="portfolio-list-wrap">

        {/* 
            Iterate the data portfolio array and create a PortfolioItem component for each one, 
            passing a prop with the content of the single portfolio item. Use the portfolio item id as key 
        */}

        {portfolio.map((portfolioObject) => (
                <PortfolioItem portfolioObject={portfolioObject} key={portfolioObject.id} />
        ))}

    </div>
)

export default PortfolioList