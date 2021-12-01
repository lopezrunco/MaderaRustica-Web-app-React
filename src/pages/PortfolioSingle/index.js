import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import { portfolioArray } from '../../data'
import EmptyPortfolio from '../../components/EmptyPortfolio'

const PortfolioSingle = () => {

    // Recibes the id and uses to set the route
    const {id} = useParams()
    // Use state to set the current portfolio item
    const [portfolio, setPortfolio] = useState(null)

    useEffect(() => {
        // Finds a portfolio matching the portfolio.id with the id from the props
        let portfolio = portfolioArray.find(portfolio => portfolio.id === id)
        
        // If matches, set the founded portfolio on the state
        if (portfolio) {
            setPortfolio(portfolio)
        }
    })

    return (
        <div>
            <Link to='/catalogo' className='portfolio-go-back'>Go Back</Link>

            {/* If exists a portfolio item, render it with the portfolio data. If not, shows empty message */}
            {
                portfolio ? (
                    <div className="portfolio-wrap">
                        <img src={portfolio.bgImage} alt='Portfolio single' />
                        <div>
                            <h1>{portfolio.title}</h1>
                            <h4>{portfolio.subtitle}</h4>
                        </div>
                        <p className="portfolio-desc">{portfolio.description}</p>
                    </div>
                ) : (
                    <EmptyPortfolio />
                )
            }
        </div>
    )
}

export default PortfolioSingle