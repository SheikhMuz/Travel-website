import React,{useEffect} from 'react'
import './Footer.css'
import video3 from '../../Assests/video3.mp4'
import {FiSend} from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {FiChevronRight} from 'react-icons/fi'

import Aos from 'aos'
import  'aos/dist/aos.css'


const Footer = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
      },[])


  return (
   <section className='footer'>
    <div className="videoDiv">
      <video src={video3} loop autoPlay muted type="Video/mp4"></video>
    </div>

    <div className="secContent container">
      <div className="contactDiv flex">
        <div data-Aos="fade-up"  className="text">
          <small>KEEP IN TOUCH</small>
          <h2>Travel with Us</h2>
        </div>

        <div className="inputDiv flex">
          <input data-Aos="fade-up"  className="text" placeholder='Enter Email Address'/>
          <button data-Aos="fade-up"  className='btn flex' type='submit'>SEND
          <FiSend className="icon"/>
          </button>

          
        </div>
      </div>

      <div className="footerCard flex">
        <div className="footerIntro flex">
          <a href="#" className='logo flex'>
          <MdOutlineTravelExplore className="icon"/> Travel.</a>

          <div data-Aos="fade-up"   className="footerParagraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aliquam fuga, accusantium dicta consequuntur soluta laborum itaque aperiam ad odit rem dolores. Molestiae eum asperiores obcaecati, labore atque pariatur quasi?

        </div>
        <div data-Aos="fade-up"  className="footerSocials">
          <AiOutlineTwitter className="icon"/>
          <AiFillYoutube className="icon"/>
          <AiFillInstagram className="icon "/>
        </div>
        </div>

        <div className="footerLinks grid">
          <div data-Aos="fade-up" data-Aos-duration="4000" className="linkGroup">
            <span className="groupTitle">
              OUR AGENCY
            </span>

            <li className="footerList flex">
              <FiChevronRight className="icon"></FiChevronRight>
              Services.
            </li>

            
            <li className="footerList flex">
              <FiChevronRight className="icon"></FiChevronRight>
              Insurance
            </li>

            
            <li className="footerList flex">
              <FiChevronRight className="icon"></FiChevronRight>
              Agency
            </li>

            
            <li className="footerList flex">
              <FiChevronRight className="icon"></FiChevronRight>
              Tourism
            </li>
            
            <li className="footerList flex">
              <FiChevronRight className="icon"></FiChevronRight>
              Payment.
            </li>
          </div>

          {/* Group Two*/}
          <div data-Aos="fade-up" data-Aos-duration="4000"  className="linkGroup">
            <span className="groupTitle">
              PARTNERS
            </span>

            <li className="footerList flex">
              <FiChevronRight className="icon"></FiChevronRight>
              Bookings
            </li>

            
            <li className="footerList flex">
              <FiChevronRight className="icon"></FiChevronRight>
              RentCars
            </li>

            
            <li className="footerList flex">
              <FiChevronRight className="icon"></FiChevronRight>
              Hostel
            </li>

            
            <li className="footerList flex">
              <FiChevronRight className="icon"></FiChevronRight>
              Trivago
            </li>
            
            <li className="footerList flex">
              <FiChevronRight className="icon"></FiChevronRight>
              TripAdvisor
            </li>
          </div>

          {/*Group Three */}
          <div data-Aos="fade-up" data-Aos-duration="4000" className="linkGroup">
            <span className="groupTitle">
              LAST MINUTE
            </span>

            <li className="footerList flex">
              <FiChevronRight className="icon"></FiChevronRight>
              London
            </li>

            
            <li className="footerList flex">
              <FiChevronRight className="icon"></FiChevronRight>
              California
            </li>

            
            <li className="footerList flex">
              <FiChevronRight className="icon"></FiChevronRight>
              Indonesia
            </li>

            
            <li className="footerList flex">
              <FiChevronRight className="icon"></FiChevronRight>
              Europe
            </li>
            
            <li className="footerList flex">
              <FiChevronRight className="icon"></FiChevronRight>
              Oceania
            </li>
          </div>



        </div>

        <div className="footerDiv flex">
          <small>BEST Travel Website </small>
          <small>CopyRights Reserved- Sheikh</small>
        </div>

        
      </div>
    </div>

   </section>
  )
}

export default Footer