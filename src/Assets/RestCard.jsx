import React from "react";
import { Link } from "react-router-dom"; // ✅ Use react-router-dom instead of 'react-router'

const RestCard = ({ restInfo }) => {
  const {
    id,
    name,
    cloudinaryImageId,
    aggregatedDiscountInfoV3,
    avgRating,
    sla,
    cuisines,
  } = restInfo?.info || {};

  const imageURL = `https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`;
  const offerText = `${aggregatedDiscountInfoV3?.header || ""} ${aggregatedDiscountInfoV3?.subHeader || ""}`;

  return (
    <Link to={`/city/delhi/${id}`} className="block max-w-[280px] mb-2 transform transition duration-200 hover:scale-95">
      <div className="relative w-full">
        {/* Image with shadow overlay */}
        <img
          src={imageURL}
          alt={name || "Restaurant"}
          className="w-70 h-45 object-cover rounded-xl"
        />

        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/60 to-transparent rounded-b-xl" />
        
        {/* Discount Offer */}
        {offerText && (
          <span className="absolute bottom-3 left-3 text-white font-bold text-2xl w-60 truncate z-10">
            {offerText}
          </span>
        )}
      </div>

      <div className="w-[95%] mx-auto mt-3">
        <h2 className="font-bold text-xl truncate">{name}</h2>

        <div className="flex items-center gap-2 mt-1 text-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle cx="12.0002" cy="12" r="10.8" fill="#1BA672" />
            <path
              d="M12.0977 15.438C12.0373 15.4024 11.9623 15.4024 11.9019 15.438L8.77957 17.2761C8.32159 17.5457 7.76507 17.1308 7.89275 16.6149L8.73063 13.2294C8.74846 13.1573 8.72339 13.0814 8.66614 13.0341L5.94605 10.7883C5.5298 10.4447 5.74364 9.76902 6.28183 9.72744L9.88118 9.44931C9.95264 9.44379 10.0152 9.39914 10.0435 9.33333L11.4489 6.07662C11.6574 5.59359 12.3423 5.59359 12.5507 6.07662L13.9561 9.33333C13.9845 9.39914 14.047 9.44379 14.1184 9.44931L17.7178 9.72744C18.256 9.76902 18.4698 10.4447 18.0536 10.7883L15.3335 13.0341C15.2762 13.0814 15.2512 13.1573 15.269 13.2294L16.1069 16.6149C16.2345 17.1308 15.678 17.5457 15.22 17.2761L12.0977 15.438Z"
              fill="white"
            />
          </svg>
          <span>{avgRating}</span>
          <span className="font-semibold text-gray-700">· {sla?.slaString}</span>
        </div>

        {/* Cuisine */}
        <p className="text-gray-600 text-lg truncate">
          {cuisines?.join(", ")}
        </p>
      </div>
    </Link>
  );
};

export default RestCard;
