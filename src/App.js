import React from 'react';
import reviews from './Data';
import Testimonial from './Components/Testimonial';

const App = () =>{
  /*Inside the App which is the outer most section of our body we have:-
  (i)Our main Heading.
  (ii)An underline created with the help of div.
  (iii)And an Testimonial Component which futher hold the other client detail.
  Indise the testmonial component we have tried to send the person detail as props. */
  return(
    <div className='flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200'>

      <div className='text-center'>
        
        <h1 className=' text-4xl font-bold'>Our Testimonial</h1>
        <div className=' bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto'></div>
        <Testimonial reviews={reviews}></Testimonial>

      </div>
      
    </div>
  );
}

export default App;