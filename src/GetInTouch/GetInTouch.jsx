import React from 'react'
import Styles from"./GetInTouch.module.css"
import { LuPhone } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";
import "./mobile.json"




const GetInTouch = () => {
  return (
    <>
    <div className={Styles.main}>
    <div className={Styles.topimg}>
      <img src="https://www.testyantraglobal.com/images/contact-banner.png" alt="" />
    </div>
    <div className={Styles.inpdiv}>
      <div className={Styles.cendiv}>
      <div className={Styles.name}>
      <input type="text" placeholder='Name *' required name="" id="" />
      </div>
      <div className={Styles.email}>
      <input type="email" placeholder='Email *' required name="" id="" />
      </div>   
      </div>
      <div className={Styles.thirdinp}>
      <div className={Styles.middiv}>
        <select className={Styles.select}>
            <option value="Select Topic">Select Topic</option>
            <option value="Software Development">Software Development</option>
            <option value="Software Testing">Software Testing</option>
            <option value="IT Skills Enhancement">IT Skills Enhancement</option>
            <option value="IT Consulting">IT Consulting</option>
            <option value="Career Opportunities">Career Opportunities</option>
            <option value="Other Topics">Other Topics</option>
        </select>
      </div>
      <div>
        <input type="phone" name="" required id="" />
      </div>
      </div>
      <div className={Styles.forcon}>
        <input type="text" placeholder='Subject *' name="" id="" />
      </div>
      <div className={Styles.fifcon}>
        <input type="feedback" placeholder='Write a message...' name="" id="" />
      </div>
      <div className={Styles.sixcon}>
        <button type='submit'>Submit</button>
      </div>
      </div>
      </div>
      <div className={Styles.secdiv}></div>
      <div className={Styles.thirddiv}>
        <div className={Styles.smc1}>
          <h2>Contact Us By Phone</h2><br />
          <h2>Number Or Email Address</h2>
        </div>
        <div className={Styles.smc2}>
          <h2> <LuPhone/> 1800 572 7905</h2><br />
          <h2><MdOutlineEmail/> hello@testyantraglobal.com</h2>
        </div>
      </div>
      <div className={Styles.fordiv}>
        <h1>Reach out to us at your nearest office.</h1>
      </div>
      <div className={Styles.fifdiv}>
        <div className={Styles.fifdiv1}>
          <img src="https://www.testyantraglobal.com/_next/image/?url=%2Fimages%2Fflags%2Funited-states.jpg&w=128&q=75" alt="" />
          <h2>United States of America</h2>
          <h3>99 South Almaden Blvd, Suite 600, San Jose,<br />California, CA 95113</h3>
          <h3>Ph: 1800 572 7905</h3>
        </div>
        <div className={Styles.fifdiv2}>
          <img src="https://www.testyantraglobal.com/_next/image/?url=%2Fimages%2Fflags%2Fcanada.jpg&w=128&q=75" alt="" />
          <h2>Canada</h2>
          <h3>120 Adelaide Street West, Suite 2500 Toronto,<br />ON, M5H 1T1, Canada</h3>
          <h3>Ph: 1800 572 7905</h3>
      </div>
      <div className={Styles.fifdiv3}>
          <img src="https://www.testyantraglobal.com/_next/image/?url=%2Fimages%2Fflags%2FunitedKingdom.jpg&w=128&q=75" alt="" />
          <h2>United Kingdom</h2>
          <h3>1 Elmfield Park, Bromley - BR1 1LU, United <br />Kingdom </h3>
          <h3>Ph: 0800 949 6909</h3>
      </div>
      <div className={Styles.fifdiv4}>
          <img src="https://www.testyantraglobal.com/_next/image/?url=%2Fimages%2Fflags%2FIreland.jpg&w=128&q=75" alt="" />
          <h2>Ireland</h2>
          <h3>The black church, St. Mary’s place, Dublin,<br /> Ireland - D07 P4AX</h3>
          <h3>Ph: 1800 851 886</h3>
      </div>
      <div className={Styles.fifdiv5}>
          <img src="https://www.testyantraglobal.com/_next/image/?url=%2Fimages%2Fflags%2FNetherland.jpg&w=128&q=75" alt="" />
          <h2>Netherlands</h2>
          <h3>Vliegend Hertlaan 15-97, 3526 KT Utrecht,<br />Netherlands</h3>
          <h3>Ph: +31 308 992 386</h3>
      </div>
      <div className={Styles.fifdiv6}>
          <img src="https://www.testyantraglobal.com/_next/image/?url=%2Fimages%2Fflags%2Findia.jpg&w=128&q=75" alt="" />
          <h2>India</h2>
          <h3>#88, 3rd Floor, Brigade Chambers, Gandhi <br />Bazaar Main Rd, Basavanagudi, Bangalore- <br /> 560004 Karnataka, India</h3>
         
          <h3>Ph: 1800 203 9989</h3>
      </div>
      </div>
      <div className={Styles.eighthcontainer}>
      <div className={Styles.eighthcontainer1}>
        <img src="https://www.testyantraglobal.com/_next/image/?url=%2Fimages%2Fcircle-map.png&w=750&q=75" alt="" />
        <div className={Styles.eighthcontainer2}>
          <div className={Styles.eighthcontainer3}>
            <h1 className={Styles.h1sub}>Subscribe to our Newsletter!</h1>
          </div>
          </div>
          <div className={Styles.inpbtn}> 
           <input type="Text" placeholder='Enter Your Business Email' className={Styles.inp1}/>
        <button className={Styles.subbtn}>Subscribe</button>
            </div>
          <div className={Styles.ninethcontainer}>
            <div className={Styles.ninethcontainer1}>
              <div className={Styles.imgcon}>
              <img src="https://www.testyantraglobal.com/images/partnerlogo2.svg" alt="" />
              </div>
              <div className={Styles.conleft}>
              <p>Test Yantra Global is an Exclusive <br /> Platinum Partner of FireFlink.</p><br />
              <p>Let's get socially connected...</p>
              <div className={Styles.ninethcontainer11}> 
              <BsLinkedin />
              <FaYoutube />
              <FaTwitter />
              <FaFacebookSquare />
              <RiInstagramFill />
              </div>
            </div>
            </div>
            <div className={Styles.ninethcontainer2}>
              <div className={Styles.secconfoot}>
              <h1>Services</h1>
              </div><br />
              <p>Software Testing (TaaS)</p>
              <p>Software Development</p>
              <p>Software Development</p>
              <p>IT Consulting</p>
              <p>Crowd Testing</p>
            </div>
            <div className={Styles.ninethcontainer3}>
              <div>
              <h1>Quick Links</h1>
              </div><br />
              <p>About Us</p>
              <p>Fireflink</p>
              <p>Article</p>
              <p>Contact</p>
            </div>
            <div className={Styles.ninethcontainer4}>
              <div >
              <h1>Contacts</h1>
              </div><br />
              <p>Address:120 Adelaide Street</p>
              <p>West,</p>
              <p>Suite 2500, Toronto, ON, M5H 1T1,</p>
              <p>Canada.</p>
              <p >Email:hello@testyantraglobal.com</p>
              <p>Phone:1800 572 7905</p>
            </div>
            </div>
          <div className={Styles.footer}>
            <p>Copyright ©2024 Test Yantra Global. All rights reserved</p>
          </div>
            </div>
          </div>
    </>
  )
}

export default GetInTouch
