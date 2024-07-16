import React from 'react'
import Styles from "./Home.module.css"
import { TypeAnimation } from 'react-type-animation';
import { FaArrowRightLong } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CountUp from 'react-countup';
import { BsLinkedin } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";


const Home = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoSpeed:1000
  };
  return (
    <>
      <div className={Styles.topcontainer}>
        <div className={Styles.sidecontainer}>
      <Slider {...settings}>
      <div className={Styles.imgfont}>
      <img src="https://www.testyantraglobal.com/images/banner1.png" alt="" />
      <h2>Turn your Manual Testers  <br /> into Automation Testers </h2>  
           </div>
      <div>
      <img src="https://www.testyantraglobal.com/images/banner2.png" alt="" />
           </div>
      <div>
      <img src="https://www.testyantraglobal.com/images/banner3.png" alt="" />
      </div>
    </Slider>
         </div>
      <h1 className={Styles.h1top}>With Test Yantra Global</h1>
      <TypeAnimation sequence={[
        'Accelerate Bussiness Efficiency..',
        1000, 
        'Achieve Digital Transformation..',
        1000,
        'Drive AI Automation Testing..',
        1000,
        'Build Custom Applications..',
        1000,
        'Realize Cost-Effective Testing..',
        1000,
        'Unify Web, Mobile, API, and DB Testing..',
        1000,
        "Access 1,000's of expert Test Engineers..",
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block',color:"#f27f3d",fontSize:"35px",fontStyle:"normal",fontWeight:800,fontFamily:"sans-serif" }}
      repeat={Infinity} />
      <p className={Styles.p1}>Test Yantra Global's 5,000+ employees provide a range of innovative technology <br /> solutions to digitally transform your organization.</p>
      <p className={Styles.p2}>From IT consulting, application design and development, to automated AI enabled test <br /> management platform that unifies web, android, iOS, API, and DB testing, we have the <br /> expertise, technology, experience, and tools to help transform your business.</p>
      <button className={Styles.btn1}>Get Started Free <FaArrowRightLong/></button>
      </div>
          <div className={Styles.thirdcontainer}>
          <div className={Styles.secondcontainer}>
        <h1 style={{display:"flex",justifyContent:"center",fontWeight:"800",fontFamily:"sans-serif",color:"#162d52",gap:"30px"}}>Leverage Test Yantra Global's range</h1>    
          <h1 style={{display:"flex",justifyContent:"center",fontFamily:"sans-serif",fontWeight:"800",color:"#162d52"}}> of Professional Services</h1>
          </div>
          < div className={Styles.smallcontainerborder}>  
          <div className={Styles.smallcontainer1}> 
            <img src="https://www.testyantraglobal.com/_next/image/?url=%2Fimages%2FTaas.png&w=256&q=75" alt="" />
            <h3 className={Styles.smc1}>Software Testing <br /> Services (Taas)</h3>
            <p>We offer cost-effective,<br />reliable and scalable <br />software testing services.</p>
          </div>
          <div className={Styles.smallcontainer2}>
            <img src="https://www.testyantraglobal.com/_next/image/?url=%2Fimages%2FIT.png&w=256&q=75" alt="" />       
            <h3 className={Styles.smc1}>IT Software Skills Enhancement</h3>
            <p>Our customized and <br /> curated training models <br /> help organizations evaluate <br /> their IT quotient.</p>
          </div>
          <div className={Styles.smallcontainer3}>
            <img src="https://www.testyantraglobal.com/_next/image/?url=%2Fimages%2FDSS.png&w=256&q=75" alt="" />
            <h3 className={Styles.smc1}>Deployment & <br /> Support Services</h3>
            <p>Our team of experts help <br /> you craft a winning IT <br /> stratergy for your <br /> organization.</p>
          </div>
          <div className={Styles.smallcontainer4}>
            <img src="https://www.testyantraglobal.com/_next/image/?url=%2Fimages%2FSDD.png&w=256&q=75" alt="" />
            <h3 className={Styles.smc1}>Software Design & Development</h3>
            <p>We deliver IT solution in a wide variety of verticals and elevate businesses to the next level.</p>
          </div>
          <div className={Styles.smallcontainer5}>
            <img src="https://www.testyantraglobal.com/_next/image/?url=%2Fimages%2Ficons%2FcrowdTesting.png&w=256&q=75" alt="" />
            <h3 className={Styles.smc1}>Crowd Testing</h3>
          <p>We offer comprehensive <br /> crowd-testing services,<br /> leveraging a global <br /> network of skilled testers.</p>
          </div>
      </div>
          <div className={Styles.fourthcontainer}>
            {/* <img src="https://www.testyantraglobal.com/images/video-thumbnail5.png" alt="" /> */}
          <iframe width="560" height="315" src="https://www.youtube.com/embed/tuwxrL7Kh4E?si=P8EgY7WNeF53PgEZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>      
      </div>
      <div style={{marginTop:"100px",fontSize:"25px",fontWeight:800,fontFamily:"Poppins",display:"flex",justifyContent:"center"}}>
        <h1 className={Styles.h1third}>The numbers speak for themselves</h1>
      </div>
      <div className={Styles.sixthcontainer}>
        <div className={Styles.sixthcontainer1}>
          <img src="https://www.testyantraglobal.com/_next/image/?url=%2Fimages%2Flocation.png&w=256&q=75" alt="" />
          <h2><CountUp start={1} end={6} duration={4}/></h2>
          <h3>Countries & <br /> Growing</h3>
        </div>
        <div className={Styles.sixthcontainer2}>
          <img src="https://www.testyantraglobal.com/_next/image/?url=%2Fimages%2FClientAcrossGlobe.png&w=256&q=75" alt="" />
          <h2><CountUp start={1} end={3000} duration={4} suffix='+'/></h2>
          <h3>Clients Across Globe</h3>
        </div>
        <div className={Styles.sixthcontainer3}>
          <img src="https://www.testyantraglobal.com/_next/image/?url=%2Fimages%2FClientAcrossGlobe.png&w=256&q=75" alt="" />
          <h2><CountUp start={1} end={5000} duration={4} suffix='+'/></h2>
          <h3>Total Team <br /> Members</h3>
        </div>
        <div className={Styles.sixthcontainer4}>
          <img src="https://www.testyantraglobal.com/_next/image/?url=%2Fimages%2FOnDemandEngineers.png&w=256&q=75" alt="" />
          <h2><CountUp start={1} end={12000} duration={4} suffix='+'/></h2>
          <h3>On Demand Test <br /> Engineers</h3>
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

export default Home



