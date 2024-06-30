import React from "react";

import Navbar from "./components/Navbar";

import Filter from "./components/Filter";

import Cards from "./components/Cards";

import Spinner from "./components/Spinner";

import { apiUrl, filterData } from "./data"

import { useState, useEffect } from "react";

import { toast } from "react-toastify";



const App = () => {



  const [courses, setCourses] = useState(null);

  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState(filterData[0].title);

  // Fetching data from API
  const fetchData = async () => {
    setLoading(true) // set loading to true in starting
    try {
      const response = await fetch(apiUrl); //fetching data from API
      const output = await response.json(); // converting to json
      //savedata into a variable
      // console.log(output.data)
      setCourses(output.data);
    }
    catch (error) {
      toast.error("Something went wrong");
    }

    setLoading(false) // set loading to false after fetching data successfully  or in case of error
  }


  useEffect(() => {


    fetchData(); //1st render pe fetch data call hoga

  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-bgDark2">

      <div>
        <Navbar />
      </div>

      <div className="bg-bgDark2">
        <div>
          <Filter
            filterData={filterData}
            category={category}
            setCategory={setCategory}
          />
        </div>

        <div className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]" >

          {
            loading ? (<Spinner />) : (<Cards courses={courses} category={category} />)
          }
        </div>
      </div>

    </div>
  );
};

export default App;
