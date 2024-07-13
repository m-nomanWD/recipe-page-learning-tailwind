import React from 'react'

export default function Ingredients({ ingredients }) {
  return (
    <article className='my-8 border-b-2 border-eggshell pb-8'>
      <h2>Ingredients</h2>
      <ul className='ing-list mt-4'>
        {ingredients.map((ingredient) => {
          return <li>{ingredient}</li>
        })}
      </ul>
    </article>
  )
}
