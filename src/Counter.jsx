import React from 'react'
import { useState } from 'react'

function Counter() {
  const [count,setCount] = useState(0)
  console.log(count)
  return (
    <>
    <div>Counter</div>
    <button onClick={() => setCount(count+1)}>INC</button>
    <button onClick={() => setCount(count-1)}>DEC</button>
    <button onClick={() => setCount(count-count)}>reset</button>
    
    
    <div>Count: {count}</div>
    </>
  )
}

export default Counter