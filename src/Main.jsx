//? Class Based Component


// import React, { Component, Fragment } from 'react'

//  class Main extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//        skills:["html","css","js"]
//     }
//   }
  
//   render() {
//     return (
      
//       <div>
//         <h1>{this.state.skills.map((ele,ind)=>{
//  return(

//   <div>
//     <h1>{ind}:{ele}</h1>
//   </div>)
//      }
//    )
//  }
//         </h1>
//       </div>
      
//     )
//   }
// }


// export default Main


//? Functional Based Component
// import React,{useState} from 'react'

// const Main = () => {
//   let  [state, setstate] = useState(["html","js","css","nodejs"]);
//   return (
    
//     <div>
//       <h1>{state.map((ele,index)=>{
//       return (
//         <h1>{index}:{ele}</h1>
//       )
//       })}</h1>
//     </div>
    
//   )
// }

// export default Main

//? Class Based Comoponent
// import React, { Component } from 'react'

//  class Main extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//        name:"Sasi",
//        Subject:"Js"
//     }
//   }
  
//   ChangeName=()=>{
//     this.setState({Name:this.state.name="Sasi kumar",Subject:"Mern"})

//   }

//   ChangeName1=()=>{
//     this.setState({Name:this.state.name="Kavin kumar",Subject:"Pharm"})



//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.name}</h1>
//         <h1>{this.state.Subject}</h1>
//         <button onClick={this.ChangeName}>Next</button>
//         <button onClick={this.ChangeName1}>Previous</button>
//       </div>
//     )
//   }
// }

// export default Main




//? Functional Based Component

// import React, { useState } from 'react'

// const Main = () => {
//   let [data,setData]=useState({name:"Sasi",Subject:"React"})
//   let ChangeName=()=>{
//     setData({name:"Kumar",Subject:"NodeJs"})

//   }
//   let ChangeName1=()=>{
//     setData({name:"Kavin",Subject:"ReactJs"})

//   }
//   return (
//     <div>
//       <h1>Name : {data.name}</h1>
//       <h1>Subject : {data.Subject}</h1>

//       <center>
//       <button onClick={ChangeName} style={{height:"50px",width:"50px"}}>Next</button>
//       <button onClick={ChangeName1} style={{height:"50px",width:"70px"}}>Previous</button>
//       </center>
//       </div>
//   )
// }

// export default Main

//? Class Based Component

// import React, { Component } from 'react'

// export default class Main extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//        count:0
//     }

//  Increment=()=>{
// this.setState({count:this.count+1})
// }

//  Decrement=()=>{
//   this.setState({count:this.count-1})
//   }
//  Reset=()=>{
//     this.setState({count:0})
//   }

//   }
  
//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.Increment}>Increment</button>
//         <button onClick={this.Decrement}>Decrement</button>
//         <button onClick={this.Reset}>Reset</button>


//       </div>
//     )
//   }
// }


//? Functional Based Component


// import React, { useState } from 'react'

// const Main = () => {
//   let[state,setState]=useState(0)
//   let [color,setColors]=useState("black")

//   let Increment=()=>{
//     setState(state+1)
//     setColors("green")
//   }

//   let Decrement=()=>{
//     setState(state-1)
//     setColors("blue")
//   }

//   let Reset=()=>{
//     setState(0)
//     setColors("red")
//   }
//   return (
//     <div>
//       <center>
//       <h1 style={{color,fontSize:"50px"}}>{state}</h1>
//       <button onClick={Increment} style={{background:"green", height:"50px",width:"50px",fontSize:"20px",borderRadius:"10px",color:"white"}}>+</button>  
//       <button onClick={Decrement} style={{background:"blue", height:"50px",width:"50px",fontSize:"20px",marginLeft:"10px",borderRadius:"10px",color:"white"}}>-</button>   
//       <button onClick={Reset} style={{height:"50px",width:"50px",color:"white",fontSize:"20px",marginLeft:"10px",borderRadius:"10px",background:"red"}}>0</button>
//       </center>   

//  </div>
//   )
// }

// export default Main

//? Class Based Component

// import React, { Component } from 'react'
// import "./Global.css"

