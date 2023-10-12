import React from 'react';
import Layout from '../components/Trip/Layout';

const neutralsGray04 = "text-[#999999]";

function MealsOption({ meal, cost, totalCost }) {
  return (
    <div className='flex gap-5 items-center'>
      <input type='checkbox' id={meal} />
      <label htmlFor={meal}>
        <h2 className='text-lg'>{meal}</h2>
        <p className={'text-xs ' + neutralsGray04}>({cost} per meal)</p>
      </label>
      <p>-</p>
      <h3 className={'text-lg ' + neutralsGray04}>₹{totalCost}</h3>
    </div>
  );
}

function MealPreference({ preference }) {
  return (
    <div className='flex gap-2'>
      <input name='meal-preference' type="radio" id={preference}></input>
      <label htmlFor={preference}>{preference}</label>
    </div>
  )
}

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
        <div>
          <h2>Meals to include:</h2>
          <p className={neutralsGray04}>Prices are an estimate of each meal for 8 days per 2 people</p>
        </div>
        <MealsOption meal="Breakfast" cost="₹60" totalCost="200" />
        <MealsOption meal="Lunch" cost="₹80" totalCost="200" />
        <MealsOption meal="Dinner" cost="₹60" totalCost="200" />
      </div>
      <div className=''>
        <h2>Types of food</h2>
        <div className='flex gap-4'>
          <MealPreference preference="Vegetarian" />
          <MealPreference preference="Vegan" />
          <MealPreference preference="Non-vegetarian" />
          <MealPreference preference="No preference" />
        </div>
      </div>
    </Layout>
  )
}

