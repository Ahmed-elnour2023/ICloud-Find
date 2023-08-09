import React from 'react'
import vid from '../assets/vid.mp4'

const Vedio = () => {
  return (
    <div className='flex justify-center items-center'>
     <video  autoplay loop muted width="50%" >
      <source autoplay src={vid} type="video/mp4" />
    </video>
    </div>
  )
}

export default Vedio
