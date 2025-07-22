// src/redux/slices/restaurantSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
const SWIGGY_API = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true";

export const fetchRestaurants = createAsyncThunk(
  'restaurant/fetchRestaurants',
  async () => {
    const response = await fetch(CORS_PROXY + SWIGGY_API);
    if (!response.ok) throw new Error("Failed to fetch restaurant data");
    const data = await response.json();
    return {
      restaurants: data?.data?.cards?.[1]?.card?.card || [],
      choices: data?.data?.cards?.[0]?.card?.card || [],
    };
  }
);

const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: {
    restaurants: [],
    choices: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurants.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRestaurants.fulfilled, (state, action) => {
        state.restaurants = action.payload.restaurants;
        state.choices = action.payload.choices;
        state.loading = false;
      })
      .addCase(fetchRestaurants.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default restaurantSlice.reducer;
