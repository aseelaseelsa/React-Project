import React, { useEffect } from 'react'
import style from './Home.module.css'
import Slider from "react-slick";
import { FaPills, FaAmbulance, FaFacebookF, FaTwitter } from 'react-icons/fa'
import { FaUserDoctor, FaLinkedinIn, FaBedPulse, FaMicroscope } from 'react-icons/fa6'
import "transition-style";
import Aos from 'aos';
import 'aos/dist/aos.css'
export default function Home() {

  // For Slider
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  useEffect(() => {
    Aos.init(
      { duration: 1000 },
    );
    window.scrollTo(0, 0);
  }, [])


  return (
    <>
      {/* first Part */}
      <div className={`${style.home} container-fluid   py-lg-5 `} transition-style="in:wipe:down">
        <div className="container ">
          <div className="row justify-content-start ">
            <div className="col-lg-8 text-center  text-lg-start">
              <h5 className={`${style.give}  d-inline-block  text-uppercase  mx-2 pt-5 pb-2`}>We give you the best!</h5>

              <h1 className={`${style.exportTime}  mb-md-4 mt-4 text-capitalize  pt-4 `}>Emergency Medical System</h1>
              <div class="py-5 ">
                <a className={`${style.button} me-2 rounded-2 `} href='#About'>Learn More</a>
                <a className={`${style.button2}  rounded-2 `} href='#Paramedic'>Our Paramedics</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Us part */}
      <div className={`${style.about} container-fluid `} id='About'>
        <div className="container pb-5 " >
          <div className="row gx-5">
            <div className="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: 500 }} data-aos="fade-right">
              <div className="position-relative h-100  ">
                <img className="position-absolute w-100 h-100  rounded " src="img/ambu.png" />
              </div>
            </div>
            <div className="col-lg-7" >
              <div className="mb-4 pt-3" data-aos="fade-down">
                <h5 className={`${style.Headar} d-inline-block  text-uppercase pb-1 `}>About Us</h5>
                <h1 className={`${style.best} display-4 pt-2 `}>Best Services For Yourself and Your Family</h1>
              </div>
              <p className={style.thePrimary} data-aos="fade-down">The primary responsibility of the ambulance crew staff is to transport the injured person immediately and transmit details about the first aid provided at the scene of the accident through our application. The information is transmitted to the hospital faster before the ambulance arrives, which contributes to saving the patient’s life.</p>
              <div className="row g-3 pt-3">

                <div className="col-sm-3 col-6  "
                  data-aos="fade-up"
                  data-aos-duration="700">
                  <div className={`${style.aboutIconDiv} text-center rounded-circle py-4`}>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="undefined fs-2" className={style.aboutsvg1} xmlns="http://www.w3.org/2000/svg">
                      <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-96 55.2C54 332.9 0 401.3 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-81-54-149.4-128-171.1V362c27.6 7.1 48 32.2 48 62v40c0 8.8-7.2 16-16 16H336c-8.8 0-16-7.2-16-16s7.2-16 16-16V424c0-17.7-14.3-32-32-32s-32 14.3-32 32v24c8.8 0 16 7.2 16 16s-7.2 16-16 16H256c-8.8 0-16-7.2-16-16V424c0-29.8 20.4-54.9 48-62V304.9c-6-.6-12.1-.9-18.3-.9H178.3c-6.2 0-12.3 .3-18.3 .9v65.4c23.1 6.9 40 28.3 40 53.7c0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.4 16.9-46.8 40-53.7V311.2zM144 448a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"></path></svg>
                    <h6 className={`${style.write} mb-0  pt-2`}>Qualified<small className={`${style.small} d-block`}>Paramedics</small></h6>
                  </div>
                </div>
                <div className="col-sm-3 col-6  " data-aos="fade-up"
                  data-aos-duration="700">
                  <div className={`${style.aboutIconDiv} text-center rounded-circle py-4`}>

                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 640 512" className={style.aboutsvg2} xmlns="http://www.w3.org/2000/svg">
                      <path d="M483.2 9.6L524 64h92c13.3 0 24 10.7 24 24s-10.7 24-24 24H512c-7.6 0-14.7-3.6-19.2-9.6L468.7 70.3l-47 99.9c-3.7 7.8-11.3 13.1-19.9 13.7s-16.9-3.4-21.7-10.6L339.2 112H216c-13.3 0-24-10.7-24-24s10.7-24 24-24H352c8 0 15.5 4 20 10.7l24.4 36.6 45.9-97.5C445.9 6.2 453.2 1 461.6 .1s16.6 2.7 21.6 9.5zM320 160h12.7l20.7 31.1c11.2 16.8 30.6 26.3 50.7 24.8s37.9-13.7 46.5-32L461.9 160H544c53 0 96 43 96 96V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V448H352 320 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V96C0 78.3 14.3 64 32 64s32 14.3 32 32V352H288V192c0-17.7 14.3-32 32-32zm-144 0a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" /></svg>
                    <h6 className={`${style.write} mb-0  pt-2`}>Emergency<small className={`${style.small} d-block`}>Services</small></h6>
                  </div>
                </div>

                <div className="col-sm-3 col-6  " data-aos="fade-up"
                  data-aos-duration="700">
                  <div className={`${style.aboutIconDiv} text-center rounded-circle py-4`}>

                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className={style.aboutsvg} xmlns="http://www.w3.org/2000/svg">
                      <path d="M160 32c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32c17.7 0 32 14.3 32 32V288c0 17.7-14.3 32-32 32c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32zM32 448H320c70.7 0 128-57.3 128-128s-57.3-128-128-128V128c106 0 192 86 192 192c0 49.2-18.5 94-48.9 128H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H320 32c-17.7 0-32-14.3-32-32s14.3-32 32-32zm80-64H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z" /></svg>

                    <h6 className={`${style.write} mb-0  pt-2`}>Accurate<small className={`${style.small} d-block`}>Testing</small></h6>
                  </div>
                </div>
                <div className="col-sm-3 col-6  " data-aos="fade-up"
                  data-aos-duration="700">
                  <div className={`${style.aboutIconDiv} text-center rounded-circle py-4`}>

                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 640 512" className={style.aboutsvg4} xmlns="http://www.w3.org/2000/svg">
                      <path d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm144-248c0 4.4-3.6 8-8 8h-56v56c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-56h-56c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h56v-56c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v56h56c4.4 0 8 3.6 8 8v48zm176 248c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z" /></svg>

                    <h6 className={`${style.write} mb-0  pt-2`}>Free<small className={`${style.small} d-block`}>Ambulance</small></h6>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>

      {/* servcies part */}
      <div className={`${style.servcies} container-fluid py-5 `} >
        <div className="container  pt-3 pb-5 ">
          <div className="text-center mx-auto mb-5 pt-4"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="700">
            <h5 className={`${style.Headar} d-inline-block  text-uppercase pb-2 `}>Services</h5>

            <h1 className={`${style.excellent} display-4 py-2 `}>Excellent Medical Services</h1>
          </div>
          <div className="row g-5 d-flex  ">
            <div className="col-lg-4 col-12 " data-aos="zoom-in">
              <div className={`${style.service}  rounded d-flex flex-column align-items-center justify-content-center text-center   pt-4 `}>
                <div className={`${style.serviceicon} mb-4 `}>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="undefined fs-2" className={`${style.svg}   `} xmlns="http://www.w3.org/2000/svg">
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-96 55.2C54 332.9 0 401.3 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-81-54-149.4-128-171.1V362c27.6 7.1 48 32.2 48 62v40c0 8.8-7.2 16-16 16H336c-8.8 0-16-7.2-16-16s7.2-16 16-16V424c0-17.7-14.3-32-32-32s-32 14.3-32 32v24c8.8 0 16 7.2 16 16s-7.2 16-16 16H256c-8.8 0-16-7.2-16-16V424c0-29.8 20.4-54.9 48-62V304.9c-6-.6-12.1-.9-18.3-.9H178.3c-6.2 0-12.3 .3-18.3 .9v65.4c23.1 6.9 40 28.3 40 53.7c0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.4 16.9-46.8 40-53.7V311.2zM144 448a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"></path></svg>
                </div>
                <h4 className={`${style.serContain} mb-3`}>Emergency Care</h4>
                <p className={`${style.inService} m-0 py-2 pb-5 px-5`}>Life-saving medical attention for sudden, critical conditions, delivered by trained professionals.</p>
              </div>
            </div>

            <div className="col-lg-4 col-12 " data-aos="zoom-in">
              <div className={`${style.service} rounded d-flex flex-column align-items-center justify-content-center text-center pt-4`}>
                <div className={`${style.serviceicon} mb-4 `}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 640 512" className={`${style.svg}   `} xmlns="http://www.w3.org/2000/svg">
                    <path d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm144-248c0 4.4-3.6 8-8 8h-56v56c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-56h-56c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h56v-56c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v56h56c4.4 0 8 3.6 8 8v48zm176 248c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z" /></svg>
                </div>
                <h4 className={`${style.serContain} mb-3`}>Ambulance Service</h4>
                <p className={`${style.inService} m-0 py-2 pb-5 px-5`}>Providing rapid transportation of patients to hospitals and ensuring critical emergency care.</p>
              </div>
            </div>

            <div className="col-lg-4 col-12 " data-aos="zoom-in">
              <div className={`${style.service} rounded d-flex flex-column align-items-center justify-content-center text-center  pt-4`}>
                <div className={`${style.serviceicon} mb-4`}>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" class="undefined" className={`${style.svg}   `} xmlns="http://www.w3.org/2000/svg">
                    <path d="M112 32C50.1 32 0 82.1 0 144v224c0 61.9 50.1 112 112 112s112-50.1 112-112V144c0-61.9-50.1-112-112-112zm48 224H64V144c0-26.5 21.5-48 48-48s48 21.5 48 48v112zm139.7-29.7c-3.5-3.5-9.4-3.1-12.3.8-45.3 62.5-40.4 150.1 15.9 206.4 56.3 56.3 143.9 61.2 206.4 15.9 4-2.9 4.3-8.8.8-12.3L299.7 226.3zm229.8-19c-56.3-56.3-143.9-61.2-206.4-15.9-4 2.9-4.3 8.8-.8 12.3l210.8 210.8c3.5 3.5 9.4 3.1 12.3-.8 45.3-62.6 40.5-150.1-15.9-206.4z"></path></svg>
                </div>
                <h4 className={`${style.serContain} mb-3`}>Medicine & Pharmacy</h4>
                <p className={`${style.inService} m-0 py-2 pb-5 px-5`}>Advancing healthcare by providing treatments and managing health conditions effectively.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* paramedic part */}
      <div className={`${style.paramedic} pt-5 pb-5  `} >
        <div className='container-md '>
          <div className="text-center mx-auto mb-5 " style={{ maxWidth: 500 }}
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="700"
            id='Paramedic'>
            <h5 className={`${style.Headar} d-inline-block  text-uppercase pb-2`}>Our Paramedics</h5>
            <h1 className={`${style.best} display-4 py-2 `}>Qualified Healthcare Professionals</h1>
          </div>
          <div className=' mx-auto col-11'>
            <Slider {...settings} className=' mb-5 pb-4 '>

              <div className="team-item col-12 px-3 ">
                <div className={`${style.paramedicDiv} row g-0  overflow-hidden `}>
                  <div className="col-5">
                    <img className="img-fluid " src="img/paramedic2.png" style={{ objectFit: 'cover' }} />
                  </div>
                  <div className="col-7 h-100 d-flex flex-column  ">
                    <div className="mt-auto p-4 mb-3 ">
                      <h3 className={`${style.Name}`}>Paramadec Name</h3>
                      <h6 className={`${style.Cardiology} fw-normal fst-italic  mb-4  `}>Paramedic</h6>
                      <p className={`${style.dolor} m-0 pb-5 mb-3`}>we are highly trained healthcare professionals providing emergency medical care, often in ambulances, responding swiftly to critical situations.</p>
                    </div>
                    <div className="d-flex mt-auto border-top pt-3 pb-2  mt-5 ps-2   ">
                      <a className={`${style.inIcon} btn btn-lg bg-danger text-light  btn-lg-square rounded-circle me-2 px-3 pt-3  pb-3`} href="#"><FaTwitter /></a>
                      <a className={`${style.inIcon} btn btn-lg bg-danger text-light  btn-lg-square rounded-circle me-2 px-3 pt-3 pb-3`} href="#"><FaFacebookF /></a>
                      <a className={`${style.inIcon} btn btn-lg bg-danger text-light  btn-lg-square rounded-circle me-2 px-3 pt-3 pb-3`} href="#"><FaLinkedinIn /></a>
                    </div>
                  </div>
                </div>
              </div>


              <div className="team-item  px-3 ">
                <div className={`${style.paramedicDiv} row g-0  `}>
                  <div className="col-5">
                    <img className="img-fluid " src="img/paramedic2.png" style={{ objectFit: 'cover' }} />
                  </div>
                  <div className="col-7 h-100 d-flex flex-column  ">
                    <div className="mt-auto p-4 mb-3 ">
                      <h3 className={`${style.Name}`}>Paramadec Name</h3>
                      <h6 className={`${style.Cardiology} fw-normal fst-italic  mb-4  `}>Paramedic</h6>
                      <p className={`${style.dolor} m-0 pb-5 mb-3`}>we are highly trained healthcare professionals providing emergency medical care, often in ambulances, responding swiftly to critical situations.</p>
                    </div>
                    <div className="d-flex mt-auto border-top pt-3 pb-2  mt-5 ps-2">
                      <a className={`${style.inIcon} btn btn-lg bg-danger text-light  btn-lg-square rounded-circle me-2 px-3 pt-3  pb-3`} href="#"><FaTwitter /></a>
                      <a className={`${style.inIcon} btn btn-lg bg-danger text-light  btn-lg-square rounded-circle me-2 px-3 pt-3 pb-3`} href="#"><FaFacebookF /></a>
                      <a className={`${style.inIcon} btn btn-lg bg-danger text-light  btn-lg-square rounded-circle me-2 px-3 pt-3 pb-3`} href="#"><FaLinkedinIn /></a>
                    </div>
                  </div>
                </div>
              </div>


              <div className="team-item  px-3 ">
                <div className={`${style.paramedicDiv} row g-0  overflow-hidden `}>
                  <div className="col-5">
                    <img className="img-fluid " src="img/paramedic2.png" style={{ objectFit: 'cover' }} />
                  </div>
                  <div className="col-7 h-100 d-flex flex-column  ">
                    <div className="mt-auto p-4 mb-3 ">
                      <h3 className={`${style.Name}`}>Paramadec Name</h3>
                      <h6 className={`${style.Cardiology} fw-normal fst-italic  mb-4  `}>Paramedic</h6>
                      <p className={`${style.dolor} m-0 pb-5 mb-3`}>we are highly trained healthcare professionals providing emergency medical care, often in ambulances, responding swiftly to critical situations.</p>
                    </div>
                    <div className="d-flex mt-auto border-top pt-3 pb-2  mt-5 ps-2">
                      <a className={`${style.inIcon} btn btn-lg bg-danger text-light  btn-lg-square rounded-circle me-2 px-3 pt-3  pb-3`} href="#"><FaTwitter /></a>
                      <a className={`${style.inIcon} btn btn-lg bg-danger text-light  btn-lg-square rounded-circle me-2 px-3 pt-3 pb-3`} href="#"><FaFacebookF /></a>
                      <a className={`${style.inIcon} btn btn-lg bg-danger text-light  btn-lg-square rounded-circle me-2 px-3 pt-3 pb-3`} href="#"><FaLinkedinIn /></a>
                    </div>
                  </div>
                </div>
              </div>


              <div className="team-item  px-3  ">
                <div className={`${style.paramedicDiv} row g-0  overflow-hidden `}>
                  <div className="col-5 ">
                    <img className="img-fluid " src="img/paramedic2.png" style={{ objectFit: 'cover' }} />
                  </div>
                  <div className="col-7 h-100 d-flex flex-column  ">
                    <div className="mt-auto p-4 mb-3 ">
                      <h3 className={`${style.Name}`}>Paramadec Name</h3>
                      <h6 className={`${style.Cardiology} fw-normal fst-italic  mb-4  `}>Paramedic</h6>
                      <p className={`${style.dolor} m-0 pb-5 mb-3`}>we are highly trained healthcare professionals providing emergency medical care, often in ambulances, responding swiftly to critical situations.</p>
                    </div>
                    <div className="d-flex mt-auto border-top pt-3 pb-2   mt-5 ps-2">
                      <a className={`${style.inIcon} btn btn-lg bg-danger text-light  btn-lg-square rounded-circle me-2 px-3 pt-3  pb-3`} href="#"><FaTwitter /></a>
                      <a className={`${style.inIcon} btn btn-lg bg-danger text-light  btn-lg-square rounded-circle me-2 px-3 pt-3 pb-3`} href="#"><FaFacebookF /></a>
                      <a className={`${style.inIcon} btn btn-lg bg-danger text-light  btn-lg-square rounded-circle me-2 px-3 pt-3 pb-3`} href="#"><FaLinkedinIn /></a>
                    </div>
                  </div>
                </div>
              </div>

            </Slider>
          </div>
        </div>
      </div>
    </>
  )
}
