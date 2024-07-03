import React, { useContext } from 'react';
import { AppContext } from "../context/AppContext";
import Spinner from "../components/Spinner";


const Blogs = () => {
  // Consuming the context data 
  const { posts, loading } = useContext(AppContext);


  return (
    <div className='w-11/12 max-w-[630px] mx-auto py-20  flex flex-col gap-y-7 justify-center items-center  ' >
      {
        loading ? (
          <Spinner />
        ) : (
          posts.length === 0 ? (
            <div>
              <p>No Posts Found</p>
            </div>
          ) : (
            posts.map((post) => (
              <div key={post.id}>
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
              </div>
            ))
          )
        )
      }
    </div>
  );
}

export default Blogs;
