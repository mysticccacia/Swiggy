import React from 'react'
import RestCard from '../Assets/RestCard'


const TopRestaurant = ({Restdata}) => {
  return (
    <div>
        
         <h1 className="text-3xl my-10 leading-none tracking-tight font-bold">
            Restaurants with online food delivery in Delhi
          </h1>
        
          <div className="flex flex-wrap   gap-5">
            {Restdata?.gridElements?.infoWithStyle?.restaurants.map(
              (restInfo) => (
                <RestCard
                  key={restInfo?.info?.id}
                  restInfo={restInfo}
                ></RestCard>
              )
            )}
          </div>
    </div>
  )
}

export default TopRestaurant