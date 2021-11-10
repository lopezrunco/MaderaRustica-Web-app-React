import './style.css'

function NewsItem(props) {

    const imageStyle = {
        backgroundImage: `url(${props.bgImage})`
    }

    return (
        <a className="col-lg-4 news-item" href="/">
            <div className="main-wrapper">
                <div className="image-wrapper">
                    <div className="image" style={imageStyle}></div>
                </div>
                <div className="content-wrapper">
                    <p className="category">{props.category}</p>
                    <h5>{props.title}</h5>
                    <span className="read-more">Leer más <i class="fas fa-caret-right"></i></span>
                </div>
            </div>
        </a>
    )
}

export default NewsItem