import React from 'react'

const SideBarItems = ({all, men, women, jewelry, electronics }) => {
  return (
    <div className='bg-[red] w-[30rem] h-[30rem]'>
      <li>{all}</li>
      <li>{men}</li>
      <li>{women}</li>
      <li>{jewelry}</li>
      <li>{electronics}</li>
    </div>
  );
}

export default SideBarItems