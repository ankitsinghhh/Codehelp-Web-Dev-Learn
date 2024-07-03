
import { createContext } from "react";
import { baseUrl } from "../baseUrl";
import { useState } from "react";

//creating the context
export const AppContext = createContext();

//providing the context
export default function AppContextProvider({children}){
    //children pass krne ka sidha mtlb h ki jo AppContextProvider tag k andar jo v likhenge hum , bs usko children bolegne 
    // jaise ki index.js me dekkh skte h ki <AppContextProvider>  <App/> <AppContextProvider/> is me enslose kiye h <App/> ko , to ye <APP/> children kehlaega Appcontextprovider ka 

// in simople terms - > AppContextProvider function k andar children argument <App/> ko darsha rha hai 

    const [loading ,setLoading] = useState(false)
    const [posts,setPosts] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages,setTotalPages] = useState(null)


    //date filling function
    
    async function fetchBlogPosts(page = 1){
        setLoading(true)
        let url = `${baseUrl}?page=${page}`
        try{
            const result = await fetch(url)
            const data = await result.json()
            // console.log(data)
            setPage(data.page)
            setPosts(data.posts)
            setTotalPages(data.totalPages)
        }
        catch(error){
            console.error("Error in fetching Data",error)
            setPage(1)
            setPosts([])
            setTotalPages(null)
        }
        setLoading(false) //loading state set false after fetching data  // this is for loading state of posts loading and not of whole app loading
    }


    function handlePageChange(page){
        setPage(page)
        fetchBlogPosts(page) 
    }

    const value = {
        posts, 
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange,  // this function is used to change the page and fetch the new data for that page

        // more context data can be added here
    }

    //step2 - providing the context
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )

    // upr wali line ka mtlb h ki <App/> wale component ko jo humne value {context} create ki h vo sb send krdo 

}


