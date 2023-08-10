import React from 'react'
import { useSearchParams } from 'react-router-dom';

const SideBarItems = ({ item,...props }) => {
 const [searchParams] = useSearchParams();
 const tab = searchParams.get("tab");

  return (
    <ul  {...props}>
      <li className={`${tab===item?'underline':''}`}>{item}</li> 
    </ul>
  );
}

export default SideBarItems