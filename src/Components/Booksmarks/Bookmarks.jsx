/* eslint-disable react/prop-types */

import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({ bookmarks,readingtime }) => {

    return (
        <div className="w-1/3  text-center bg-gray-300 rounded-lg">
            <div>
                <h1>Spent reading tiem:{readingtime} </h1>
            </div>
            <div className="w-full bg-purple-600 py-2">
                <h2 className="text-2xl font-bold">Bookmarked Blogs: {bookmarks.length}</h2>
            </div>
            {
                bookmarks.map((bookmark,ids) => <Bookmark
                    key={ids}
                    bookmark={bookmark}
                    
                    ></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;