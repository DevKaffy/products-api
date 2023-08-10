import React, { useState } from 'react'
import RightBarItems from './RightBarItems'

const RightBar = () => {
    const [activeTab, setactiveTab] = useState(0);

    const rightItems = ['Relevance', 'Trending', 'Latest arrivals', 'Price: Low to high', 'Price: High to low']
  return (
    <div>
      <p className="mb-4 text-[#737373]">Sort by</p>
      <div className="flex flex-wrap lg:flex-col gap-2">
        {rightItems.map((rightItem, index) => (
          <div key={index} onClick={() => setactiveTab(index)}>
            <RightBarItems activeTab={activeTab==index} rightItem={rightItem} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RightBar