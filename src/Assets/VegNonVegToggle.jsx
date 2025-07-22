
import React from 'react';
const VegNonVegToggle = ({ selected, setSelected }) => {
  

  return (
    <div className="flex space-x-4    w-fit">

        <button
        className={`px-8 py-1 rounded-full font-semibold transition duration-200 
          ${selected === 'all' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border border-blue-500'}`}
        onClick={() => setSelected('all')}
      >
        All
      </button>
      <button
        className={`px-8 py-1 rounded-full font-semibold transition duration-200 
          ${selected === 'veg' ? 'bg-green-500 text-white' : 'bg-white text-green-500 border border-green-500'}`}
        onClick={() => setSelected('veg')}
      >
        Veg
      </button>

      <button
        className={`px-6 py-1 rounded-full font-semibold transition duration-200 
          ${selected === 'nonveg' ? 'bg-red-500 text-white' : 'bg-white text-red-500 border border-red-500'}`}
        onClick={() => setSelected('nonveg')}
      >
        Non-Veg
      </button>
    </div>
  );
};

export default VegNonVegToggle;
