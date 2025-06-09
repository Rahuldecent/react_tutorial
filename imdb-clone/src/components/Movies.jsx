import React, { useEffect, useState } from 'react'
import Moviecard from './Moviecard'
import axios from 'axios'
import Pagination from './Pagination'

function Movies({ handleAddToWatchlist, watchlist, handleRemoveFromWatchlist }) {
  const [movies, setMovies] = useState([])
  const [pageNo, setPageNo] = useState(1)
  const handlePrevious = () => {
    if (pageNo > 1) {
      setPageNo(pageNo - 1);
    }
  };

  const handleNext = () => {

    setPageNo(pageNo + 1);
    console.log(pageNo, "handlenext");

  };
  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${pageNo}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTdmYTkxZWM0NGY4MTk5OWFjMjYxZjQ5ZTc5MmY5MiIsIm5iZiI6MTc0ODI2MzE0OS4wMzEwMDAxLCJzdWIiOiI2ODM0NjBlZGViNGQ2YThjZjMwMzc0YjgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.2Gptj-gkljt0ZiYlWVowPZ_R9ThKLeJvnOsMtTU-lbw'
      }
    };

    fetch(url, options)
      .then(res => res.json())
      .then(json => {
        setMovies(json.results)
        console.log(json.results);
      }
      )
      .catch(err => console.error(err));
  }, [pageNo])
  return (
    <div>
      <div className='text-2xl text-center font-bold m-3'>
        Trending Movies
      </div>
      <div className='flex flex-wrap justify-around'>
        {movies.map((movie) => (
          <Moviecard key={movie.id} movie={movie} poster_path={movie.poster_path} title={movie.title} handleAddToWatchlist={handleAddToWatchlist} watchlist={watchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} />
        ))}
      </div>

      <div>
        <Pagination pageNo={pageNo} handlePrevious={handlePrevious} handleNext={handleNext} />
      </div>
    </div>
  )
}

export default Movies