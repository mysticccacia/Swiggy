import React from 'react'
import Home from './components/Home'
import { BrowserRouter,  Route,  Routes } from 'react-router'
import Restaurant from './components/Restaurant'
import RestaurantData from './components/RestaurantData'
import SearchPage from './components/SearchPage'
import Checkout from './components/Checkout'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/restaurant" element={<Restaurant/>}/>
        <Route path="/city/delhi/:id" element={<RestaurantData/>}/>
        <Route path="/city/delhi/:id/search" element={<SearchPage/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

// https://cors-anywhere.herokuapp.com/corsdemo