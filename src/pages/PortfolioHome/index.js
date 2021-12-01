import React, { useState } from "react"
import { portfolioArray } from "../../data"
import PortfolioList from '../../components/PortfolioList'
import EmptyPortfolio from "../../components/EmptyPortfolio"
import PageTitle from '../../components/PageTitle'

const PortfolioHome = () => {

    // State for portfolio
    const [portfolio, setPortfolio] = useState(portfolioArray)

    return (

        <main>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <PageTitle title="Últimos trabajos que hemos realizado" subtitle="Catálogo" />
                    </div>
                </div>
                <div className="row">
                    {/* Portfolio list & Empty list */}
                    {/* Pass portfolios (state) as a prop to the portfolioList */}
                    {/* Check if portfolios exists */}
                    {!portfolio.length ?
                        // If false, shows empty message
                        <EmptyPortfolio /> :
                        // If true, shows the portfolioList passing portfolios (state) as a prop
                        <PortfolioList portfolio={portfolio} />
                    }
                </div>
            </div>
        </main>
    )
}

export default PortfolioHome