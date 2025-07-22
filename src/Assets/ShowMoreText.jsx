import React, { useState } from 'react';

const ShowMoreText = ({ text = '', maxLength = 150 }) => {
  const [showMore, setShowMore] = useState(false);

  if (!text) return null; // or return <p>Loading...</p>;

  const toggleText = () => setShowMore(!showMore);

  if (text.length <= maxLength) return <p>{text}</p>;

  return (
    <div className="text-gray-700 text-base leading-relaxed">
      {showMore ? text : `${text.slice(0, maxLength)}...`}
      <button
        onClick={toggleText}
        className="text-zinc-900 font-medium ml-2 hover:font-semibold"
      >
        {showMore ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
};

export default ShowMoreText;
