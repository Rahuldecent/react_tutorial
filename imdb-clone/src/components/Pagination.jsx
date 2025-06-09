import React from 'react'

function Pagination({pageNo,handlePrevious, handleNext}) {
  return (
    <div className='bg-gray-300 p-3 mt-8 flex justify-center'>
      <div className='px-5' onClick={handlePrevious}>
        <i class="fa-solid fa-arrow-left"></i>
      </div>
      <div className='font-bold'>
        {pageNo}
      </div>
      <div className='px-5' onClick={handleNext}>
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  )
}

export default Pagination