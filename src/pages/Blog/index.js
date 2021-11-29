import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import { blogList } from "../../data"
import EmptyList from "../../components/EmptyList"

const Blog = () => {

    // Recibes the id and uses to set the route
    const {id} = useParams()
    // Use state to set the current blog item
    const [blog, setBlog] = useState(null)

    useEffect(() => {
        // Finds a blog matching the blog.id with the id from the props
        let blog = blogList.find(blog => blog.id === parseInt(id))

        // If matches, set the founded blog on the state
        if (blog) {
            setBlog(blog)
        }
    })

    return(
        <div>
            <Link to='/novedades' className='blog-go-back'>Go Back</Link>

            {/* If exists a blog item, render it with the blog data. If not, shows empty message */}
            {
                blog ? (
                    <div className="blog-wrap">
                        <header>
                            <h1>{blog.title}</h1>
                        </header>
                        <img src={blog.cover} alt='cover' />
                        <p className="blog-desc">{blog.description}</p>
                    </div>
                ) : (
                    <EmptyList />
                )
            }
        </div>
    )
}

export default Blog