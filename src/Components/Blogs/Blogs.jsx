/* eslint-disable react/prop-types */

import { useState } from 'react'
import { useEffect } from 'react'
import Blog from '../Blog/Blog';

const Blogs = ({handleAddToBookmark,handleMakeAsRead}) => {
    const [blogs,setBlogs] = useState([])
    useEffect(()=>{
    fetch('blogs.json')
    .then(res => res.json())
    .then(data =>setBlogs(data))
  },[])
    return (
        <div className='w-2/3'>
            {blogs.map(blog=><Blog
             key={blog.id}
              blog={blog}
               handleAddToBookmark={handleAddToBookmark}
               handleMakeAsRead={handleMakeAsRead}
               ></Blog>)}
        </div>
    );
};

export default Blogs;