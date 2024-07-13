import React from 'react'

export default function PrepTime({ prepTimeInfo }) {
  const { totalTime, prepTime, cookTime } = prepTimeInfo

  return (
    <div>
      <div className='bg-roseWhite rounded-md p-6 my-8'>
        <h2 className='text-darkRaspberry text-2xl font-bold font-outFit'>
          Preparation time
        </h2>
        <ul className='mobile:px-4   mt-2 pre-time'>
          <li>
            <b>Total:</b>
            {totalTime}
          </li>
          <li>
            <b> Preparation: </b>
            {prepTime}
          </li>
          <li>
            <b>Cooking: </b>
            {cookTime}
          </li>
        </ul>
      </div>
    </div>
  )
}
