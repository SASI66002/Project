// import React from 'react'

// const Main = () => {
//     let Search=fetch(``)
// // let Search=fetch(`http://www.omdbapi.com/?s=jailer&apikey=29ee33c2`)
// // let search=fetch(`https://jsonplaceholder.typicode.com/photos`)

// console.log(Search);
// Search.then((resp)=>{
//     // console.log(resp);
//     return resp.json();
// })
// .then((m)=>{
//     // console.log(m);
//     m.Search.map((e)=>{
//     let sasi=document.getElementById("sasi")
//     sasi.innerHTML+=
//     `<div>
//     <img src="${e.Poster}" />
//     <h3>${e.Year}</h3>
//     <h1>${e.Title}</h1>
//     </div>`
// })
// })

// .catch((err)=>{
//     console.log(err.message);
// })
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Main

//? My Component
// import React, { useState } from 'react'
// import { MyContext } from './MyContext/MyContext'
// import MyComponent from './MyContext/MyComponent'

// const Main = () => {
//   let [text,setText]=useState("Hello 😜")
//   return (
//     <div>
//       <MyContext.Provider value={{text,setText}}>
//       <MyComponent/>
//       </MyContext.Provider>
//     </div>
//   )
// }

// export default Main


import React from 'react'
import ProductsApi from './ProductsApi/ProductsApi'
import Form from './Form'

const Main = () => {
  return (
    <div>
      {/* <ProductsApi/> */}
      <Form/>
    </div>
  )
}

export default Main

