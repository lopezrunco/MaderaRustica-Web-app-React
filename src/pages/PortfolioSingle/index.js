import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import { portfolioArray } from '../../data'
import EmptyPortfolio from '../../components/EmptyPortfolio'
import './style.scss'

const PortfolioSingle = () => {

    // Recibes the id and uses to set the route
    const { id } = useParams()
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
        <main className="portfolio-item">
            <div className="container">
                <div className="row">
                    <div className="col blog-wrapper">
                        <Link to='/catalogo' className='go-back'><i class="fas fa-arrow-left"></i> Volver al catálogo</Link>

                        {/* If exists a portfolio item, render it with the portfolio data. If not, shows empty message */}
                        {
                            portfolio ? (
                                <div className="row portfolio-item-body">
                                    <div className="col-lg-6">
                                        <h2>{portfolio.title}</h2>
                                        <h5>{portfolio.subtitle}</h5>
                                        <p className="portfolio-desc">{portfolio.description}</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <img src={portfolio.bgImage} alt='Portfolio single' />
                                    </div>
                                </div>
                            ) : (
                                <EmptyPortfolio />
                            )
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}

export default PortfolioSingle