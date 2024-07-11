import headerImg from './assets/img.jpeg'
import './index.css'

function App() {
  return (
    <>
      <main className='font-outFit text-wengeBrown p-8 max-w-4xl mx-auto my-4 rounded-xl bg-white'>
        <div className='min-w-full '>
          <img
            src={headerImg}
            alt='img'
            className=' rounded-xl max-h-80 w-full object-cover'
          />
        </div>
        <div>
          <h1 className='font-younfSrif text-3xl text-darkCharcoal my-4 mt-8'>
            Simple Omelette Recipe
          </h1>
          <p>
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
        </div>
        <div className='bg-roseWhite rounded-md p-6 my-8'>
          <h2 className='text-darkRaspberry text-2xl font-bold font-outFit'>
            Preparation time
          </h2>
          <ul className='px-4  mt-2 pre-time'>
            <li>
              <b>Total:</b>Approximately 10 minutes
            </li>
            <li>
              <b> Preparation: </b>5 minutes
            </li>
            <li>
              <b>Cooking: </b>5 minutes
            </li>
          </ul>
        </div>
        <article className='my-8 border-b-2 border-eggshell pb-8'>
          <h2>Ingredients</h2>
          <ul className='ing-list mt-4'>
            <li>2-3 large eggs</li>
            <li>Salt to taste</li>
            <li> Pepper to taste</li>
            <li>1 tablespoon of butter or oil Optional</li>
            <li>fillings: cheese, diced vegetables, cooked meats, herbs</li>
          </ul>
        </article>
        <article className='my-8 border-b-2 border-eggshell pb-8'>
          <h2>Instructions </h2>
          <ul className='ins my-4'>
            <li className="before:content-['1.']  ">
              Beat the eggs: In a bowl, beat the eggs with a pinch of salt and
              pepper until they are well mixed. You can add a tablespoon of
              water or milk for a fluffier texture.
            </li>
            <li className="before:content-['2.']  ">
              {' '}
              Heat the pan: Place a non-stick frying pan over medium heat and
              add butter or oil.
            </li>
            <li className="before:content-['3.']  ">
              {' '}
              Cook the omelette: Once the butter is melted and bubbling, pour in
              the eggs. Tilt the pan to ensure the eggs evenly coat the surface.{' '}
            </li>
            <li className="before:content-['4.']  ">
              {' '}
              Add fillings (optional): When the eggs begin to set at the edges
              but are still slightly runny in the middle, sprinkle your chosen
              fillings over one half of the omelette.
            </li>
            <li className="before:content-['5.']  ">
              {' '}
              Fold and serve: As the omelette continues to cook, carefully lift
              one edge and fold it over the fillings. Let it cook for another
              minute, then slide it onto a plate.{' '}
            </li>
            <li className="before:content-['6.']  ">
              {' '}
              Enjoy: Serve hot, with additional salt and pepper if needed.{' '}
            </li>
          </ul>
        </article>
        <article className='my-8'>
          <h2>Nutrition </h2>
          <p className='my-4'>
            {' '}
            The table below shows nutritional values per serving without the
            additional fillings.{' '}
          </p>
          <div className='border-b-[1px]  '>
            <ul className='py-4 flex justify-between pl-8 w-2/3 '>
              <span>Calories</span>
              <span className='ml-48 text-nutmeg font-bold'> 277kcal</span>
            </ul>
          </div>
          <div className='border-b-[1px]  '>
            <ul className='py-4 flex justify-between pl-8 w-2/3   '>
              <span>Carbs </span>
              <span className='ml-48 text-nutmeg font-bold'> 0g</span>
            </ul>
          </div>
          <div className='border-b-[1px] '>
            <ul className='py-4 flex justify-between pl-8 w-2/3'>
              <span>Protein </span>
              <span
                className='ml-48 text-nutmeg
font-bold'
              >
                {' '}
                20g
              </span>
            </ul>
          </div>
          <div className='border-b-[1px]  '>
            <ul className='py-4 flex justify-between pl-8 w-2/3'>
              <span>Fat </span>
              <span className='ml-48 text-nutmeg font-bold'>22g</span>
            </ul>
          </div>
        </article>
      </main>
    </>
  )
}

export default App
