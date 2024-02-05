import {React} from 'react'
import style from './Footer.module.css'
import { FaMapMarkerAlt, FaEnvelope, FaFacebookF, FaTwitter } from 'react-icons/fa'
import { BsFillTelephoneFill, BsInstagram } from 'react-icons/bs'
import { IoIosArrowForward } from 'react-icons/io'
import { FaLinkedinIn } from 'react-icons/fa6'

export default function Footer() {

  

  return (
      <div>
        {/* Footer Start */}
        <div className={`${style.footer} container-fluid    `} >
          <div className="container py-5">
            <div className="row g-5">
              {/* Get In Touch div */}
              <div className="col-lg-5 col-md-6 text-light"   >
                <h4 className={`${style.Headar} d-inline-block  text-uppercase  mb-4  pb-2`}>Get In Touch</h4>
                <div className=' col-md-7 col-6 '>  <p className={`${style.write} mb-4 `}> Open doors to collaboration. Share ideas, thoughts, and experiences. Foster meaningful relationships.</p></div>
                <p className={`${style.write} mb-2`}><FaMapMarkerAlt className='me-3  d-inline text-danger   ' />Palestin</p>
                <p className={`${style.write} mb-2`}><FaEnvelope className='me-3  d-inline text-danger ' />info@example.com</p>
                <p className={`${style.write} mb-2`}><BsFillTelephoneFill className='me-3  d-inline text-danger ' />+012 345 67890</p>
              </div>
              {/* Quick Links div */}
              <div className="col-lg-3 col-md-6"  >
                <h4 className={`${style.Headar} d-inline-block  text-uppercase  mb-4  pb-2`}>Quick Links</h4>
                <div className="d-flex flex-column justify-content-start">
                  <a className={`${style.write} text-light mb-2`} href="/" ><IoIosArrowForward className='me-2  d-inline' />Home</a>
                  <a className={`${style.write} text-light mb-2`} href="about"><IoIosArrowForward className='me-2  d-inline' />About Us</a>
                  <a className={`${style.write} text-light mb-2`} href="#"><IoIosArrowForward className='me-2  d-inline' />Our Services</a>
                  <a className={`${style.write} text-light mb-2`} href="#"><IoIosArrowForward className='me-2  d-inline' />Meet The Team</a>
                  <a className={`${style.write} text-light `} href="contact"><IoIosArrowForward className='me-2  d-inline' />Contact Us</a>
                </div>
              </div>
              {/* Follow Us div */}
              <div className="col-lg-4 col-md-6"   >
                <h4 className={`${style.Headar} d-inline-block  text-uppercase  mb-4 pb-2 `}>Follow Us</h4>
                <div className="d-flex">
                  <a className={`${style.icon1} btn btn-lg bg-light btn-lg-square rounded-circle me-2 p-3 pt-3`} href="https://www.facebook.com/"><FaFacebookF /></a>
                  <a className={`${style.icon2} btn btn-lg bg-light btn-lg-square rounded-circle me-2 p-3 pt-3`} href="https://twitter.com/"><FaTwitter /></a>
                  <a className={`${style.icon3} btn btn-lg bg-light btn-lg-square rounded-circle me-2 p-3 pt-3`} href="https://www.linkedin.com/"><FaLinkedinIn /></a>
                  <a className={`${style.icon4} btn btn-lg bg-light btn-lg-square rounded-circle me-2 p-3 pt-3`} href="https://www.instagram.com/?hl=en"><BsInstagram /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${style.footer} container-fluid text-light border-top border-secondary py-4  `}>
          <div className="container ">
            <div className="row g-5">
              <div className="col-md-6 text-center text-md-start">
                <p className="mb-md-0">© <a className={`${style.write} text-danger`} href="#">Emergency Medical System</a>. All Rights Reserved.</p>
              </div>
              <div className="col-md-6 text-center ">
                <p className={`${style.write} text-light mb-0`}>Designed by <a className={`${style.write} text-danger `} href="#">Graduation Team</a></p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer End */}
      </div>
  )
}
