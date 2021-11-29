import React from "react"
import { Link } from "react-router-dom"

const BlogItem = ({
    // Deconstruct the prop into the content components
    blog: {
        description,
        title,
        cover,
        id
    },
}) => {
    return (
        <div className='blog-item-wrap'>
            {/* Set image url from prop cover */}
            <img className='blog-item-cover' src={cover} alt='cover' />

            <h3>{title}</h3>
            <p className="blog-item-desc">{description}</p>

            <footer>
                {/* Generate a dinamic route using the id from the props */}
                <Link to={`/novedades/${id}`}>Ver</Link>
            </footer>
        </div>
    )
}

export default BlogItem