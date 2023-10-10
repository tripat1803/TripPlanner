import React from 'react'
import Layout from '../components/Trip/Layout'

export default function Meals() {
  return (
    <Layout>
        <div className='flex flex-col gap-3'>
            <h1 className='text-4xl'>Meals preference</h1>
            <p className='text-[#999999]'>Select the meals you would like to include in your trip, your budget for it and the type of food you prefer.</p>
        </div>

    </Layout>
  )
}

