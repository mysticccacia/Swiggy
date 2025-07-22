import React from 'react';


const ScrollButtons = ({ scrollRef }) => {
  const scrollLeft = () => {
    if (scrollRef?.current) {
      scrollRef.current.scrollBy({ left: -500, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef?.current) {
      scrollRef.current.scrollBy({ left: 500, behavior: 'smooth' });
    }
  };

  return (
    <div className=''>
      <button
        onClick={scrollLeft}
        className="bg-gray-400 w-8 m-2 h-8 rounded-full "
      >
        <i className="h-6 w-6 ri-arrow-left-line"></i>
      </button>

      <button
        onClick={scrollRight}
        className="bg-gray-400 w-8 h-8 rounded-full "
      >
        <i className=" h-6 w-6 ri-arrow-right-line"></i>
      </button>
    </div>
  );
};

export default ScrollButtons;
