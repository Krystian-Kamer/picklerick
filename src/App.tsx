import picklerick from './assets/picklerick.png'
import pixelrick from './assets/pixelrick.png'

function App() {

  return (
    <>
      <h1 className='text-3xl font-bold underline'>Hello world!</h1>
      <img src={pixelrick} alt='picklerick' />
      <img src={picklerick} alt='picklerick' />
    </>
  );
}

export default App
