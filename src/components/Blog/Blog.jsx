import React from 'react';
import Avatar from '../../assets/Avatar/Avatar';
import { IoBookmarks } from "react-icons/io5";

const Blog = ({ blog, handleBookmarked }) => {
    const { cover, title, author_name, author_profile, is_Active } = blog;
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src={cover}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-2 items-center'>
                            <Avatar author_profile={author_profile} is_Active={is_Active}></Avatar>
                            <h2 className='text-2xl font-bold '>{author_name}</h2>
                        </div>
                        <button onClick={() => handleBookmarked(blog)}><IoBookmarks size={"30"} className='cursor-pointer' /></button>
                    </div>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Mark as Read</button>
                </div>
            </div>
        </div>
    );
};

export default Blog;