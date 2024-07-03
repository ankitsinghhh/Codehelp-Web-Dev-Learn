import React from 'react'
import { AppContext } from '../context/AppContext'
import { useContext } from 'react'

const Pagination = () => {

  const {page , handlePageChange, totalPages} = useContext(AppContext)

  return (
    <div className='fixed bottom-0 bg-white  border-2 w-full flex justify-center items-center  ' >
      <div className='max-w-[630px] w-11/12 flex justify-between items-center py-2 '>
      <div className='flex gap-x-2'>
      { page>1 &&
          <button className='rounded-md border px-4 py-2'
           onClick={ () => handlePageChange(page-1)} >
            Previous
          </button>
  
        }
        { page<totalPages &&
          <button className='rounded-md border px-4 py-2'
          onClick={ () => handlePageChange(page+1)} >
            Next
          </button>
  
        }

      </div>
        <p className='font-bold text-sm'>
          Page {page} of {totalPages} 
        </p>
      </div>
    </div>
  )
}

export default Pagination