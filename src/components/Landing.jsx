import React from 'react'
import { Link } from 'react-router';

const Landing = () => {
  return (
    <div className="w-screen relative min-h-screen bg-[#FF5200] px-[10vw]  text-white ">
        <div className="flex items-center justify-between pt-[4vw] w-full h-[10vh]">
            <div className="">
                <img className='h-[7vh]' src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png" alt="" />
            </div>
            <div className='flex item-center w-[60%] gap-2 items-center justify-between'>
                <a className='text-lg font-bold' href="">Swiggy Corporate</a>
                <a className='text-lg font-bold' href="">Partner with us</a>
                <div className='flex text-lg font-semibold border rounded-2xl border-white py-3 px-5'><p>Get the App</p><i className="ml-1 text-xl ri-arrow-right-up-line"></i> </div>
                <button className='bg-black border-none text-xl font-bold py-3 px-10 rounded-2xl'>Sign in</button>
            </div>
        </div>

        {/* heading */}
        <div className='w-full mt-10 h-[40vh] flex flex-col items-center justify-center'>
          <h1 className='text-5xl font-bold'>Order food & groceries. Discover
             </h1>
             <h1 className='text-5xl font-bold'>best restaurants. Swiggy it!</h1>
        </div>

        <div className='w-full'>

            <div className='flex items-center justify-evenly'>
              <Link to="/restaurant" >
               <img className='h-[55vh] w-full' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" alt="" />
              </Link>
              <Link>
               <img className='h-[55vh]' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png" alt="" /></Link>
             
              <Link>
              <img className='h-[55vh]' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png" alt="" />
              </Link>
            </div>
        </div>
        <img className='absolute h-[60%] top-20 left-0' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" alt="" />
        <img className='absolute h-[60%] top-20 right-0' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" alt="" />
    </div>
  )
}

export default Landing;