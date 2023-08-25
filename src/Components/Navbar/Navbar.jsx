import React from 'react'
import './Navbar.css'
import StatusBar from '../StatusBar/StatusBar'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="nav-bar">
      <div class='flex gap-12'>
      <Link to='/'>
      <div className="flex gap-4 items-center mb-8 lg:mb-0">
        <div className="bg-[white] h-12 w-12 rounded-[10px] flex align-center justify-center border-2">
          <img src="/acme.svg" alt="" className="w-4 h-4 self-center" />
        </div>
        <h2 className="font-bold">ACME STORE</h2>
      </div>
      </Link>
      <div className="flex items-center gap-4 text-[#737373] mb-8 lg:mb-0">
        <div>All</div>
        <div>Shirts</div>
        <div>Stickers</div>
      </div>
      </div>
      <div class='flex items-center gap-x-[25rem]'>
      <StatusBar />
      <div className="border-2 h-12 w-12 rounded-[5px] flex align-center justify-center lg:m-4 mb-8">
        <img src="/cart.svg" alt="" className="w-5 h-5 self-center" />
      </div>
      </div>
    </div>
  );
}

export default Navbar