import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import Spinner from './Spinner'
import useGif from '../hooks/useGif';



const API_KEY = process.env.REACT_APP_GIPHY_API_KEY   // using env -- accessing variable present in env file 

export default function Random() {

//   const [gif, setgif] = useState('')

//   const [loading,setLoading] = useState(false);


//   async function fetchData(){
//     setLoading(true);
//     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
//     // const output = await axios.get(url) // axios use krne se output ko json me convert nhi krna pdta , ye direct convert kr k deta hai

//     // jo url chaiye gif ko wo is trh present h -> data -> data > images -> downsized_large -> url  , isiliye destructure krke direct data lelete h pehle
//     const { data } = await axios.get(url)
 
//     const imaageSource = data.data.images.downsized_large.url

//     setgif(imaageSource)

//     // console.log(imaageSource)

//     setLoading(false);
//   }

// useEffect( () => {
//   fetchData(); // taaki pehle render pe ye function run ho 
// },[])


const {gif , loading , fetchData} = useGif();

  // function clickHandler(){
  //     fetchData();
  // }

  return (
    <div className='w-1/2  bg-green-500 h-max-[450px] rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>

      <h1 className= 'mt-[10px] text-2xl underline uppercase font-bold'>A Random Gif</h1>
      

    {
      loading ? ( <Spinner/>  ) : ( <img src={gif} width={400} className='bg-cover bg-center'></img> ) 
    }

      <button
      className='w-10/12 bg-yellow-400 text-lg py-2 rounded-lg  mb-[20px]'
      onClick={ () => fetchData()} 
      >
        Generate Random Gif
      </button>


    </div>

  )
}
