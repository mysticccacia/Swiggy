import React, { useEffect } from "react";
import Navbar from "../Assets/Navbar";
import TopRestaurant from "./TopRestaurant";
import WhatChoice from "./WhatChoice";
import RestaurantSimmer from "../shimmers/RestaurantSimmer";
import { fetchRestaurants } from "../store/restaurantSlice";
import { useDispatch, useSelector } from "react-redux";

const Restaurant = () => {
  const dispatch = useDispatch();
  const { restaurants, choices, loading, error } = useSelector((state) => state.restaurant);

  useEffect(() => {
    if (!restaurants.length || !choices.length) {
      dispatch(fetchRestaurants());
    }
  }, [dispatch, restaurants.length, choices.length]);

  if (loading) return <RestaurantSimmer />;
  if (error) return <div className="text-center text-red-600">Error: {error}</div>;

  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <div className="mx-auto w-[80%] mt-[10vh] container">
        <WhatChoice choicedata={choices} />
        <TopRestaurant Restdata={restaurants} />
      </div>
    </div>
  );
};

export default Restaurant;
