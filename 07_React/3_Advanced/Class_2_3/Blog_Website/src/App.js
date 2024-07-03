import React, { useContext, useEffect } from "react"
import Header from "./components/Header.jsx"
import Blogs from "./components/Blogs.jsx"
import Pagination from "./components/Pagination.jsx"
import { AppContext } from "./context/AppContext.js"
import "./App.css"



export default function App() {

const {fetchBlogPosts} = useContext(AppContext)

  useEffect(() => {
    fetchBlogPosts()
  }, [])  // run fetchBlogPosts only once when the component mounts/first rendered
 

  return (
    <div className="w-full h-full flex flex-col gap-y-2 justify-center">
      
    <Header/>
    <Blogs/>
    <Pagination/>

    </div>
  )
}
