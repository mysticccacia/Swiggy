import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "../Assets/Navbar";
import RecommendedCard from "../Assets/RecommendedCard";

const SearchPage = () => {
  const { id } = useParams();
  const [restData, setRestData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
    const SWIGGY_API_URL = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;

    const fetchRestaurantData = async () => {
      try {
        const response = await fetch(CORS_PROXY + SWIGGY_API_URL);
        const json = await response.json();

        const cards =
          json?.data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards ??
          [];
        const filteredData = cards.filter(
          (item) => item?.card?.card?.itemCards
        );
        setRestData(filteredData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchRestaurantData();
  }, [id]);

  const matchedItems = [];
  const seenNames = new Set();
  restData.forEach((section) => {
    section.card.card.itemCards?.forEach((item) => {
      const dishName = item.card.info.name.toLowerCase();
      if (
        dishName.includes(searchQuery.toLowerCase()) &&
        !seenNames.has(dishName)
      ) {
        seenNames.add(dishName);
        matchedItems.push(item.card.info);
      }
    });
  });

  return (
    <>
      <Navbar />
      <div className="w-[80%] mx-auto mt-[15vh]">
        <div className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-2 w-full mb-6">
          {/* Back Icon */}
          <button onClick={() => window.history.back()}>
            <i className="ri-arrow-left-line text-2xl text-gray-600"></i>
          </button>

          {/* Input Field */}
          <input
            type="text"
            placeholder="Search for dishes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 text-zinc-600  bg-transparent outline-none border-none focus:ring-0"
          />

          {/* Search Icon (Non-clickable visual) */}
          <i className="ri-search-line text-2xl text-gray-600"></i>
        </div>

        {searchQuery && matchedItems.length === 0 && (
          <p className="text-center text-gray-500">No dishes found.</p>
        )}

        {searchQuery.trim().length > 1 ? (
          matchedItems.length > 0 ? (
            matchedItems.map((item, idx) => (
              <RecommendedCard key={idx} data={item} />
            ))
          ) : (
            <p className="text-center text-gray-500">Search here..</p>
          )
        ) : null}
      </div>
    </>
  );
};

export default SearchPage;
