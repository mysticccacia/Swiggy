import React, { useRef } from 'react'
import ImageGridCards from "../Utils/ImageGridCards";
import GroceriesCard from '../Assets/GroceriesCard';
import ScrollButtons from '../Assets/ScrollButtons';

const GroceriesMenu = () => {
    const scrollRef = useRef(null);
    
  return (
    <div className='w-full max-h-[80vh] px-[10%]  '>
        <div className='flex items-center justify-between'>
            <h1 className='text-3xl my-5 leading-none tracking-tight font-bold'>
            Shop groceries on Instamart
            </h1>
            <ScrollButtons scrollRef={scrollRef}/>
        </div>
        <div ref={scrollRef} className='w-full overflow-x-scroll  h-[40vh]  no-scrollbar flex items-center  scroll-smooth'>
            {
                ImageGridCards.map((item)=>{
                    return <GroceriesCard key ={item.key}  data = {item}/>
                })
            }
        </div>

    </div>
  )
}

export default GroceriesMenu