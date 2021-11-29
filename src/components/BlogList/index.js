import React from "react"
import BlogItem from './BlogItem'

// Recibes the data as prop
const BlogList = ({ blogs }) => (
    <div className="row">

        {/* 
            Iterate the data blog array and create a BlogItem component for each one, 
            passing a prop with the content of the single blog item. Use the blog item id as key 
        */}

        {blogs.map((blog) => (
            <BlogItem blog={blog} key={blog.id} />
        ))}

    </div>
)

export default BlogList