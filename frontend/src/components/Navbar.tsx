import React from 'react'
import { assets } from '../assets/assets.ts'

const Navbar = () => {
  return (
    <div>
        <img src={assets.logo} alt="logo" className='w-36'/>
    </div>
  )
}

export default Navbar