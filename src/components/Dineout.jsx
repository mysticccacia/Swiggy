import React, { useRef } from 'react'
import DineoutCard from '../Assets/DineoutCard'
import  dineoutRestaurants  from '../Utils/DineData'
import ScrollButtons from '../Assets/ScrollButtons';
const Dineout = () => {
      const scrollRef = useRef(null);
  return (
    <div className='min-h-screen w-full px-[10%] py-5'>
        <div className='flex items-center justify-between'>
            <h1 className='text-3xl my-10 leading-none tracking-tight font-bold'>Discover best restaurant on Dineout</h1>
            <ScrollButtons scrollRef={scrollRef}/>
        </div>
        <div  ref={scrollRef} className='flex mb-4 items-center gap-5 justify-evenly  overflow-x-scroll no-scrollbar'>
            {
                dineoutRestaurants.map((item)=>{
                    return <DineoutCard key={item.info.id} data ={item}/>
                })
            }
        </div>
    </div>
  )
}

export default Dineout