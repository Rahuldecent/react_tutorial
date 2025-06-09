import { useEffect, useState } from "react"
import Banner from "./components/Banner"
import Movies from "./components/Movies"
import Navbar from "./components/Navbar"
import WatchList from "./components/WatchList"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
 let [watchlist, setWatchlist] = useState([])

 function handleAddToWatchlist(movieObject) {
   let newWatchlist = [...watchlist, movieObject]
   setWatchlist(newWatchlist)
   localStorage.setItem("MovieApp",JSON.stringify(newWatchlist))
   console.log(newWatchlist," watchlist")
 }
  function handleRemoveFromWatchlist(movieId) {
    console.log(movieId,"movieidddd")
  let newWatchlist = watchlist.filter((movie) => movie.id !== movieId);
  setWatchlist(newWatchlist);
  localStorage.setItem("MovieApp", JSON.stringify(newWatchlist));
}


  useEffect(() => {
    let getMovieFromlocalstorage = localStorage.getItem('MovieApp');
    if(!getMovieFromlocalstorage) return
    else setWatchlist(JSON.parse(getMovieFromlocalstorage))

  },[])
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<> <Banner /> <Movies handleAddToWatchlist = {handleAddToWatchlist}  handleRemoveFromWatchlist = {handleRemoveFromWatchlist} watchlist = {watchlist}/></>} />
          <Route path="/watchlist" element={<WatchList watchlist = {watchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} setWatchlist = {setWatchlist} />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
