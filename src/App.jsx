

import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Booksmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingtime, setReadingtime] = useState(0)

  const handleAddToBookmark = blog => {
    const newBookmark = [...bookmarks, blog]
    setBookmarks(newBookmark)

  }

  const handleMakeAsRead = (time,id) => {
    console.log('make as read added', time);
     const nweReadingtime = readingtime + time
    setReadingtime(nweReadingtime)
    const remainingBookMarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookMarks)
  }

  


  return (
    <>

      <Header></Header>
      <div className='md:flex w-11/12 mx-auto justify-between gap-3'>

        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleMakeAsRead={handleMakeAsRead}
        ></Blogs>

        <Bookmarks bookmarks={bookmarks}
        readingtime={readingtime}
        ></Bookmarks>

      </div>

    </>
  )
}

export default App
