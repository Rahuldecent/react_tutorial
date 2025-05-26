import React from 'react'
import Moviecard from './Moviecard'

function Movies() {
  return (
    <div>
      <div className='text-2xl text-center font-bold m-3'>
        Trending Movies
      </div>
      <div className='flex flex-wrap justify-around'>
        <Moviecard/>
        <Moviecard/>
        <Moviecard/>
        <Moviecard/>
        <Moviecard/>
      </div>
    </div>
  )
}

export default Movies