import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")

  return (

    <div className='w-full h-screen duration-200'
    style={{backgroundColor:color}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 py-3'>
        <div className='fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
          <button className='outline-none px-2 py-1 rounded-lg' style={{backgroundColor:"Red"}} onClick={()=>{setColor("red")}}>Red</button>
          <button className='outline-none px-2 py-1 rounded-lg'style={{backgroundColor:"yellow"}} onClick={()=>{setColor("yellow")}}>Yellow</button>
          <button className='outline-none px-2 py-1  rounded-lg'style={{backgroundColor:"green"}} onClick={()=>{setColor("green")}}>Green</button>
          <button className='outline-none px-2 py-1  rounded-lg'style={{backgroundColor:"blue"}} onClick={()=>{setColor("blue")}}>Blue</button>
          <button className='outline-none px-2 py-1  rounded-lg'style={{backgroundColor:"orange"}} onClick={()=>{setColor("orange")}}>Orange</button>
          <button className='outline-none px-2 py-1  rounded-lg'style={{backgroundColor:"purple"}} onClick={()=>{setColor("purple")}}>Purple</button>
          <button className='outline-none px-2 py-1  rounded-lg'style={{backgroundColor:"lavender"}} onClick={()=>{setColor("lavender")}}>Lavender</button>
          <button className='outline-none px-2 py-1  rounded-lg'style={{backgroundColor:"pink"}} onClick={()=>{setColor("pink")}}>Pink</button>
        </div>
      </div>
    </div>
  )
}

export default App
