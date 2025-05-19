import React from 'react'
import banner from "../assets/avengersd.jpg"
function Banner() {
    return (
        <div className='h-[20vh] md:h[70vh]' style={{ backgroundImage: `url(${banner})` }}>Banner</div>
    )
}

export default Banner