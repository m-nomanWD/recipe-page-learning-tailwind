import React from 'react'

export default function Instructions({ instructions }) {
  return (
    <article className='my-8 border-b-2 border-eggshell pb-8'>
      <h2>Instructions </h2>
      <ul className='ins my-4'>
        {instructions.map((instruction, index) => {
          console.log(index)
          return (
            <li
              key={index}
              className='dynamic-list-item  '
              data-index={index + 1}
            >
              {instruction}
            </li>
          )
        })}
      </ul>
    </article>
  )
}
