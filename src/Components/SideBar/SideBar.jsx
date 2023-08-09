import React from 'react'
import SideBarItems from './SideBarItems'

const items = ['All', 'Men\'s clothing', 
'Women\'s clothing', 'Jewelery', 'Electronics']
const SideBar = () => {
  return (
    <div>
      <div className="mb-4 text-[#737373]">Collections</div>
      <div className="flex flex-col gap-2">
        {items.map((item, index) => (
          <SideBarItems key={`items- ${index}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export default SideBar