import React from 'react'
import logo from '../assets/logo.svg'
import dots from '../assets/dots.png'
import { useNavigate } from 'react-router-dom'
const Header = () => {
  const navigate = useNavigate()
  return (
    <div className=' px-5 pt-3 bg-slate-50 flex items-center justify-between '>
      <div onClick={()=>navigate('/')} className='flex items-center cursor-pointer'>
      <img src={logo} className='w-8'/>
      <p className=''>iCloud</p>
      </div>
      <div>
        <img src={dots} className='w-5 cursor-pointer hover:border-3	'/>
      </div>
      
    </div>
  )
}

export default Header
