import PageTitle from "../../components/PageTitle"
import NewsItem from "../../components/NewsItem"

import casasImage from '../../assets/img/casas.jpg'
import maderaDuraImage from '../../assets/img/madera-dura.jpg'
import carpinterosImage from '../../assets/img/carpinteros.jpg'

function Novedades() {
    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <PageTitle title="Últimas noticias del rubro" subtitle="Novedades" />
                    </div>
                </div>
                <div className="row news-grid">
                    <NewsItem title="Cada vez más gente elige construir en madera" category="Arquitectura" bgImage={casasImage} />
                    <NewsItem title="Madera contaminada en Guichón" category="Medio ambiente" bgImage={maderaDuraImage} />
                    <NewsItem title="Los carpinteros son una especie en extinción" category="Interés general" bgImage={carpinterosImage} />
                </div>
            </div>
        </main>
    )
}

export default Novedades