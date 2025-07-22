import React, { useState } from 'react';
import RecommendedCard from '../Assets/RecommendedCard';

const RecommendedData = ({ restdata, selectedType }) => {
  const [isOpen, setIsOpen] = useState(true);

  // Skip invalid or top picks section
  if (!restdata?.title || restdata.title === "Top Picks") return null;

  // Recursive render for nested categories
  if (restdata.categories) {
    return (
      <div className="container mt-[5%] w-full">
        <h1 className="text-2xl  bg-zinc-200  py-1 font-bold">{restdata.title}</h1>
        {restdata.categories.map((item) => (
          <RecommendedData
            key={item.title}
            restdata={item}
            selectedType={selectedType}
          />
        ))}
      </div>
    );
  }

  // ✅ Filter items based on selectedType
  const filteredItems = restdata.itemCards?.filter((item) => {
    const isVeg = item?.card?.info?.isVeg;
    if (selectedType === 'veg') return isVeg === 1;
    if (selectedType === 'nonveg') return isVeg !== 1;
    return true; // 'all'
  }) || [];

  // Optionally hide if no items match filter
  if (filteredItems.length === 0) return null;

  return (
    <div className="w-full mt-2">
      {/* Section Heading */}
      <div className="flex justify-between  mt-10  items-center">
        <h1 className="text-2xl font-semibold">
          {restdata.title} ({filteredItems.length})
        </h1>
        <span
          className="text-2xl font-bold cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <i className="ri-arrow-up-s-line"></i>
          ) : (
            <i className="ri-arrow-down-s-line"></i>
          )}
        </span>
      </div>
      

      {/* Filtered Items */}
      {isOpen && (
        <>
        <div>
          {filteredItems.map((item) => (
            <RecommendedCard key={item?.card?.info?.id} data={item?.card?.info} />
          ))}
        </div>
        
        </>
      )}
    </div>
  );
};

export default RecommendedData;
