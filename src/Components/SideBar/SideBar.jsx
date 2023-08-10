import React from 'react'
import SideBarItems from './SideBarItems'
import { useNavigate } from 'react-router-dom'

const items = ['All', 'Men\'s clothing', 
'Women\'s clothing', 'Jewelery', 'Electronics']
const SideBar = () => {

  const navigate=useNavigate()

  return (
    <div className='mb-8'>
      <div className="mb-4 text-[#737373]">Collections</div>
      <div className="flex flex-wrap lg:flex-col gap-2">
        {items.map((item, index) => (
          <SideBarItems  onClick={()=>navigate(`?tab=${item}`)} key={`items- ${index}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export default SideBar