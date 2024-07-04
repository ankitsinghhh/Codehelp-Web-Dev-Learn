import { useEffect, useState } from "react";
import Spinner from "../components/Spinner"
import Product from "../components/Product"

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState([])

  async function fetchProductsData() {
    setLoading(true)
    try {
      const result = await fetch(API_URL)
      const data = await result.json()
      setPosts(data)

    }
    catch (error) {
      console.log("errror agya", error)
      setPosts([]);
    }

    setLoading(false)

  }

  useEffect(() => {
    fetchProductsData()
  }, [])

  return (

    <div>
      {
        loading ? <Spinner /> :
          posts.length > 1 ?
            (
              <div> 
                
                {
                
                  posts.map( (post)=> {
                 return <Product key={posts.id} post={post} />
                  })
      
          
                }
                 </div>
            ) :
            (
              <div>
                <p>No Data Found</p>
              </div>
            )
      }
    </div>
  )
};

export default Home;
