import React from 'react'
import banner from "../assets/avengers.jpg"
function Banner() {
    return (
        <div className='h-[50vh] md:h-[90vh] bg-cover bg-center flex items-end' style={{ backgroundImage: `url(${banner})` }}>
            <div className='text-white text-xl text-center w-full bg-gray-900/60 p-2'>Avengers Endgame</div>
        </div>
    )
}

export default Banner