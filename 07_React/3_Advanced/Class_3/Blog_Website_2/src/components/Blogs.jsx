import React, { useContext } from 'react';
import { AppContext } from "../context/AppContext";
import Spinner from "../components/Spinner";

import BlogDetails from './BlogDetails';


const Blogs = () => {
  // Consuming the context data 
  const { posts, loading } = useContext(AppContext);


  return (
    <div className='w-11/12 max-w-[630px] mx-auto  gap-y-7  flex flex-col justify-center items-center  ' >
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
             <BlogDetails key={post.id} post={post}  />
            ))
          )
        )
      }
    </div>
  );
}

export default Blogs;
