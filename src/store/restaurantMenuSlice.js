// src/redux/slices/restaurantMenuSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

export const fetchRestaurantMenu = createAsyncThunk(
  "restaurantMenu/fetchRestaurantMenu",
  async (id, thunkAPI) => {
    try {
      const apiUrl = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
      const response = await fetch(CORS_PROXY + apiUrl);
      if (!response.ok) throw new Error("Failed to fetch restaurant menu");

      const json = await response.json();
      const cards = json?.data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards ?? [];
      const filteredData = cards.filter(item => item?.card?.card?.title);
      return { id, data: filteredData };
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const restaurantMenuSlice = createSlice({
  name: "restaurantMenu",
  initialState: {
    dataById: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchRestaurantMenu.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRestaurantMenu.fulfilled, (state, action) => {
        const { id, data } = action.payload;
        state.dataById[id] = data;
        state.loading = false;
      })
      .addCase(fetchRestaurantMenu.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default restaurantMenuSlice.reducer;
