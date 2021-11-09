import PageTitle from "../../components/PageTitle"
import ContactInfo from "../../components/ContactInfo"

function Contacto() {
    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <PageTitle title="Contáctenos y haremos el trabajo a su medida" subtitle="Contacto" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5">
                        <ContactInfo />
                    </div>
                    <div className="col-md-7">

                    </div>
                </div>
            </div>
        </main>
    )
}

export default Contacto