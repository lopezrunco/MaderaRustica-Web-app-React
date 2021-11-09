import AboutInfo from '../../components/AboutInfo'
import BusinessResume from '../../components/BusinessResume'

function Nosotros() {
    return (
        <main>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-md-6">
                        <AboutInfo />
                    </div>
                    <div className="col-md-5">
                        <BusinessResume />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Nosotros