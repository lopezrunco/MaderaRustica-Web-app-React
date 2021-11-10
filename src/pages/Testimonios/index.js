import PageTitle from "../../components/PageTitle"
import TestimonialItem from "../../components/TestimonialItem"


import alisonGomezAvatar from '../../assets/img/alison-gomez.jpg'
import pedroPerezAvatar from '../../assets/img/pedro-perez.jpg'

function Testimonios() {
    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <PageTitle title="Lo que dicen nuestros clientes" subtitle="Testimonios" />
                    </div>
                </div>
                <div className="row">
                    <TestimonialItem avatar={alisonGomezAvatar} quote="Nunc dapibus volutpat purus, sit amet pellentesque lorem. Duis tempor congue mauris nec sagittis. Duis ipsum nisi, feugiat nec convallis a, congue at ipsum." authorName="Alison Gomez" authorWork="Empresaria" />
                    <TestimonialItem avatar={pedroPerezAvatar} quote="It was popularised in the 1960s with the release of more and more recently with software like Aldus PageMaker including versions of aremit das velle norte." authorName="Pedro Perez" authorWork="Productor rural" />
                </div>
            </div>
        </main>
    )
}

export default Testimonios