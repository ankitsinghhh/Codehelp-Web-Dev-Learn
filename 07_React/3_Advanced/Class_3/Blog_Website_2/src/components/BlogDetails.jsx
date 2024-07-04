import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
    return (
        <div className='bg-blue-100 py-3 px-3 border-blue-200 rounded-md shadow-lg '>

            <div classname=" " >
                <NavLink to={`/blog/${post.id}`} >
                    <span className='font-bold text-xl pb-2' >{post.title}</span>
                </NavLink>
            </div>

            <p>
                By 
                <span className='italic mx-1 text-[14px]'>
                    {post.author}
                </span>
                on
                {
                    " "
                }
                <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
                    <span className='font-bold underline'>{post.category}</span>
                </NavLink>
            </p>

            <p className='text-[13px] mb-3'> Posted On {post.date} </p>

            <p className='text-[15px] text-slate-700 my-3'>{post.content}</p>

            <div>

                {post.tags.map( (tag,index)=>{
                  return  <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                        <span className='mx-1 text-blue-800 text-sm font-[700]' >{`#${tag}`}</span>
                    </NavLink>
                })}

            </div>



            {/* <div key={post.id}>
                <p className='font-bold text-lg  '  >{post.title}</p>
                <p className='text-[15px]' >
                    By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category}</span>
                </p>
                <p className='text-[15px]' >Posted on {post.date}</p>
                <p className='text-md mt-3 text-justify' >{post.content}</p>
                <div className='' >
                    {
                        post.tags.map((tag, index) => (
                            <span className='text-blue-700 font-bold text-xs mr-2 underline' key={index}>{`#${tag}`}</span>
                        ))
                    }
                </div>
            </div> */}



        </div>
    )
}

export default BlogDetails