import React, { useState } from "react"
import { blogList } from '../../data'
import BlogList from '../../components/BlogList'
import EmptyList from '../../components/EmptyList'

const BlogHome = () => {

    // State for blog
    const [blogs, setBlogs] = useState(blogList)

    return (
        <div>

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
    )
}

export default BlogHome