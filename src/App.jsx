import React, { Suspense, useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Blogs from './components/Blogs/Blogs';

const App = () => {
  const [bookmarked, setBookmarked] = useState([]);
  const handleBookmarked = (blog) => {
    // console.log(blog);
    setBookmarked([...bookmarked, blog]);
    // const bookmarkedBlogs = bookmarked.filter(bookmarkedBlog => bookmarkedBlog.id !== blog.id)
    // console.log("This is Bookmarked Data ", bookmarkedBlogs);
    // setBookmarked(bookmarkedBlogs)
  }
  return (
    <div>
      <div className='container mx-auto'><Navbar></Navbar></div>
      <div className="main-container flex text-center container mx-auto">
        <div className="left-container w-[65%]">
          <Blogs handleBookmarked={handleBookmarked}></Blogs>
        </div>
        <div className="right-container w-[35%]">
          <div>
            <h1 className='text-2xl font-semibold my-3'>Reading Time: 0</h1>
            <h1 className='text-2xl font-semibold my-3'>Bookmarked Count : {bookmarked.length}</h1>
          </div>
          <div>
            {/* Here are Show all The Book bookmarked */}

          </div>
        </div>
      </div>
    </div>
  );
};

export default App;