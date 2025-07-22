import React from 'react'

const ItemCard = ({data}) => {
  
  return (
    <div className='min-w-[230px] h-[200px]  flex items-center justify-center rounded-xl'>
        <a href={data.action.link}>
            <img className='h-[25vh]' src={"https://media-assets.swiggy.com/swiggy/image/upload/" + data.imageId} alt="" />
        </a>
        
        
    </div>
  )
}

export default ItemCard

// https://media-assets.swiggy.com/swiggy/image/upload/PC_Mweb/North%20Indian.png

// https://media-assets.swiggy.com/swiggy/image/upload/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/05a939eb-fd4e-4308-b989-d1c54f4421b3_northindian1.png
