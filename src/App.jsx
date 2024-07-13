import headerImg from './assets/img.jpeg'
import PrepTime from './components/PrepTime'
import Ingredients from './components/Ingredients'
import Instructions from './components/Instructions'
import Nutrition from './components/Nutrition'
import './index.css'

import { data } from './data'
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
        <PrepTime prepTimeInfo={data.prepTimeInfo} />
        <Ingredients ingredients={data.ingredients} />
        <Instructions instructions={data.instructions} />
        <Nutrition nutrition={data.nutrition} />
      </main>
    </>
  )
}

export default App