// export default class Main extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
      //  employees:[
      //   {
      //   ename:"Sasi",
      //   eid:"101",
      //   esal:"4lpa",
      //   eloc:"Bangalore",
      //   esatate:"Karnataka"
      //  },
      //  {
      //   ename:"Kavin",
      //   eid:"102",
      //   esal:"4lpa",
      //   eloc:"Bangalore",
      //   esatate:"Karnataka"
      //  },
      //  {
      //   ename:"Kumar",
      //   eid:"103",
      //   esal:"4lpa",
      //   eloc:"Bangalore",
      //   esatate:"Karnataka"
      //  },
      //  {
      //   ename:"Shanmugam",
      //   eid:"104",
      //   esal:"4lpa",
      //   eloc:"Bangalore",
      //   esatate:"Karnataka"
      //  },
      //  {
      //   ename:"Selvi",
      //   eid:"105",
      //   esal:"4lpa",
      //   eloc:"Bangalore",
      //   esatate:"Karnataka"
      //  },
      // ]
//     }
//   }
  
//   render() {
//     return (
//       <div>
//         <table> 
//           <thead>
//             <th>ID</th>
//             <th>NAME</th>
//             <th>SALARY</th>
//             <th>LOCATION</th>
//             <th>STATE</th>
//             </thead>
//             <tbody> 
//               {this.state.employees.map((m)=>{
//                 console.log(m);
//                 return(
//                 <tr> 
//                 <td>{m.eid}</td>
//                 <td>{m.ename}</td>
//                 <td>{m.esal}</td>
//                 <td>{m.eloc}</td>
//                 <td>{m.esatate}</td>
//                 </tr>
                
//               )
//               })}
//               </tbody>
//             </table>
             
       
        
//       </div>
//     )
//   }
// }


//? Functional Based component

// import React, { useState } from 'react'
// import "./Global.css"

// const Main = () => {
//   let [state,setState]=useState({employees:[
//     {
//     ename:"Sasi",
//     eid:"101",
//     esal:"4lpa",
//     eloc:"Bangalore",
//     esatate:"Karnataka"
//    },
//    {
//     ename:"Kavin",
//     eid:"102",
//     esal:"4lpa",
//     eloc:"Bangalore",
//     esatate:"Karnataka"
//    },
//    {
//     ename:"Kumar",
//     eid:"103",
//     esal:"4lpa",
//     eloc:"Bangalore",
//     esatate:"Karnataka"
//    },
//    {
//     ename:"Shanmugam",
//     eid:"104",
//     esal:"4lpa",
//     eloc:"Bangalore",
//     esatate:"Karnataka"
//    },
//    {
//     ename:"Selvi",
//     eid:"105",
//     esal:"4lpa",
//     eloc:"Bangalore",
//     esatate:"Karnataka"
//    }
//   ]})
//   return (
//     <div>
//          <table> 
//            <thead>
//              <th>ID</th>
//              <th>NAME</th>
//              <th>SALARY</th>
//              <th>LOCATION</th>
//              <th>STATE</th>
//              </thead>
//              <tbody> 
//               {state.employees.map((m)=>{
//                 console.log(m);
//                 return(
//                 <tr> 
//                 <td>{m.eid}</td>
//                 <td>{m.ename}</td>
//                 <td>{m.esal}</td>
//                 <td>{m.eloc}</td>
//                 <td>{m.esatate}</td>
//                 </tr>
                
//               )
//               })}
//               </tbody>
//             </table>
             
       
//     </div>
//   )
// }

// export default Main


// import React, { useState } from 'react'

// const Main = () => {
//   let [state,setState]=useState(0)

//   let Increment=()=>{
//     // setState(state+1)
//     // setState(state+10)

//     //* try this way
//     setState((state)=>state+1)
//     setState((state)=>state+10)

//   }
//   return (
//     <div>
//       <h1>{state}</h1>
//       <button onClick={Increment}> You have clicked me : {state} times</button>
//     </div>
//   )
// }

// export default Main



// import React, { useState } from 'react'

// const Main = () => {
//   let [state,setState]=useState("Hello")
//   let handleChange=()=>{
//     setState("Hi Mr.Sasi Kumar")
//   }
//   return (
//     <div>
//       <h1>{state}</h1>
//       <button onClick={handleChange}> You are Calling:{state}</button>
//     </div>
//   )
// }

// export default Main


// import React, { useState } from 'react'



// const Main = () => {
//   let [like,setLike]=useState(false)
//   let Clicked=(e)=>{
//     setLike(e.target.checked)
//   }

//   return (
//     <div>
//       <input type="checkbox" onChange={Clicked}/> I like this
      // <p>{like?"You have liked ":"You have not liked"}</p>
//     </div>
//   )
// }

// export default Main


// import React, { useState } from 'react'

// const Main = () => {
//       let [name,setName]=useState("Sasi")
//       let [age,setAge]=useState("21")



