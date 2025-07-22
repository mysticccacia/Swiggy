import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router';
import RecommendedData from './RecommendedData';
import TopPicks from './TopPicks';
import Navbar from '../Assets/Navbar';
import ScrollButtons from '../Assets/ScrollButtons';
import VegNonVegToggle from '../Assets/VegNonVegToggle';
import RestaurantSimmer from '../shimmers/RestaurantSimmer';
import {fetchRestaurantMenu} from  '../store/restaurantMenuSlice.js'
import { useDispatch, useSelector } from "react-redux";


const RestaurantData = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [selectedType, setSelectedType] = useState('all');
  const scrollRef = useRef(null);

  const { dataById, loading } = useSelector(state => state.restaurantMenu);
  const restData = dataById[id] || [];

  useEffect(() => {
    if (!restData.length) {
      dispatch(fetchRestaurantMenu(id));
    }
  }, [dispatch, id, restData.length]);

  const topPicks = restData[0]?.card?.card;

  if (loading || !restData || !topPicks) {
    return <RestaurantSimmer />;
  }

  return (
    <>
      <Navbar />

      <div className="w-[80%] my-[15vh] mx-auto min-h-screen">
        {/* Top Picks */}
        {topPicks?.carousel && (
          <div className="container mx-auto w-full">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold">{topPicks.title}</h1>
              <ScrollButtons scrollRef={scrollRef} />
            </div>

            <div
              ref={scrollRef}
              className="flex gap-5 w-full overflow-x-auto no-scrollbar"
            >
              {topPicks.carousel.map((item, index) => (
                <TopPicks key={index} data={item} />
              ))}
            </div>
          </div>
        )}

        <Link to={`/city/delhi/${id}/search`}>
          <div className="my-5 cursor-pointer items-center flex">
            <h1 className="bg-zinc-300 py-3 w-[90%] font-semibold rounded-l-md text-xl text-zinc-600 text-center">
              Search for dishes
            </h1>
            <span className="w-[10%] py-3 bg-zinc-300 rounded-r-md text-zinc-600 flex items-center justify-end pr-5">
              <i className="ri-search-line text-xl"></i>
            </span>
          </div>
        </Link>

        {/* Veg/Non-Veg Toggle */}
        <div className="mt-10">
          <VegNonVegToggle selected={selectedType} setSelected={setSelectedType} />
        </div>

        {/* Recommended Sections */}
        <div className="mt-10">
          {restData.map((item, index) => (
            <RecommendedData
              key={index}
              restdata={item?.card?.card}
              selectedType={selectedType}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default RestaurantData;