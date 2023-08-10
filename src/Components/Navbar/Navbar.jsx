import React from 'react'
import './Navbar.css'
import All from '../All/All'
import StatusBar from '../StatusBar/StatusBar'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="nav-bar">
      <Link to='/'>
      <div className="flex gap-4 items-center">
        <div className="bg-[white] h-10 w-10 rounded-[10px] flex align-center justify-center m-4 shadow-md">
          <img src="/acme.svg" alt="" className="w-4 h-4 self-center" />
        </div>
        <h2 className="font-bold">ACME STORE</h2>
      </div>
      </Link>
      <div className="flex items-center gap-4 text-[#737373]">
        <All />
        <div>Shirts</div>
        <div>Stickers</div>
      </div>
      <StatusBar />
      <div className="border-[#737373] border-1 h-10 w-10 rounded-[5px] flex align-center justify-center m-4 shadow-md">
        <img src="/cart.svg" alt="" className="w-5 h-5 self-center" />
      </div>
    </div>
  );
}

export default Navbar