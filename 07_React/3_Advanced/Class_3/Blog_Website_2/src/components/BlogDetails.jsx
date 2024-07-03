import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
    return (
        <div>

            <div>
                <NavLink to={`/blog/${post.id}`} >
                    <span>{post.title}</span>
                </NavLink>
            </div>

            <p>
                By
                <span>
                    {post.author}
                </span>
                on
                {
                    " "
                }
                <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
                    <span>{post.category}</span>
                </NavLink>
            </p>

            <p> Posted On {post.date} </p>

            <p>{post.content}</p>

            <div>

                {post.tags.map( (tag,index)=>{
                  return  <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                        <span>{`#${tag}`}</span>
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