import React, { useEffect } from 'react'
import style from "./Contact.module.css"
import { IoIosArrowForward } from 'react-icons/io'
import "transition-style";
import Aos from 'aos';
import 'aos/dist/aos.css'

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);

    Aos.init(
      { duration: 1000 },
    );
  }, []);


  return (
    <>
      {/* part1 */}

      <div className={`${style.Contact} container-fluid   py-lg-5  `} transition-style="in:wipe:down">
        <div className="container pb-5 pt-4 ">
          <div className="row justify-content-center ">
            <div className="col-lg-8 text-center text-lg-center  ">
              <h1 className={`${style.contactUs}  mb-md-4 mt-4 text-capitalize  pt-5   text-light`}>Contact Us</h1>
              <h5 className={`${style.write} text-light mb-5 text-capitalize`} href="#"><IoIosArrowForward className='me-2  d-inline pb-1 ' />how we can help you ?</h5>
            </div>
          </div>
        </div>
      </div>
      {/* end part1 */}

      {/* part 2 */}
      <div className={`${style.part2} container-fluid pt-5 pb-5`}>
        <div className="container pt-5">
          <div className="text-center mx-auto mb-5 pt-5" style={{ maxWidth: 500 }}
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="700">
            <h1 className={`${style.best} display-4 pt-5`}>Please Feel Free To Contact Us</h1>
          </div>
          <div className="row g-5   py-5">
            {/* email div */}
            <div className="col-lg-4 col-md-4 col-12" data-aos="zoom-in">
              <div className={`${style.service}  rounded d-flex flex-column align-items-center justify-content-center text-center   pt-4 `}>
                <div className={`${style.serviceicon} mb-4 `}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 384 512" className={`${style.svg}    d-inline `} xmlns="http://www.w3.org/2000/svg">
                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" /></svg>
                </div>
                <h4 className={`${style.serContain} mb-2`}>Email Us:</h4>
                <p className={`${style.inService} m-0  pb-5 px-5 text-dark`}>info@example.com</p>
              </div>
            </div>
            {/* call us div */}
            <div className="col-lg-4 col-12 col-md-4" data-aos="zoom-in">
              <div className={`${style.service} rounded d-flex flex-column align-items-center justify-content-center text-center pt-4`}>
                <div className={`${style.serviceicon} mb-4 `}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className={`${style.svg1}    d-inline `} xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" /></svg>
                </div>
                <h4 className={`${style.serContain} mb-2`}>Call Us:</h4>
                <p className={`${style.inService} m-0  pb-5 px-5 text-dark`}>+012 345 6789</p>
              </div>
            </div>
            {/* Our Address div */}
            <div className="col-lg-4 col-12 col-md-4" data-aos="zoom-in">
              <div className={`${style.service} rounded d-flex flex-column align-items-center justify-content-center text-center  pt-4`}>
                <div className={`${style.serviceicon} mb-4`}>
                  <svg stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true" className={`${style.svg2}    d-inline `} xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" /></svg>
                </div>
                <h4 className={`${style.serContain} mb-2`}>Our Address:</h4>
                <p className={`${style.inService} m-0  pb-5 px-5 text-dark `}>Palestine</p>
              </div>
            </div>
          </div>
          {/* end part2 */}

          {/* part3 */}
          <div className="row py-5" >
            <div className="col-12" style={{ height: 500 }}>
              <div className="position-relative h-150 pt-5" >
                <iframe className="position-relative w-100 h-150" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d866403.9218787658!2d34.44961654187699!3d31.977432920928457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151cf2d28866bdd9%3A0xee17a001d166f686!2sPalestine!5e0!3m2!1sen!2s!4v1701100195791!5m2!1sen!2s" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
          {/* end part3 */}
        </div>
      </div>

    </>
  )
}
