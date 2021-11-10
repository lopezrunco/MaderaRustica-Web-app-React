import './style.css'


function TestimonialItem(props) {

    const imageStyle = {
        backgroundImage: `url(${props.avatar})`
    }

    return (
        <div className="col-md-6">
            <div className="testimonial-item">
                <blockquote>{props.quote}</blockquote>
                <div className="info">
                    <div className="author-info">
                        <div className="avatar" style={imageStyle}></div>
                        <div className="author">
                            <h5>{props.authorName}</h5>
                            <span>{props.authorWork}</span>
                        </div>
                    </div>
                    <div className="icon"><i class="fas fa-quote-left"></i></div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialItem