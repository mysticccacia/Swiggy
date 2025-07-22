import React from "react";

const DineoutCard = ({ data }) => {
  return (
    <div
  className="min-w-[350px] overflow-hidden rounded-2xl mb-4 text-zinc-700 "
  style={{
    boxShadow:
      " rgba(0, 0, 0, 0.16) 0px 1px 4px",
  }}
>
    <a target="_blank" href={data.cta.link}>
      {/* image */}
      <div className="relative  w-full h-52">
        <img
          className="w-full h-full"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            data?.info?.mediaFiles[0]?.url
          }
          alt="Restaurant"
        />
        {/* restuarant name  */}
        <span className="text-2xl z-10 font-bold text-white absolute bottom-3 left-3 w-60 truncate whitespace-nowrap overflow-hidden leading-none tracking-tight">
          {data.info.name}
        </span>
        {/* rating */}
        <div className="text-xl flex items-center gap-1 z-10 font-semibold text-white absolute bottom-3 right-3">

            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12.0002" cy="12" r="10.8" fill="#1BA672"></circle><path d="M12.0977 15.438C12.0373 15.4024 11.9623 15.4024 11.9019 15.438L8.77957 17.2761C8.32159 17.5457 7.76507 17.1308 7.89275 16.6149L8.73063 13.2294C8.74846 13.1573 8.72339 13.0814 8.66614 13.0341L5.94605 10.7883C5.5298 10.4447 5.74364 9.76902 6.28183 9.72744L9.88118 9.44931C9.95264 9.44379 10.0152 9.39914 10.0435 9.33333L11.4489 6.07662C11.6574 5.59359 12.3423 5.59359 12.5507 6.07662L13.9561 9.33333C13.9845 9.39914 14.047 9.44379 14.1184 9.44931L17.7178 9.72744C18.256 9.76902 18.4698 10.4447 18.0536 10.7883L15.3335 13.0341C15.2762 13.0814 15.2512 13.1573 15.269 13.2294L16.1069 16.6149C16.2345 17.1308 15.678 17.5457 15.22 17.2761L12.0977 15.438Z" fill="white"></path></svg>

          <span>{data.info.rating.value}</span>
        </div>
        {/* dark shadow */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/60 to-transparent rounded-b-xl"/>
      </div>
      {/* details */}
      <div className="px-3 pt-2 pb-3">
        {/* food type */}
        <div className="flex justify-between">
          <div className="text-sm">
            {data.info.cuisines.map((item, index) => (
              <span key={index}>
                {item}
                {index < data.info.cuisines.length - 1 && (
                  <span className="mx-1">·</span>
                )}
              </span>
            ))}
          </div>
          <div>
            <span>{data.info.costForTwo}</span>
          </div>
        </div>
        {/* locality and distance */}

        <div className="flex text-sm justify-between">
          <span>{data.info.locationInfo.formattedAddress}</span>
          <span>{data.info.locationInfo.distanceString}</span>
        </div>

        {/* buttons */}
        <div className="flex gap-3 mt-2">
          {data.info.vendorOffer.offerHighlights.map((item) => {
            return (
              <button className="bg-gray-300 flex items-center justify-center rounded-2xl  gap-1 px-3  ">
                <img
                  className="w-[15px]"
                  src={
                    "https://dineout-media-assets.swiggy.com/swiggy/image/upload/" +
                    item.logoCtx.logo
                  }
                  alt=""
                />
                <span className="text-sm py-1">{item.logoCtx.text}</span>
              </button>
            );
          })}
        </div>

        {/* discount */}
        <div className="bg-[#19A672] px-2 py-2 rounded-md mt-2 flex justify-between">
          <div className="flex">
            <img
              className="w-[25px]"
              src={
                "https://dineout-media-assets.swiggy.com/swiggy/image/upload/" +
                data.info.offerInfoV3.offerLogo.logo
              }
              alt=""
            />
            <h1 className="text-white font-bold">
              {data.info.offerInfoV3.vendorOffer.title +
                " " +
                data.info.offerInfoV3.vendorOffer.subtitle}
            </h1>
          </div>
          <p className="text-white font-bold">
            {data.info.offerInfoV3.vendorOffer.subtext}
          </p>
        </div>

        {/* bank offer */}
        <div className="bg-[#C8F9E5] text-[#19A672] px-2 py-2 rounded-md mt-2">
          <h1>{data.info.customerOffer.infos[0].description}</h1>
        </div>
      </div>
      </a>
    </div>
  );
};

export default DineoutCard;
