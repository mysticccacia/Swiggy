import React, { useRef } from 'react'
import ItemCard from '../Assets/ItemCard'
import ScrollButtons from '../Assets/ScrollButtons';

const WhatChoice = ({choicedata}) => {
    const scrollRef = useRef(null);
  return (
    <div>
           <div className='flex items-center justify-between'>
            <h1 className='text-3xl my-5 leading-none tracking-tight font-bold'>
            What's on your mind?
            </h1>
            <ScrollButtons scrollRef={scrollRef}/>
        </div>

          <div ref={scrollRef}  className="w-full overflow-x-scroll  h-[40vh] no-scrollbar flex items-center  scroll-smooth">
            {choicedata?.imageGridCards?.info?.map(
              (data) => (
                <ItemCard key = {data.id} data = {data}/>
              )
            )}
          </div>
    </div>
  )
}

export default WhatChoice