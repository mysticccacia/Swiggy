import React from 'react'
import ShowMoreText from './ShowMoreText'
import CountButton from './CountButton'

const RecommendedCard = ({data}) => {


    const longText = data?.description
  return (
    <>
    <div className='w-full mx-auto container flex items-center justify-between h-fit pb-5  my-1 border-b-[1px] border-zinc-300 '>
        <div className='w-[70%] mb-2 h-full'>
            {/* heading */}
            <h1 className='text-xl mb-2 font-semibold text-zinc-600'>{data?.name}</h1>
            {/* price */}
            <p className='font-semibold mb-2'>₹{data?.price/100 || data?.defaultPrice/100}</p>
            {/* rating */}
            <p className='flex gap-1 mb-2'>
                {
                data.ratings?.aggregatedRating?.rating &&
                <>
                <i className="text-green-800 ri-star-fill"></i>
                <span>{data.ratings?.aggregatedRating?.rating} ({data.ratings?.aggregatedRating?.ratingCountV2})</span>
                </>
                }
                
            </p>
            {/* details */}
            <ShowMoreText text={longText} />
        </div>

        {/* right side contains image and add button */}
        <div className='w-[30%]  flex flex-col relative justify-items-start items-end'>
            <div className=''>
                <img className='w-[200px] h-[200px] rounded-2xl relative' src={"https://media-assets.swiggy.com/swiggy/image/upload/" + data?.imageId} alt="" />
            </div>
            
            <div>
                <CountButton data = {data}/>
            </div>
            
        </div>

    </div>
    
    </>
  )
}

export default RecommendedCard