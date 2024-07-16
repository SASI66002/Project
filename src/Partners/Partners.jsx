import React from 'react'
import Styles from "./Partners.module.css"
import { FaArrowRightLong } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Partners = () => {
  return (<>
    <div className={Styles.topdiv}>
      <img src="https://www.testyantraglobal.com/images/fireflink.jpg" alt="" />
    </div>
    <div className={Styles.secdiv}>
      <h1>FireFlink Solutions</h1>
      <p>FireFlink is an all-in-one solution that comes with a simple interface, enabling effortless automation for everyone.</p>
    </div>
    <div className={Styles.thirdcon}>
    <div className={Styles.thirddiv}>
      <div className={Styles.thirddiv1}>
        <img src="https://www.testyantraglobal.com/_next/image/?url=%2Fimages%2FwebAutomation.png&w=256&q=75" alt="" />
        <h3>WEB AUTOMATION TESTING</h3>
        <p>The automation of web applications is moving <br />towards a codeless approach using straightforward <br />NLP-based scripts that can easily handle various <br />actions and verifications. FireFlink combines all the <br /> commonly used test automation framework types <br /> and more, making it the ideal solution</p>
      </div>
      <div className={Styles.thirddiv2}>
        <img src="https://www.testyantraglobal.com/_next/image/?url=%2Fimages%2FmobileAutomation.png&w=256&q=75" alt="" />
        <h3>MOBILE AUTOMATION TESTING</h3>
        <p>Web application automation is moving towards <br />processes that do not require coding, instead relying <br /> on easy-to-use NLP-based scripts to manage <br /> various actions and verifications. FireFlink <br />incorporates a wide range of test automation <br /> frameworks, as well as additional features, to create <br />the ideal solution.</p>
      </div>
      <div className={Styles.thirddiv3}>
        <img src="https://www.testyantraglobal.com/_next/image/?url=%2Fimages%2FapiAutomation.png&w=256&q=75" alt="" />
        <h3>API Automation Testing</h3>
        <p>Effortlessly generate test scripts for Web Services. Our <br /> Web Service testing solution enables you to rapidly <br />and thoroughly test the intricate layers of Web <br />Services in just a matter of minutes. Get ready to dive <br />deep into testing with ease.</p>
      </div>
      <div className={Styles.thirddiv4}>
        <img src="https://www.testyantraglobal.com/_next/image/?url=%2Fimages%2FVisualTesting.png&w=256&q=75" alt="" />
        <h3>Visual Testing</h3>
        <p>The familiarity of developers, marketers, and product <br /> owners with a website may cause them to overlook <br />issues that actual users may notice. It is crucial to <br />gather such feedback from real users as it helps <br /> improve the quality of products and services offered <br />to customers. FireFlink provides convenient solutions <br /> for UX testing.</p>
      </div>
      <div className={Styles.thirddiv5}>
        <img src="https://www.testyantraglobal.com/_next/image/?url=%2Fimages%2FUiPerformance.png&w=256&q=75" alt="" />
        <h3>UI Performance Testing</h3>
        <p>The quality of a website or app's user interface <br /> directly affects its success. With FireFlink's visual <br /> testing capabilities, users can discover efficient <br /> testing techniques that enhance the usability of the <br /> user interface and eliminate any problems that could <br />cause customer dissatisfaction.</p>
      </div>
      <div className={Styles.thirddiv6}>
        <img src="https://www.testyantraglobal.com/_next/image/?url=%2Fimages%2FmanualTesting.png&w=256&q=75" alt="" />
        <h3>Manual Test Case management</h3>
        <p>FireFlink simplifies the management of manual test <br /> cases by offering a user-friendly interface that <br /> enables test engineers to easily understand and fulfill <br /> testing requirements. It allows for efficient test case <br /> management by providing a one-to-one mapping of <br /> manual test case entries with their corresponding <br />automation test scripts.</p>
      </div>
      <div className={Styles.thirddiv7}>
        <img src="https://www.testyantraglobal.com/_next/image/?url=%2Fimages%2FDefectManagement.png&w=256&q=75" alt="" />
        <h3>Defect Management</h3>
        <p>FireFlink's defect management system offers <br />essential feedback to enhance the software <br /> development process. It provides a reliable solution <br /> for tracking bugs and ensuring software quality <br />assurance, enabling smooth software releases.</p>
      </div>
    </div>
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

export default Partners
