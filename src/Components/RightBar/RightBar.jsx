import React from 'react'
import RightBarItems from './RightBarItems'

const RightBar = () => {
    const rightItems = ['Relevance', 'Trending', 'Latest arrivals', 'Price: Low to high', 'Price: High to low']
  return (
    <div>
      <p className="mb-4 text-[#737373]">Sort by</p>
      <div className="flex flex-col gap-2">
        {rightItems.map((rightItem, index) => (
          <RightBarItems key={`sort - ${index}`} rightItem={rightItem} />
        ))}
      </div>
    </div>
  );
}

export default RightBar