import React, { useState } from 'react'
import COUNTRY from "./Country.json"


const Form = () => {
    let [state,setState]=useState({
        firstname:"",
        lastname:"",
        gender:"",
        pricerange:"",
        countries:"",
        mobiles:"",
        skills:"",
        feedback:""

    })
    let[photo,setPhoto]=useState("")
    let [show,setShow]=useState("")
    let [PhotoView,setPhotoView]=useState("")
    let [skills,setSkills]=useState([
        "HTML",
        "CSS",
        "JAVASCRIPT",
        "REACTJS",
        "NODEJS",
        "EXPRESSJS",
        "MONGODB"
    ])
    let [country,setCountry]=useState(COUNTRY)
    let handleChange=(e)=>{
        let {name,value}=e.target;
        setState({...state,[name]:value})
        let handleFileChange=(e)=>{
            setShow(true);
            let files=e.target.files[0];
            console.log(files);
            let reader=new FileReader(files)
            console.log(reader);
            reader.readAsDataURL(files)
            reader.onload=(evt)=>{
                setPhotoView(evt.target.result)
                console.log(evt.target.result);
            }
            setPhoto(files)
    };
    }
    let handleSubmit=(e)=>{
        e.preventDefault();
        try {
            console.log({state,photo});
        } catch (error) {
            console.log(error);
        }
        setState({firstname:"",lastname:"",gender:"",feedback:"",countries:"",mobile:"",skills:"",pricerange:"",})
    }
    let {firstname,lastname,gender,mobile,feedback,countries,skill,pricerange}=state;
  return (
    <div>
    <div> 
        <form onSubmit={handleSubmit}>
      <img src={PhotoView}  height={200} width={200} alt="" />
    
    <div>
        <label htmlFor="">Firstname : </label>
        <input type="text" 
        name="firstname"
         value={firstname}
          onChange={handleChange} id="" />

    </div>
    <div>
    <label htmlFor="">Lastname : </label>
        <input type="text" 
        name="lastname"
         value={lastname}
          onChange={handleChange} id="" />
    </div>
    <div>
        <label htmlFor=""> gender :</label>
        Male <input type="radio" name="gender" value="male" onChange={handleChange} id="" />
        Female <input type="radio" name="gender" value="Female" onChange={handleChange} id="" />
    </div>
    <div>
        <label htmlFor="">Mobile :</label>
        <input type="tel" name="mobile" value={mobile} onChange={handleChange} id="" />
    </div>
    <div>
        <label htmlFor="">Price Range :</label>
        <input type="range" min={100} max={1000} name="pricerange" value={pricerange} onChange={pricerange} id="" />{pricerange}
    </div>
    <div>
        <label htmlFor="">Skills :</label>
        <select name="skills" onChange={handleChange} id="">
            {skills.map((skills,index)=>{
                return(
                    <React.Fragment>
                    <option value={skills} key={index}>{skills}</option>
                    </React.Fragment>
                )
            })}
        </select>
    </div>
    <div>
        <label> Country :</label>
        <select onChange={handleChange} name="countries" id="">
            {country.map((c,index)=>{
                return(
                    <React.Fragment key={index}>
                        <option value={c.name}>{c.name}</option>
                    </React.Fragment>
                )
            })}
        </select>
    </div>
    <div>
        <label htmlFor="">Feedback :</label>
        <textarea cols={30} rows={30} onChange={handleChange} name="feedback" value={feedback} id=""></textarea>
    </div>
    <div>
        <label htmlFor="">Resume :</label>
        <input type="file" name="" onChange={handleFileChange} id="" />
    </div>
    <div>
        <button type='submit'>Submit</button>
    </div>
    </form>
    </div>
    </div>
  )
}

export default Form
