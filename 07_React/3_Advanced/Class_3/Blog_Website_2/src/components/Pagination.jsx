import React from 'react'
import { AppContext } from '../context/AppContext'
import { useContext } from 'react'

const Pagination = () => {

  const {page , handlePageChange, totalPages} = useContext(AppContext)

  return (
    <div className='fixed bottom-0  border-2 w-full flex justify-center items-center bg-violet-100 ' >
      <div className='max-w-[630px] w-11/12 flex justify-between items-center py-2 '>
      <div className='flex gap-x-2'>
      { page>1 &&
          <button className='rounded-md border px-4 py-2 border-slate-400 shadow-md'
           onClick={ () => handlePageChange(page-1)} >
            Previous
          </button>
  
        }
        { page<totalPages &&
          <button className='rounded-md border border-slate-400 shadow-md px-4 py-2'
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