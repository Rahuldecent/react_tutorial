import React from 'react'

function Moviecard({ poster_path, title, overview, handleAddToWatchlist, movie, watchlist, handleRemoveFromWatchlist }) {


 function doesContain(movie) {
  for (let i = 0; i < watchlist.length; i++) {
    if (watchlist[i].id === movie.id) return true;
  }
  return false;
}
  return (


    <div className='h-[55vh] w-[200px] bg-center bg-cover rounded-xl hover:cursor-pointer hover:scale-110 duration-300 p-3 m-5' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${poster_path})` }}>
      {/* <div className='bg-gray-900/60 text-white p-2 rounded-lg h-full flex flex-col justify-between'> */}
      {/* </div> */}
      <div className='flex flex-col justify-between h-full'>

        {doesContain(movie) ?
          <div onClick={() => handleRemoveFromWatchlist(movie)} className='flex justify-end'>&#10060;</div> :
          <div onClick={() => handleAddToWatchlist(movie)} className='flex justify-end'>
            &#128525;
          </div>
        }


        <div className='w-full p-2 text-center bg-gray-900/60 text-xl'>
          {title
            ? <div className='text-white text-lg font-bold'>{title}</div>
            : <div className='text-white text-lg font-bold'>No Title</div>
          }
        </div>
      </div>
    </div>
  )
}

export default Moviecard