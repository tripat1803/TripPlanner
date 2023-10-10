import React from 'react';
import Layout from '../components/Trip/Layout';

const neutralsGray04 = "text-[#999999]";

export default function Meals() {
  return (
    <Layout>
        <div className='flex flex-col gap-3'>
            <h1 className='text-4xl'>Meals preference</h1>
            <p className={neutralsGray04}>Select the meals you would like to include in your trip, your budget for it and the type of food you prefer.</p>
        </div>

        <div className='flex flex-col gap-[6px]'>
            <h2>Budget level:</h2>
            <p className={neutralsGray04}>Depending on the budget level, we will select least or more expensive restaurants.</p>
            <input type='range' id='meal-budget'></input>

        </div>

        <div className='flex flex-col gap-3'>
          <h2>Meals to include:</h2>
          <p className={neutralsGray04}>Prices are an estimate of each meal for 8 days per 2 people</p>
          <input type='checkbox' />
          <div className='heading'>
            <h2>Breakfast</h2>
            <p>($2 per meal)</p>
          </div>

        </div>

    </Layout>
  )
}

