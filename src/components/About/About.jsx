import React, { useEffect } from 'react'
import style from './About.module.css'
import "transition-style";
import Aos from 'aos';
import 'aos/dist/aos.css'

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
    Aos.init(
      { duration: 1000 },
    );

  }, []);


  return (
    <>

      {/*part 1*/}
      <div className={`${style.about} container-fluid   py-lg-5   `} transition-style="in:wipe:down">
        <div className="container pb-4">
          <div className="row justify-content-center ">
            <div className="col-lg-8 text-center text-lg-center  ">


              <h1 className={`${style.AboutUs}  mb-md-4 mt-4 text-capitalize  pt-5   text-light`}>About Us</h1>
              <h6 className={`${style.givee}  d-inline-block  text-uppercase  mx-2 pt-3 pb-2 text-light`}>a full services about  paramedic</h6>
              <div class="py-4 pb-5">
                <a className={`${style.button} me-2 rounded-2 `} href='#whatToDo'>what we do ?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end part1 */}


      {/*part 2 */}

      <div className={`${style.aboutt} container-fluid  `}>
        <div className="container pb-5  pt-5 ">
          <div className="row gx-3">
            <div className="col-lg-6 mb-5 mb-lg-0   " style={{ minHeight: 200 }}>
              <div className=" h-100  ">
                <div className='row  mx-auto  col-12 pt-2'>
                  <div className={`${style.div1} col-lg-5 col-md-5 col-sm-12 m-md-2  mt-3 mt-md-0   ms-0`} data-aos="zoom-in"></div>
                  <div className={`${style.div2} col-lg-5 col-md-5 col-sm-12 m-md-2 mt-3 mt-md-0 `} data-aos="zoom-in"></div>
                  <div className={`${style.div3} col-lg-5 col-md-5 col-sm-12  m-md-2 ms-0 mt-3 mt-md-0 `} data-aos="zoom-in"></div>
                  <div className={`${style.div4} col-lg-5 col-md-5 col-sm-12 m-md-2 mt-3 mt-md-0 `} data-aos="zoom-in"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up">
              <div className="mb-4 ">
                <h1 className={`${style.best} display-4 pt-2 `}>Let's get to know about ambulance services</h1>
              </div>
              <p className={style.thePrimary}>Ambulance services serve as crucial lifelines during emergencies, providing rapid medical assistance and transportation. These vital units, operated by highly skilled professionals, ensure swift and crucial care, often making the difference in life-threatening situations. Whether responding to accidents, medical crises, or urgent situations, ambulance services play an indispensable role in delivering timely and skilled healthcare to those in need.
                Ambulance services, with their 24/7 availability, embody the frontline response to urgent medical needs, symbolizing a lifeline that can make all the difference in saving lives and ensuring the well-being of individuals facing health emergencies.</p>
            </div>
          </div>
        </div>
      </div>
      {/* end part2 */}



      {/* part 3 */}
      <div className={`${style.part3} container-fluid pb-5  `}>
        <div className="container py-5 ">

          <div className="row g-5   ">
            <div className="col-lg-4 col-md-4  py-sm-0 " data-aos="zoom-in">
              <div className=" rounded d-flex flex-column align-items-center justify-content-center text-center p-4 pb-3" >

                <div className={`${style.Knumber} pb-2  pt-lg-5`}>
                </div>
                <span className={style.span}></span>
                <h4 className={`${style.serv} mb-2 text-uppercase pt-4 `}>Paramedics</h4>
                <p className={`${style.inService} m-0  pb-lg-5 pb-0 pb-md-0 `}>Saving lives with skill and compassion </p>
              </div>
            </div>


            <div className="col-lg-4 col-md-4  py-sm-0   " data-aos="zoom-in">
              <div className=" rounded d-flex flex-column align-items-center justify-content-center text-center p-4 pb-3" >
                <div className={`${style.Knumber2} pb-2 pt-lg-5`}></div>
                <span className={style.span}></span>
                <h4 className={`${style.serv} mb-2 text-uppercase pt-4  `}>YEARS EXPERIENCE</h4>
                <p className={`${style.inService} m-0   pb-lg-5 pb-0 `}>Years of precision </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4   py-sm-0 " data-aos="zoom-in">
              <div className=" rounded d-flex flex-column align-items-center justify-content-center text-center p-4 pb-3" >
                <div className={`${style.Knumber3} pb-2 pt-lg-5`}></div>
                <span className={style.span}></span>
                <h4 className={`${style.serv} mb-2 text-uppercase pt-4`}>work hours</h4>
                <p className={`${style.inService} m-0   pb-lg-5 pb-0`}>Tirelessly saving lives around the clock</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end part 3 */}


      {/* part 4 */}

      <div className={`${style.part4} container-fluid   py-lg-5   `}  >
        <div className="container  pb-5 ">
          <div className="row justify-content-center ">
            <div className="col-lg-8 text-center text-lg-center  py-3 "data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="900">
              <h3 className={`${style.FindOut}  mb-md-4 mt-4 text-capitalize  pt-5  text-light`} >Find Out Why <br />Than
                <span className={style.pationt}>490,000</span>  Patients</h3>
              <h6 className={`${style.Trust}  d-inline-block  text-uppercase  mx-2 pt-3 pb-5 text-light`} >Trust Our paramedics.</h6>
            </div>
          </div>
        </div>
      </div>
      {/* end part 4 */}


      {/* part 5 */}
      <div className={`${style.servcies} container-fluid pb-5  `} id="whatToDo">
        <div className="container  pt-5 pb-5  " data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="700">
          <div className="text-center mx-auto mb-5 pt-4">
            <h5 className={`${style.Headar2} d-inline-block fs-3 text-capitalize pb-2 pt-5  `} >What We Do ?</h5>
          </div>
          <div className="row g-5   py-4">
            <div className="col-lg-4 col-12 " data-aos="zoom-in">
              <div className={`${style.service}  rounded d-flex flex-column align-items-center justify-content-center text-center  pb-3 `}>
                <div className={`${style.serviceicon}  `}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 1024 1024" className={`${style.svg}`} xmlns="http://www.w3.org/2000/svg">
                    <path d="M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM694.5 340.7L481.9 633.4a16.1 16.1 0 0 1-26 0l-126.4-174c-3.8-5.3 0-12.7 6.5-12.7h55.2c5.1 0 10 2.5 13 6.6l64.7 89 150.9-207.8c3-4.1 7.8-6.6 13-6.6H688c6.5.1 10.3 7.5 6.5 12.8z" /></svg>
                </div>
                <h4 className={`${style.serContain} mb-3`}>Quick response</h4>
                <p className={`${style.inService} m-0 py-2 pb-md-5 pb-4 px-5`}>Rapid access to emergency situations to provide immediate care, increasing the likelihood of positive outcomes for the patient.</p>
              </div>
            </div>
            <div className="col-lg-4 col-12 " data-aos="zoom-in">
              <div className={`${style.service}  rounded d-flex flex-column align-items-center justify-content-center text-center  pb-3 `}>
                <div className={`${style.serviceicon}  `}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 1024 1024" className={`${style.svg}`} xmlns="http://www.w3.org/2000/svg">
                    <path d="M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM694.5 340.7L481.9 633.4a16.1 16.1 0 0 1-26 0l-126.4-174c-3.8-5.3 0-12.7 6.5-12.7h55.2c5.1 0 10 2.5 13 6.6l64.7 89 150.9-207.8c3-4.1 7.8-6.6 13-6.6H688c6.5.1 10.3 7.5 6.5 12.8z" /></svg>
                </div>
                <h4 className={`${style.serContain} mb-3`}>Information Security</h4>
                <p className={`${style.inService} m-0 py-2 pb-md-5 pb-4 px-5`}>Protecting patient data confidentiality and ensuring efficient healthcare service delivery while prioritizing privacy</p>
              </div>
            </div>
            <div className="col-lg-4 col-12" data-aos="zoom-in">
              <div className={`${style.service}  rounded d-flex flex-column align-items-center justify-content-center text-center  pb-3 `}>
                <div className={`${style.serviceicon} mb- `}>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" className={`${style.svg}`} xmlns="http://www.w3.org/2000/svg">
                    <path d="m24 7.626v8.749c0 .597-.485 1.092-1.091 1.092h-5.447v5.452c0 .596-.485 1.092-1.091 1.092h-8.742c-.596 0-1.091-.486-1.091-1.092v-5.452h-5.447c-.596 0-1.091-.485-1.091-1.092v-8.749c0-.597.485-1.092 1.091-1.092h5.447v-5.452c0-.596.485-1.092 1.091-1.092h8.742c.596 0 1.091.485 1.091 1.092v5.452h5.447c.596 0 1.091.495 1.091 1.092zm-3.325 4.339-2.192-1.649.333 1.042-4.891-.344c.152.304.243.638.243.992 0 .343-.081.667-.213.95l4.871-.364-.323 1.022zm-7.579.03-.495-8 1.021.324-1.647-2.185-1.647 2.195 1.04-.334-.454 8c0 .597.485 1.093 1.091 1.093.596 0 1.091-.486 1.091-1.093z"></path></svg>
                </div>
                <h4 className={`${style.serContain} mb-3`}>Save time</h4>
                <p className={`${style.inService} m-0 py-2 pb-md-5 pb-4 px-5`}>Time-saving ensures swift emergency response, prompt care, and better outcomes for critical medical situations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* end part5 */}


    </>
  )
}
