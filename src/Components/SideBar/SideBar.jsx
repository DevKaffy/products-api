import React from 'react'
import SideBarItems from './SideBarItems'

const items = ['All', 'Men\'s clothing', 
'Women\'s clothing', 'Jewelery', 'Electronics']
const SideBar = () => {
  return (
<div>
    {
        items.map((item)=> (
            <SideBarItems
            all = {item.items[0]}
            men = {item.items[1]}
            women = {item.items[2]}
            jewelry = {item.items[3]}
            electronics = {item.items[4]}
            />
            
        ))
    }
</div>
  )
}

export default SideBar