//   return (
//     <div>
//       <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
//       <button onClick={()=>setAge(age+1)}>Press here to increment the age {age}</button>
//       <h1>Hello {name} your age is : {age}</h1>

//     </div>
//   )
// }

// export default Main





//* Assignment


// import React, { useState } from 'react'

// const Main = () => {
//       let [show,setShow]=useState()

// let Show=()=>{
//       setShow("Hi,this is Sasi kumar")
// }
// let Hide=()=>{
//       setShow("") 
// }

//   return (
//     <div>
//       <center>
//       <h1>{show}</h1>
//       <button onClick={Show}>Show</button>
//       <button onClick={Hide} style={{marginLeft:"20px"}}>Hide</button>
//       </center>
//     </div>
//   )
// }

// export default Main

// import React, { useState } from 'react'

// const Main = () => {
//       let [show,setShow]=useState()

// let Show=()=>{
//       setShow(!show)
// }


//   return (
//     <div>
//       <center>
//       {show && <h1 style={{color:"green"}}>Hi,this is S.Sasi Kumar</h1>}
//       <button onClick={Show} style={{marginTop:"100px"}}>{show?"Hide":"Show"}</button>
//       </center>
//     </div>
//   )
// }

// export default Main


// import React, { useState } from 'react'
// import "./App.css"

// const Main = () => {
//       let[color,setColor]=useState("grey")

//       let light =()=>{
//             setColor("whiteSmoke")
//             // console.log(color);
//       }
      
//       let dark =()=>{
//             setColor("black")
//             // console.log(color);
//       }
      
//   return (
//     <div style={{height:"100vh",width:"100%",background:color}}>
//       <button onClick={light}>Light</button>&ensp;
//       <button onClick={dark}>Dark</button>
//     </div>
//   )
// }

// export default Main



// import { faker } from '@faker-js/faker'
// import React, { useState } from 'react'

// const Main = () => {
//       let [name,setName]=useState(faker.animal.cat())
//       let [image,setImage]=useState(faker.image.avatar)

//       let ChangeImage=()=>{
//             setName(faker.animal.bear())
//             setImage(faker.image.avatar)
//       }

//   return (
//     <div>
//       <h1>{name}</h1>
//       <img src={image} style={{height:"400px",width:"400px"}} alt="" /><br />
//       <button onClick={ChangeImage}>ChangeName</button>
      
//     </div>
//   )
// }

// export default Main



//? Table based Products


// import React, { useState } from 'react'
// import PRODUCTS  from "./Products.json"
// import "./Global.css"

// const Main = () => {
//       let [state,setState]=useState(PRODUCTS)
//   return (<>
//     <div>
//       <table>
//             <thead>
//                   <th>ID</th>
//                   <th>MAKER</th>
//                   <th>IMAGE</th>
//                   <th>URL</th>
//                   <th>TITLE</th>
//                   <th>DESCRIPTION</th>
//                   <th>RATINGS</th>
//             </thead>
//             <tbody>
//                {state.map((m)=>{
//                   return(
//                         <tr>
//                               <td>{m.Id}</td>
//                               <td>{m.Maker}</td>
//                               <td><img src={m.img} alt="" /></td>
//                               <td><a href={m.Url}>Click Here</a></td>
//                               <td>{m.Title}</td>
//                               <td>{m.Description}</td>
//                               <td>{m.Ratings}</td>
//                         </tr>
//                   )
//                })}
//             </tbody>
//       </table>
//     </div>
//     </>
//   )
// }

// export default Main

//? Cards based PRODUCTS


// import React, { useState } from 'react'
// import PRODUCTS from "./Products.json"
// import "./App.css"

// const Main = () => {

//       let [state,setState]=useState(PRODUCTS)
//   return (<>
//   <h1 className='h1'>PRODUCTS</h1>
//     <div className='container'>
//       {state.map((m)=>{
//         return(
//           <div className='container1'>      
//       <h1>{m.Id}</h1>
//       <h2>{m.Maker}</h2>
//       <img src={m.img} />
//       <h3>{m.Title}</h3>
//       <h4>{m.Description}</h4>
//       <a href={m.Url} >Click Here</a>
//       </div>
//         )
//       })}
//     </div>
//     </>
//   )
// }

// export default Main




import React from 'react'
import Router1 from './Router1/Router1'
// import  Form  from "./Form.jsx"



const Main = () => {
  return (
    <div>
      <Router1/>
      {/* <Form/> */}
    </div>
  )
}

export default Main
