import React from 'react'

const Footer = () => {
  return (
    <div className='absolute bottom-0 bg-white h-16 w-full'>
      <div className='flex sm:flex-row flex-col gap-3  justify-around items-center pt-3'>
            <div className='flex justify-center items-center gap-2 sm:text-sm text-xs text-slate-500'>
              <p>System Status</p>
              |
              <p>Privacy Policy</p>
              |
              <p>Terms & Conditions</p>
            </div>

            <div className='flex justify-center items-center gap-2 text-xs sm:text-sm text-slate-500'>
              <p>Copyright © 2023 Apple Inc. All rights reserved.</p>
            </div>
      </div>
    </div>
  )
}

export default Footer
