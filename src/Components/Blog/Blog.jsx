/* eslint-disable react/prop-types */


import { FaRegBookmark } from "react-icons/fa6";

const Blog = ({ blog,handleAddToBookmark }) => {
    const { title, cover, author_img, author, posted_date, reading_time,hashtags } = blog
    
    
    return (
        <div className=" mx-auto py-10 shadow-lg p-3 border-2 my-3 rounded-lg">
            <div className="w-full">
            <img className="w-full" src={cover} alt="" />
            </div>
            <div className="flex justify-between items-center my-4">
                <div className="flex  gap-4">
                    <div className="w-16">
                        <img src={author_img} alt="" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <h3 className="text-xl">{reading_time}</h3>
                    <button onClick={()=>handleAddToBookmark(blog)}><FaRegBookmark /></button>


                </div>
            </div>
            <div className="max-w-fit">
                <p className="text-2xl">{title}</p>
            </div>
            <p>
                {
                    hashtags.map((hash,idx) => <span key={idx}><a>#{hash}</a></span>)
                }
            </p>
        </div>
    );
};

export default Blog;