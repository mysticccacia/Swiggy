import React from 'react'
import CountButton from '../Assets/CountButton'

const TopPicks = ({data}) => {
  return (
    <div className='max-h-[50vh] min-w-[300px] relative'>
        <div className=''>
            <img className='w-[300px] h-full' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/" + data?.creativeId} alt="" />
        </div>
        <div className='flex w-full justify-between items-center bottom-5 px-5  text-zinc-100 font-bold text-2xl absolute z-90 '>
            <span>₹{data?.dish?.info?.price/100 || data?.dish?.info?.defaultPrice/100}</span>
           {/* <CountButton data = {data}/> */}
        </div>
    </div>
  )
}

export default TopPicks

// https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/