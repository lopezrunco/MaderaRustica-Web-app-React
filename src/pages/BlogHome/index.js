import React, { useState } from "react"
import { blogList } from '../../data'
import BlogList from '../../components/BlogList'
import EmptyList from '../../components/EmptyList'
import PageTitle from "../../components/PageTitle"

const BlogHome = () => {

    // State for blog
    const [blogs, setBlogs] = useState(blogList)

    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <PageTitle title="Últimas noticias del rubro" subtitle="Novedades" />
                    </div>
                </div>
                <div className="row">
                    {/* Blog list & Empty list */}
                    {/* Pass blogs (state) as a prop to the blogList */}
                    {/* Check if blogs exists */}
                    {!blogs.length ?
                        // If false, shows empty message
                        <EmptyList /> :
                        // If true, shows the bloglist passing blogs (state) as a prop
                        <BlogList blogs={blogs} />
                    }
                </div>
            </div>
        </main>
    )
}

export default BlogHome