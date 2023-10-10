import React from 'react'

const Screen2 = () => {
  return (
    <div>
        <div className='grid grid-cols-2 grid-rows-2 grid-flow-col gap-y-10 ml-10'>
        <div className='flex'>
            <div className='flex gap-10'>
            <div className='flex flex-col gap-y-2'>
                <span className='text-2xl font-semibold'>Opimal Route Planning</span>
                <span className='text-gray-500 text-xl'>Our AI algorithms analyze your preferences to craft the most efficient route, saving you time and effort.</span>
            </div>
            </div>
        </div>

        <div className='flex'>
        <div className='flex gap-10'>

            <div className='flex flex-col gap-y-2'>
                <span className='text-2xl font-semibold'>Personalize Your Adventure</span>
                <span className='text-gray-500 text-xl'>Shape your journey by freely adding, editing, or deleting activities from your itinerary.</span>
            </div>
            </div>
        </div>

        <div className='flex'>
        <div className='flex gap-10'>

            <div className='flex flex-col gap-y-2'>
                <span className='text-2xl font-semibold'>Travel Reel Insights</span>
                <span className='text-gray-500 text-xl'>Utilize social media's potential by gathering travel insights from Instagram reels and integrate them into your itinerary.</span>
            </div>
            </div>
        </div>

        <div className='flex'>
        <div className='flex gap-10'>

            <div className='flex flex-col gap-y-2'>
                <span className='text-2xl font-semibold'>Local Cuisine Recommendations</span>
                <span className='text-gray-500 text-xl'>Discover local cuisines and hidden gems recommended by our AI, tailored to your taste buds.</span>
            </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Screen2