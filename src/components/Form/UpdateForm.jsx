import React, { useEffect, useState } from 'react'
import style from "./AddForm.module.css"
import "transition-style";
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useFormik } from 'formik';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function Form() {
  let navigate = useNavigate()   
  let [statusError, setStatusError] = useState('');

  let formik = useFormik({
    //object contain value that send to backend
    initialValues: {
      EmergMedCareGiven: '',
      PatientResponseToEmergMedCare: '',
      Time: '',
      B_P: '',
      PULSE: '',
      RESP: '',
      TEMP: '',
      PulseO2: '',
      ECG: '',
      Death: '',
      TimeOfDeath: '',
      AuthorityNotified: '',
    }, onSubmit: sendUpdateForm,

  })

  async function sendUpdateForm(values) {

    try {

      console.log(values);
      const { data } = await axios.post(`http://127.0.0.1:8000/api/CreateStatusUpdateForm`, values, {
        headers: {
          'auth-token': localStorage.getItem('userToken'),
        },
      }).catch((error) => {
        setStatusError(error.response.data.message);

      });

      console.log(data);

      toast.success('Update Form Send Successfully', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    window.scrollTo(0, 0);
    Aos.init(
      { duration: 1000 },
    );
  }, [])
  return (
    <form onSubmit={formik.handleSubmit}>
      {/* part1 */}
      <div className={`${style.Form} container-fluid  `} data-aos="fade-down" >
        <div className={`${style.page} container my-5 `} >
          <div className="row pt-5  " >
            <div className='d-flex pb-4 col-12  justify-content-center ' >
              <h3 className={style.header} >Update Patient Report  </h3>
            </div>


            {/* part2*/}
            <div>
              <div className={`${style.part6} col-12 d-lg-inline-flex py-3`}>
                <div className='col-lg-6 d-lg-inline-flex ps-2'>

                  <div className='col-12  d-lg-inline-flex py-lg-3'>
                    <div className='col-lg-4 pt-4 pe-2' >
                      <label className={`${style.name4}  `}>Emerg. Med. Care Given:</label>
                    </div>
                    <div className='col-lg-8'>
                      <textarea id="w3review" name="EmergMedCareGiven" rows={4} className='col-11 px-2' value={formik.values.EmergMedCareGiven} onChange={formik.handleChange} />
                    </div>

                  </div>

                  <div className=' col-12 d-lg-inline-flex py-lg-3'>

                    <div className='col-lg-4 pt-4' >
                      <label className={`${style.name4}  `}>Patient Response to  Emerg. Med. Care:</label>
                    </div>
                    <div className='col-lg-8'>
                      <textarea id="w3review" name="PatientResponseToEmergMedCare" value={formik.values.PatientResponseToEmergMedCare} onChange={formik.handleChange} rows={4} className='col-11 px-2' />
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* part3*/}

            <div className=' d-md-flex  '>

              <div className={`${style.part6} col-md-4 py-5`}>
                <div className='d-flex'>
                  <div className='pe-2 ps-md-2'>
                    <h6 className={`${style.name4} pb-2  text-decoration-underline`}>Death:</h6>
                    <div >

                      {['DOA', 'Refused CPR', 'During intervention', 'During Transport'].map((option) => {
                        return (

                          <div className='d-inline-block  col-12'>
                            <input type="radio" name="Death" className={`${style.radioinput} `}
                              value={option}
                              checked={formik.values.Death === option}
                              onChange={formik.handleChange}
                            /><label className='ps-1 pe-2 col-10 '>{option}</label>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                  <div className='col-6  ps-2 pe-1 ps-md-0 '>
                    <h6 className={`${style.name4} pb-2 ps-sm-1  text-decoration-underline`}>Authority Notified:</h6>
                    <div className=' col-12 ps-2'>
                      {['no', 'yes'].map((option) => {
                        return (
                          <>
                            <input type="radio" name="AuthorityNotified" className={style.radioinput}
                              value={option}
                              checked={formik.values.AuthorityNotified === option}
                              onChange={formik.handleChange}
                            /><label className='ps-1 pe-2 col-4'>{option}</label>
                          </>
                        )

                      })}
                    </div>

                    <div className='px-sm-1 '>
                      <label className={`${style.name4} pb-lg-2 pt-4 text-decoration-underline `} >Time of Death:</label><input type="time" className={`${style.input4} col-10  my-lg-1  `} name='TimeOfDeath' value={formik.values.TimeOfDeath} onChange={formik.handleChange} />

                    </div>
                  </div>
                </div>
              </div>

              {/* part 4 */}

              <div className={`${style.part6} col-md-8`}>
                <div className={`${style.part68}  text-capitalize  px-2  py-5`}>
                  <div >
                    <h5 className={`${style.header2} text-center pb-5`}>cardiac arrest information</h5>
                  </div>
                  <div className='d-lg-inline-flex col-12  '>
                    <div className='col-12  my-lg-0'>
                      <table className='text-center '>
                        <thead >
                          <tr >
                            <td >Time</td>
                            <td >B/P</td>
                            <td >PULSE</td>
                            <td >RESP</td>
                            <td >TEMP</td>
                            <td className={style.td}>Pulse <br />O2</td>
                            <td >ECG</td>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td><input type="time" name='Time' className={`${style.input4} w-100 px-1`} value={formik.values.Time} onChange={formik.handleChange} /> </td>
                            <td ><input type="text" name='B_P' className={`${style.input4} w-100 px-1`} value={formik.values.B_P} onChange={formik.handleChange} /> </td>
                            <td><input type="number" step='0.01' name='PULSE' className={`${style.input4} w-100 px-1`} value={formik.values.PULSE} onChange={formik.handleChange} /> </td>
                            <td><input type="number" step='0.01' name='RESP' className={`${style.input4} w-100 px-1`} value={formik.values.RESP} onChange={formik.handleChange} /> </td>
                            <td><input type="number" step='0.01' name='TEMP' className={`${style.input4} w-100 px-1`} value={formik.values.TEMP} onChange={formik.handleChange} /> </td>
                            <td><input type="number" step='0.01' name='PulseO2' className={`${style.input4} w-100 px-1`} value={formik.values.PulseO2} onChange={formik.handleChange} /> </td>
                            <td><input type="number" step='0.01' name='ECG' className={`${style.input4} w-100 px-1`} value={formik.values.ECG} onChange={formik.handleChange} /> </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className='py-2'>
                        {statusError ? <p className='text-danger '>{statusError}</p>
                          : <p className='text-danger '>{formik.errors.Email}</p>
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=' d-flex justify-content-center pb-5 gap-3'>
          <button className={`${style.sendBtn} px-4 `} type='submit'>
            <span className='px-2'>Send Form</span>
          </button>
        </div>
      </div>
    </form>
  )
}
