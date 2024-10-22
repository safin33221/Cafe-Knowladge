

import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Booksmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])

  const handleAddToBookmark = blog =>{
    const newBookmark = [...bookmarks,blog]
    setBookmarks(newBookmark)
    
  }
  
  
  
  return (
    <>
      
      <Header></Header>
      <div className='md:flex w-11/12 mx-auto justify-between gap-3'>

        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>

        <Bookmarks bookmarks={bookmarks}></Bookmarks>

      </div>
      
    </>
  )
}

export default App
