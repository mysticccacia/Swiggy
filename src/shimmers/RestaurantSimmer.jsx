import React from 'react';


const SkeletonCard = () => (
  <div className="skeleton h-[250px] w-[250px] rounded-xl shimmer-bg" />
);

const RestaurantSimmer = () => {
  return (
    <div className="h-screen w-screen overflow-x-hidden bg-white">
      {/* Navbar shimmer */}
      <div className="skeleton h-[10vh] w-full shimmer-bg mb-4" />

      {/* Choice section shimmer */}
      <div className="container mx-auto w-[80%]">
        <div className="flex w-full justify-evenly gap-5 items-center mt-10">
          {[...Array(5)].map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>

        {/* Restaurant grid shimmer */}
        <div className="flex flex-wrap w-full items-center gap-5 justify-evenly mt-10">
          {[...Array(15)].map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantSimmer;
