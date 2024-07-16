import React from 'react'
import Styles from "./Services.module.css"
import { FaArrowRightLong } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";


const Services = () => {
  return (
    <>
      <div className={Styles.con1}>
      <img src="https://www.testyantraglobal.com/images/SoftwareTestingTaas.jpg" alt="" />
    </div>
    <div className={Styles.con2}>
      <h1>Leverage two decades of Testing Expertise</h1>
      <p>Our testing center of excellence (CoE) provides a unified solutions for web, android, ios, API, and databases.</p>
    </div>
    <div className={Styles.con3}>
      <div className={Styles.con31}>
        <div className={Styles.con311}>
        <img src="https://www.testyantraglobal.com/_next/image/?url=%2Fimages%2FManageQA.png&w=256&q=75" alt="" />
        <h1>Managed QA</h1>
        <p>Our team of IT consultants and managed services <br /> experts provide timely consulting, software <br/> configuration, deployment, and support for an array <br /> of cloud and premise based applications.</p>
        <p></p>
      </div>
      </div>
      <div className={Styles.con32}>
        <div className={Styles.con322}>
        <img src="https://www.testyantraglobal.com/_next/image/?url=%2Fimages%2FCrowdTesting.png&w=256&q=75" alt="" />
        <h1>Crowd Testing</h1>
        <p>Crowdsourced Testing is a necessity and important <br /> solution for companies that are launching time- <br />sensitive products, such as mobile applications and <br /> web-based platforms with UI, UX issues and software <br /> bugs.</p>
        </div>
      </div>
      <div className={Styles.con33}>
      <div className={Styles.con333}>
        <img src="https://www.testyantraglobal.com/_next/image/?url=%2Fimages%2FTestingSolution.png&w=256&q=75" alt="" />
        <h1>Testing Solutions</h1>
        <p>Test Yantra Global offers a suite of software testing <br /> tools, methodology, and resources aimed at <br />enhancing the quality assurance of your applications <br />including testing services like automation,<br /> performance, application and security testing.</p>
      </div>
    </div>
    </div>
    <div className={Styles.iframe}>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/iGjTFB6C6tY?si=Hs8yjSmYQQDrKaKi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    <div className={Styles.seventhcontainer}>
      <h1>Our Recent Articles</h1>

      <div className={Styles.seventhcontainer1}>
        <div className={Styles.seventhcontainer2}>
          <img src="https://www.testyantraglobal.com/_next/image/?url=%2Fimages%2Fblog%2Fblog15.jpg&w=1080&q=75" alt="" />
          <p>Blog | Categories of Tests</p>
          <h3>Guidelines for Writing <br /> Effective Unit Tests</h3>
          <h5>Learn effective unit testing techniques to <br /> enhance code quality and development <br /> speed. Discover essential tools...</h5>
          <button>Read More <FaArrowRightLong /></button>
        </div>
        <div className={Styles.seventhcontainer3}>
          <img src="https://www.testyantraglobal.com/_next/image/?url=%2Fimages%2Fblog%2Fblog14.jpg&w=1080&q=75" alt="" />
          <p>Blog | Test Data</p>
          <h3>Automation Testing Tools: <br /> Selenium,Sypress, <br/> Playwright,Robot <br /> Framework Vs.FireFlink  </h3>
          <h5>Dive into the specifics of renowned <br /> automation tools like Selenium, Cypress,<br /> Playwright, and Robot Framework...</h5>
          <button>Read More <FaArrowRightLong /></button>
        </div>
        <div className={Styles.seventhcontainer4}>
          <img src="https://www.testyantraglobal.com/_next/image/?url=%2Fimages%2Fblog%2Fblog13.jpg&w=1080&q=75" alt="" />
          <p>Blog | UI Element Locator</p>
          <h3>Understanding Software <br /> Testing Life Cycle</h3>
          <h5>Make the switch to automation testing <br /> effortlessly with FireFlink's tailored <br /> solutions, empowering your QA team...</h5>
          <button>Read More <FaArrowRightLong /></button>
        </div>
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

export default Services
