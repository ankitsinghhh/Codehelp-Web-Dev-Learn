import React from 'react'
import { useLocation, useNavigate} from 'react-router-dom'
import Header from '../components/Header'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';


const CategoryPage = () => {

    const navigate = useNavigate();
    const location = useLocation()
    const category = location.pathname.split('/').at(-1);

    return (
        <div className='py-20'>

            <Header />

            <div className='flex items-center gap-x-4 w-[630px] mx-auto mb-6'>

                <button className='border px-3 py-2 rounded-lg'
                    onClick={() => navigate(-1)}
                >
                    Back
                </button>


                <h2 className='font-bold text-2xl text-slate-500'>
                    Blogs on <span className='text-slate-700'>#{category}</span>
                </h2>

            </div>

            <Blogs />
            <Pagination />


        </div>
    )
}

export default CategoryPage