/* eslint-disable react/prop-types */

import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({ bookmarks }) => {

    return (
        <div className="w-1/3  text-center bg-gray-300 rounded-lg">
            <div className="w-full bg-purple-600 py-2">
                <h2 className="text-2xl font-bold">Bookmarked Blogs: {bookmarks.length}</h2>
            </div>
            {
                bookmarks.map(bookmark => <Bookmark
                    key={bookmark.div}
                    bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;