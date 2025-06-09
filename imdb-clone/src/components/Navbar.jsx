import React from 'react'
import logo from "../assets/images.png"
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='flex border space-x-5 items-center pl-2 py-3'>

      <img className='w-[40px]' src={logo} alt="logo" />

      <Link to="/" className='text-blue-600 text-2xl font-semibold'>Movies</Link>
      <Link to="/watchlist" className='text-blue-600 text-2xl font-semibold' >Watchlist</Link>
    </div>
  )
}

export default Navbar