import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({ handleBookmarked }) => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        const fetchBlogs = async () => {
            const res = await fetch("blogs.json");
            const data = await res.json();
            setBlogs(data);
            // console.log(data);
        }
        fetchBlogs();
        // fetch("blogs.json")
        // .then(res => res.json())
        // .then(data => console.log(data))
    }, []);

    return (
        <div>
            <h1 className='text-3xl font-bold my-4'>Total: {blogs.length}</h1>
            <div className='Blog-container grid grid-cols-2 justify-around gap-5'>
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog} handleBookmarked={handleBookmarked}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;