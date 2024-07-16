import React, { useState } from 'react'
import "./Products.css"

const ProductsApi = () => {
  let [save,setSave]=useState([])
  let apiFetch=async()=>{
    let randomNumber=Math.floor(Math.random()*(99-10)+10)
    let data=await fetch(`https://dummyjson.com/products/${randomNumber}`)
    let response=await data.json()
    console.log(response);
    setSave([...save,response])
  }
  return (
    <div>
      <button onClick={apiFetch}>Get Data</button>
      <table>
        <thead>
        <th>ID</th>
        <th>TITLE</th>
        <th>DESCRIPTION</th>
        </thead>
        <tbody>
          {save.map((m)=>{
            return(
              <tr>
                <td>{m.id}</td>
                <td>{m.title}</td>
                <td>{m.description}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ProductsApi
