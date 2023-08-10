import React from 'react'

const StatusBar = () => {
  return (
    <form className="flex items-center justify-between border-2 px-8 py-2 rounded-[10px] lg:w-[30rem] w-full">
      <input
        type="text"
        placeholder="Search for products..."
        className="border-none outline-none bg-transparent"
      />
      <img src="/search.svg" alt="" className="w-6 h-6" />
    </form>
  );
}

export default StatusBar