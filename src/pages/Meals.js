import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import Layout from '../components/Trip/Layout';
import { useNavigate } from 'react-router-dom';
import { TripContext } from '../context/TripState';
import { MealCost } from '../utils/Places';
import { PublicApi } from '../utils/Api';
import toast from 'react-hot-toast';

const neutralsGray04 = "text-[#999999]";

function MealsOption({ value, meal, cost, totalCost, handleChange }) {
  return (
    <div className='flex gap-5 items-center'>
      <input checked={value} onChange={handleChange} name={String(meal).toLowerCase()} type='checkbox' id={meal} />
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

export default function Meals({ indexId, tripData, userTripDetails }) {

  let navigate = useNavigate();
  let trip = useContext(TripContext);
  const [mealsData, setMealsData] = useState({})
  const [data, setData] = useState({
    budgetLevel: 0,
    mealsToInclude: {
      breakfast: false,
      lunch: false,
      dinner: false
    },
  });
  const [tripDetails, setTripDetails] = useState({});

  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      mealsToInclude: {
        ...data.mealsToInclude,
        [e.target.name]: e.target.checked
      }
    }));
  }

  const handlePrevious = () => {
    navigate(`/${indexId}/trip`);
  }

  const handleNext = () => {
    PublicApi.put("/api/v1/trip", {
      trip_id: indexId,
      mealsToInclude: data.mealsToInclude,
      budgetLevel: data.budgetLevel,
      mealsCost: (data.mealsToInclude.breakfast ? mealsData.breakfast : 0) + (data.mealsToInclude.lunch ? mealsData.lunch : 0) + (data.mealsToInclude.dinner ? mealsData.dinner : 0)
    }).then(() => {
      let dataArr = [];
      trip.data.forEach((tripp) => {
        if (tripp.id === indexId) {
          dataArr.push({
            ...trip.data.filter((trip) => trip.id === indexId)[0],
            mealsToInclude: data.mealsToInclude,
            budgetLevel: data.budgetLevel,
            mealsCost: (data.mealsToInclude.breakfast ? mealsData.breakfast : 0) + (data.mealsToInclude.lunch ? mealsData.lunch : 0) + (data.mealsToInclude.dinner ? mealsData.dinner : 0)
          })
        } else {
          dataArr.push(tripp);
        }
      });
      trip.setData(dataArr);
      trip.updateData();
      navigate(`/${indexId}/trip/hotels`);
    }).catch(() => {
      toast.error("Something went wrong");
    })
  }

  useLayoutEffect(() => {
    if (userTripDetails) {
      setTripDetails(userTripDetails);

      if (userTripDetails.mealsToInclude && userTripDetails.budgetLevel) {
        setData({
          budgetLevel: userTripDetails.budgetLevel,
          mealsToInclude: userTripDetails.mealsToInclude
        });
      }
    }
  }, [userTripDetails]);

  useLayoutEffect(() => {
    if (data.budgetLevel === 0) {
      setMealsData({
        breakfast: MealCost[0].cheap,
        lunch: MealCost[1].cheap,
        dinner: MealCost[2].cheap
      });
    } else if (data.budgetLevel === 50) {
      setMealsData({
        breakfast: MealCost[0].mid,
        lunch: MealCost[1].mid,
        dinner: MealCost[2].mid
      });
    } else if (data.budgetLevel === 100) {
      setMealsData({
        breakfast: MealCost[0].high,
        lunch: MealCost[1].high,
        dinner: MealCost[2].high
      });
    }
  }, [data.budgetLevel]);

  return (
    <Layout handlePrev={handlePrevious} handleNext={handleNext} location={tripData && tripData.location}>
      <div className='flex flex-col gap-3'>
        <h1 className='text-4xl'>Meals preference (Optional)</h1>
        <p className={neutralsGray04}>Select the meals you would like to include in your trip, your budget for it and the type of food you prefer.</p>
      </div>

      <div className='flex flex-col gap-5'>
        <div className='flex flex-col gap-1'>
          <h2 className='text-lg font-semibold'>Budget level:</h2>
          <p className={neutralsGray04}>Depending on the budget level, we will select least or more expensive restaurants.</p>
        </div>
        <div>
          <input value={data.budgetLevel} step={50} onChange={(e) => {
            setData((prev) => ({
              ...prev,
              budgetLevel: Number(e.target.value)
            }));
          }} className='w-[300px]' type='range' id='meal-budget' />
          <div className='flex items-center gap-3 w-[300px] justify-between text-xs'>
            <p>Cheap</p>
            <p>Mid</p>
            <p>High</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-5'>
        <div className='flex flex-col gap-1'>
          <h2 className='text-lg font-semibold'>Meals to include:</h2>
          <p className={neutralsGray04}>Prices are an estimate of each meal for 8 days per {tripDetails.children + tripDetails.adult} people</p>
        </div>
        <div>
          <MealsOption value={data.mealsToInclude.breakfast} handleChange={handleChange} meal="Breakfast" cost={`₹${mealsData.breakfast}`} totalCost={((tripDetails.children + tripDetails.adults) * mealsData.breakfast)} />
          <MealsOption value={data.mealsToInclude.lunch} handleChange={handleChange} meal="Lunch" cost={`₹${mealsData.lunch}`} totalCost={((tripDetails.children + tripDetails.adults) * mealsData.lunch)} />
          <MealsOption value={data.mealsToInclude.dinner} handleChange={handleChange} meal="Dinner" cost={`₹${mealsData.dinner}`} totalCost={((tripDetails.children + tripDetails.adults) * mealsData.dinner)} />
        </div>
      </div>
      {/* <div className='flex flex-col gap-5'>
        <h2 className='text-lg font-semibold'>Types of food</h2>
        <div className='flex gap-4'>
          <MealPreference preference="Vegetarian" />
          <MealPreference preference="Vegan" />
          <MealPreference preference="Non-vegetarian" />
          <MealPreference preference="No preference" />
        </div>
      </div> */}
    </Layout>
  )
}

