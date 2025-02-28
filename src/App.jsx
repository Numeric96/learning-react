import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  let [counter,setCounter]=useState(0);

  let addValue=()=>{
    setCounter(counter+1);
  }
  let deleteValue=()=>{
    setCounter(counter-1); 
  }

  return (
    
    < ><div className=" flex justify-center items-center flex-col h-screen w-screen bg-gray-300">
      <div className="card rounded-3xl  shadow-lg shadow-indigo-500/50 flex justify-center items-center flex-col h-[240px] w-[300px] bg-indigo-400">

     <h2 className='h-10 m-5 bg-blue-600 w-30 flex justify-center items-center rounded-xl'>COUNTER</h2>

    <p className='h-10 bg-gray-600 w-50 flex justify-center items-center rounded-xl text-amber-50 '>Current Count : {counter} </p>
    <div className="flex gap-5 mt-10">
    <button className='h-10 text-red-600 bg-blue-300 w-30 flex justify-center items-center font-medium rounded-xl' onClick={addValue}>Increment</button>
    <button className='h-10 text-green-600 bg-blue-300 w-30 flex justify-center items-center font-medium rounded-xl'onClick={deleteValue}>Decrement</button>
    </div>
    </div>
    </div>
    </>
  )
}

export default App
