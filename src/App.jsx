import { RouterProvider } from 'react-router-dom'
import router from './routes'
import { useState } from 'react'

function App() {
// var resultReturnedFromUseState = useState(0)
// var firstIndexValue = resultReturnedFromUseState[0]
// var secondIndexFunction = resultReturnedFromUseState[1]
  const[count,setCount] = useState(0)
  const [name,setName] = useState("Picaso")

  return (
      //  <RouterProvider router={router}/>
    <>  
     {/* <h1>Learning UseState</h1>
      <h1>{firstIndexValue}</h1>
      <button onClick={()=>secondIndexFunction(firstIndexValue + 2)}>+</button>    */}
    <h1>{count}</h1>
    <button onClick={()=>setCount(count + 1)}>+</button>
    <button onClick={()=>setCount(count - 1)}>-</button>
    <h1>{name}</h1>
    <button onClick={()=>setName("Praful")}>Change Name</button>
    </>
  )
}


export default App
