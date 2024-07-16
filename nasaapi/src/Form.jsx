//! Uncontrolled Components
//*-> ref and Html DOM

// import React, { useRef } from 'react'
// const Form = () => {
//     let inputRef=useRef(null)
//     let handleSubmit=(e)=>{
//         e.preventDefault()
//         console.log(inputRef.current.value);
//     }
//   return (
//     <div>
//       <form action="">
//         <input type="text" placeholder='Enter your name' name="" id="" ref={inputRef}/>
//         <button onClick={handleSubmit}>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default Form

//!Controlled Components
//*-> Using React State

// import React, { useState } from 'react'
// const Form = () => {
//     let [name,setName]=useState(null)
//     let handleSubmit =(e)=>{
//         e.preventDefault()
//         setName(e.target.value)
//         console.log(name);
//     }
//   return (
//     <div>
//       <form action="">
//         <input type="text" value={name} name="name" id="" onChange={handleSubmit}/>
//         <button onClick={handleSubmit}>Submit</button>
//       </form>
//     </div>
//   )
// }
// export default Form


//? Uncontrolled components
//! In uncontrolled components it will not give suggesstion.

// import React, { useRef } from 'react'

// const Form = () => {
//     let inputRef=useRef(null)
//     let passRef=useRef(null)
//     let handleSubmit=(e)=>{
//         e.preventDefault()
//         console.log(inputRef.current.value);
//         console.log(passRef.current.value);        
//     }
//   return (
//     <div>
//       <form action="" onSubmit={handleSubmit}>
//         <label htmlFor="">Name :</label>
//         <br />
//         <input type="text" ref={inputRef} name="" id="" />
//         <br />
//         <input type="password" ref={passRef} name="" id="" />
//         <br />
//         <button type='submit'>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default Form

//! Controlled Components
//*-> It will give suggesstion while typing

import React, { useState } from 'react'

const Form = () => {
    let [name,setName]=useState(null)
    let [pass,setPass]=useState(null)

    let handleSubmit=(e)=>{
        e.preventDefault()
        console.log(name,pass);
        // console.log({name,pass});\
    }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Name :</label>
        <br />
        <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}} id="" />
        <br />
        <label htmlFor="">Pass :</label>
        <br />
        <input type="password" name="pass" value={pass} onChange={(e)=>{setPass(e.target.value)}} id="" />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Form

