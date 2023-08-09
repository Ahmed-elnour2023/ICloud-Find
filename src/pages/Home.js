import React from 'react'
import fd from '../assets/find.png'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate()
  return (
    <div className='container mx-auto  mt-12 flex flex-col items-center justify-center text-center '>
        <div className=''>
            <img className='w-24' src={fd} />
        </div>
        <p className='text-6xl mt-5 '>Find Devices</p>
        <button onClick={()=> navigate('/find')} className='bg-black text-white p-2 px-3 rounded-2xl mt-5'>Sign In</button>
        <div className='mt-5 container'>
            <p className='text-slate-500 text-xl sm:text-2xl text-center md:w-74'>Find your iPhone, iPad, Mac, Apple Watch, AirPods or Beats. Or help locate Family Sharing devices.</p>
        </div>
        <p className='text-blue-400 mt-5 cursor-pointer' >Learn more about Find Devices</p>
    </div>
  )
}

export default Home
