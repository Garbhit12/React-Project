import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 let  [counter, setCounter]= useState(15)
   
  //let counter = 15

   const addvalue = () => {
    if(counter < 20){
    console.log("clicked" , counter );
    counter = counter + 1
    setCounter(counter)
  }
  }
     const removeValue = () => { 
      if( counter > 0){
      setCounter(counter - 1)
      }
  }
  return (
    <>
      <h1>NOW I'M HERE BUDDY!</h1>
      <h2>counter value: {counter}</h2>
      <button  onClick={addvalue}>Add value {counter}</button>
      
      <br />
      <button onClick={removeValue} >remove value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
