import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="border-t mt-8 p-8 flex gap-20">
      <Link to="/">
        <div className="flex gap-4 items-center">
          <div className="bg-[white] h-10 w-10 rounded-[10px] flex align-center justify-center shadow-md">
            <img src="/acme.svg" alt="" className="w-4 h-4 self-center" />
          </div>
          <h2 className="font-bold">ACME STORE</h2>
        </div>
      </Link>
      <div className="flex flex-col gap-8 text-[#737373] text-xl">
        <div>Home</div>
        <div>About</div>
        <div>Terms & Conditions</div>
        <div>Shipping & Return Policy</div>
        <div>Privacy Poilicy</div>
        <div>FAQ</div>
      </div>
    </div>
  );
}

export default Footer