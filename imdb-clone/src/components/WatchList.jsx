import React, { useEffect, useState } from "react";

function WatchList({ watchlist, handleRemoveFromWatchlist, setWatchlist }) {
  let [allgenre, setAllGenre] = useState([]);
  let [search, setSearch] = useState("");
  let [genre, setGenre] = useState("")

  function handleSearch(e) {
    setSearch(e.target.value);
  }
function getGenreByMovie(watchlist) {
  const updated = watchlist.map((movie) => {
    const genres = allgenre
      .filter((g) => movie.genre_ids.includes(g.id))
      .map((g) => g.name)
      .join(", ");
    return { ...movie, genre: genres };
  });
  setWatchlist(updated);
}

  function sortIncresing() {
    const incresingSortlist = watchlist.sort(
      (movieA, movieB) => movieA.vote_average - movieB.vote_average
    );
    setWatchlist([...incresingSortlist]);
  }

  function sortdesending(ratings) {
    const descSortlist = watchlist.sort(
      (movieA, movieB) => movieB.vote_average - movieA.vote_average
    );
    setWatchlist([...descSortlist]);
  }

  useEffect(() => {
    const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTdmYTkxZWM0NGY4MTk5OWFjMjYxZjQ5ZTc5MmY5MiIsIm5iZiI6MTc0ODI2MzE0OS4wMzEwMDAxLCJzdWIiOiI2ODM0NjBlZGViNGQ2YThjZjMwMzc0YjgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.2Gptj-gkljt0ZiYlWVowPZ_R9ThKLeJvnOsMtTU-lbw",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setAllGenre(json.genres);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (allgenre.length > 0 && watchlist.length > 0) {
      getGenreByMovie(watchlist);
    }
  }, [allgenre, watchlist]);
  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        {allgenre.map((genre) =>{
          return  <div className="bg-blue-400 flex  items-center justify-center h-[2rem] w-[6rem] rounded-xl text-white font-bold mx-4">
          {genre.name}
        </div>
        })}
       
        <div className="bg-gray-400 flex  items-center justify-center h-[2rem] w-[6rem] rounded-xl text-white font-bold">
          Action
        </div>
      </div>
      <div className="flex justify-center my-4">
        <input
          type="text"
          onChange={handleSearch}
          name=""
          id=""
          className="h-[3rem] w-[17rem] bg-gray-200 outline-none px-4"
          placeholder="Search movies"
        />
      </div>
      <div className="border border-gray-300 m-8 overflow-hidden rounded-lg">
        <table className="w-full text-center text-gray-500">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>

              <th className="flex justify-center">
                <div className="p-2" onClick={sortIncresing}>
                  <i class="fa-solid fa-arrow-up"></i>
                </div>
                <div className="p-2">Ratings</div>
                <div className="p-2" onClick={sortdesending}>
                  <i class="fa-solid fa-arrow-down"></i>
                </div>
              </th>

              <th>Popularity</th>
              <th>Genre</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {watchlist
              .filter((movie) => {
                return movie.title.toLowerCase().includes(search.toLowerCase());
              })
              .map((movie) => (
                <tr key={movie.id} className="border-b-2">
                  <td className="flex items-center gap-2 px-1">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt="Movie Poster"
                      className="w-[6rem] h-[8rem] object-cover"
                    />
                    <div>{movie.title}</div>
                  </td>
                  <td>{movie.vote_average}</td>
                  <td>{movie.popularity}</td>
                  <td>{movie.genre || "N/A"}</td>
                  <td
                    className="text-red-800 cursor-pointer"
                    onClick={() => handleRemoveFromWatchlist(movie.id)}
                  >
                    Delete
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
