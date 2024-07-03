import React, { useContext} from "react"
import Header from "./components/Header.jsx"
import Blogs from "./components/Blogs.jsx"
import Pagination from "./components/Pagination.jsx"
import { AppContext } from "./context/AppContext.js"
import "./App.css"
import { useEffect } from "react"
import { Routes , Route, useLocation } from "react-router-dom"
import { useSearchParams } from "react-router-dom"

import Home from "./pages/Home.jsx"
import BlogPage from "./pages/BlogPage.jsx"
import TagPage from "./pages/TagPage.jsx"
import CategoryPage from "./pages/CategoryPage.jsx"


export default function App() {

const {fetchBlogPosts} = useContext(AppContext)

const [searchParams, setSearchParams] = useSearchParams()
const location = useLocation()

   

  useEffect(() => {
   
    const page = searchParams.get("page") ?? 1; // agr searchParams se value mil gai toh thik nahi toh default value 1 chli jaegi page variable me
    
    if(location.pathname.includes("tags")){
      //iska mtlb tag wala show krna h 
      const tag = location.pathname.split("/").at(-1).replace("-"," ")
      fetchBlogPosts(Number(page),tag)
    }
    else if (location.pathname.includes("categories")){
        const category = location.pathname.split("/").at(-1).replace("-"," ")
        fetchBlogPosts(Number(page),null,category)  
    }
    else{
      fetchBlogPosts(Number(page)) // by default fetch all posts
    }
  }, [location.pathname, location.search])  // run fetchBlogPosts only once when the component mounts/first rendered
 

  return (
  <Routes>

    <Route path="/" element={ <Home/>} />
    <Route path="/blog/:blogId  " element={ <BlogPage/>} /> 
    <Route path="/tags/:tag  " element={ <TagPage/>} />
    <Route path="/categories/:category " element={ <CategoryPage/>} />

    {/* in sb path pe jaane se pehle , in sb ke liye data lekr pehle se rakhna pdega taaki jab jae tab data lekr jaa ske , isilie useEffect m in sbke lie fetchBlogPosts() fucntions add kie hai */}


  </Routes>
  )
}
