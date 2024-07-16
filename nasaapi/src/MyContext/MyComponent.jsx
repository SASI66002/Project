import React, { useContext } from 'react'
import { MyContext } from './MyContext'

const MyComponent = () => {
    let {text,setText}=useContext(MyContext)
    let changeText=()=>{
        setText("Hi,this is MyContext")
    }
  return (
    <div>
      <h1>{text}</h1>
      <button onClick={changeText}>Click</button>
    </div>
  )
}

export default MyComponent
