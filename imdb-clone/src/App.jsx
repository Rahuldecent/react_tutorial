import Banner from "./components/Banner"
import Movies from "./components/Movies"
import Navbar from "./components/Navbar"
import WatchList from "./components/WatchList"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<> <Banner /> <Movies /></>} />
          <Route path="/watchlist" element={<WatchList />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
