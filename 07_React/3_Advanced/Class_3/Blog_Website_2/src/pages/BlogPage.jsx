import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { baseUrl } from '../baseUrl'
import Header from '../components/Header'
import BlogDetails from '../components/BlogDetails'



const BlogPage = () => {

const [blog,setBlog] = useState(null)
const [relatedBlogs,setRelatedBlogs] = useState([])
const location = useLocation()
const navigation = useNavigate()
const {setLoading , loading} = useContext(AppContext)

const newBaseUrl = "https://codehelp-apis.vercel.app/api/"


const blogId = location.pathname.split("/").at(-1)

async function fetchRelatedBlogs() {
        setLoading(true)
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`

        try{
            const result = await fetch(url)
            const data = await result.json()
            setBlog(data.blog)
            setRelatedBlogs(data.relatedBlogs)
        }
        catch(error){
            console.log("error ayaa hai in blod wali id")
            setBlog(null)
            setRelatedBlogs([])
        }
        setLoading(false)
}


useEffect(() => {
   if(blogId){
    fetchRelatedBlogs()
   }
}, [location.pathname])

  return (
    <div className='pt-16'>
        <Header/>

        <div>
            <button
            onClick={() => navigation(-1)}
            >
                Back
            </button>
        </div>

        {
            loading ? 
            (
                <div>Loading...</div>
            )
            :
            (
                blog ?
                 (
                        <div>
                            <BlogDetails post={blog} />
                            <h2>Related Blogs</h2>
                            {
                                relatedBlogs.map(post => (
                                    <div key = {post.id}>
                                        <BlogDetails post={post}/>
                                    </div>
                                ))
                            }
                        </div>
                   
                 ) :
                  (
                    <div>
                        <p>No posts found</p>
                    </div>
                  ) 
            )
        }



    </div>
  )
}

export default BlogPage