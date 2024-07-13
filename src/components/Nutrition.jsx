import React from 'react'

export default function Nutrition({ nutrition }) {
  return (
    <article className='my-8'>
      <h2>Nutrition </h2>
      <p className='my-4'>
        {' '}
        The table below shows nutritional values per serving without the
        additional fillings.{' '}
      </p>
      {nutrition.map((nutr) => {
        const { name, value } = nutr
        return (
          <div className='border-b-[1px]  '>
            <ul className='py-4 flex justify-between mobile:pl-8 tablet:w-2/3 '>
              <span>{name}</span>
              <span className='tablet:ml-24  text-nutmeg font-bold'>
                {' '}
                {value}
              </span>
            </ul>
          </div>
        )
      })}
    </article>
  )
}
