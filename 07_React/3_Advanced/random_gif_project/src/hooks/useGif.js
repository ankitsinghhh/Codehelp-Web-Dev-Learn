
import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';



const API_KEY = process.env.REACT_APP_GIPHY_API_KEY   // using env -- accessing variable present in env file 

// const radnomMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
// const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
const Url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;




const useGif = (tag) => {





    const [gif, setgif] = useState('')

    const [loading, setLoading] = useState(false)



    async function fetchData(tag) {
        setLoading(true);


        // jo url chaiye gif ko wo is trh present h -> data -> data > images -> downsized_large -> url  , isiliye destructure krke direct data lelete h pehle
        // const { data } = await axios.get(tag ? tagMemeUrl : radnomMemeUrl)
        const { data } = await axios.get(tag ?  `${Url}&tag=${tag}` : Url ) 

        // const output = await axios.get(url) // axios use krne se output ko json me convert nhi krna pdta , ye direct convert kr k deta hai


        const imaageSource = data.data.images.downsized_large.url

        setgif(imaageSource)

        // console.log(imaageSource)

        setLoading(false);
    }

    useEffect(() => {
        fetchData(); // taaki pehle render pe ye function run ho 
    }, [])


    return { gif, loading, fetchData }


};

export default useGif;














