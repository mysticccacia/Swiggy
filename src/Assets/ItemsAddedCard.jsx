import React from "react";
import CountButton from "./CountButton";



const ItemsAddedCard = ({ item }) => {
  return (
    <div className="flex h-[30vh] w-full mb-5 border-b-1">
      <div className="w-[70%] mb-2 h-full">
        {/* heading */}
        <h1 className="text-xl mb-2 font-semibold text-zinc-600">
          {item?.name}
        </h1>
        <h1 className="text-lg mb-2 font-semibold text-zinc-600">
          {item?.category}
        </h1>

        {/* price */}
        <p className="font-semibold mb-2">
          ₹{item?.price / 100 || item?.defaultPrice / 100}
        </p>
        <p className="font-semibold mb-2">
          {item?.itemAttribute?.vegClassifier === "VEG" ? (
            
              <span className="w-4 h-4 inline-block border border-green-700 rounded-sm">
                <span className="block w-2 h-2 bg-green-700 rounded-full mx-auto mt-[3px]"></span>
              </span>
              
            
          ) : (
            
              <span className="w-4 h-4 inline-block border border-red-700 rounded-sm">
                <span className="block w-2 h-2 bg-red-700 rounded-full mx-auto mt-[3px]"></span>
              </span>
            
          )}
        </p>
      </div>
      <div className="w-[30%]  flex flex-col relative justify-items-start items-end">
        <div className="">
          <img
            className="w-[200px] h-[200px] rounded-2xl relative"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/" +
              item?.imageId
            }
            alt=""
          />
        </div>

        <div className="">
          <CountButton data={item} />
        </div>
      </div>
    </div>
  );
};

export default ItemsAddedCard;
