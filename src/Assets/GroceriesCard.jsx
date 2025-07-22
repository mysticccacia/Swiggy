import React from 'react'

const GroceriesCard = ({data}) => {
  return (
    <div className='min-w-[200px] h-full flex-col flex items-center justify-center  rounded-xl'>
        <a className='flex-col flex items-center justify-center h-full w-full' href={data.action.link}>
            <img className='h-[25vh] mb-3' src={"https://media-assets.swiggy.com/swiggy/image/upload/" + data.imageId} alt="" />
            <div className='h-[20%]'>
               <h1 className=' w-fit  text-center text-wrap  text-xl font-bold'>{data.action.text}</h1>
            </div>
           
        </a>
        
        
    </div>
  )
}

export default GroceriesCard