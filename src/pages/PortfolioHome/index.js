import React, { useState } from "react"
import { portfolioArray } from "../../data"
import PortfolioList from '../../components/PortfolioList'
import EmptyPortfolio from "../../components/EmptyPortfolio"

const PortfolioHome = () => {

    // State for portfolio
    const [portfolios, setPortfolios] = useState(portfolioArray)

    return (
        <div>

            {/* Portfolio list & Empty list */}
            {/* Pass portfolios (state) as a prop to the portfolioList */}
            {/* Check if portfolios exists */}
            {!portfolios.length ?
                    // If false, shows empty message
                    <EmptyPortfolio /> :
                    // If true, shows the portfolioList passing portfolios (state) as a prop
                  <PortfolioList portfolio={portfolios} />  
            }
        </div>
    )
}

export default PortfolioHome