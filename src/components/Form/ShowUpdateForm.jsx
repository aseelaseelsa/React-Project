import React, { useEffect, useState } from 'react'
import style from "./AddForm.module.css"
import "transition-style";
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';


export default function ShowUpdateForm() {
  let { id } = useParams();

  let [UForm, setUForm] = useState({});

  // get Update Form
  async function getUpdateForm() {
    try {
      let { data } = await axios.get(`http://127.0.0.1:8000/api/Admin/SingleStatusUpdateForm/${id}`, {
        headers: {
          'auth-token': localStorage.getItem('userToken')
        }
      });
      setUForm(data);
    } catch (error) {
      console.log(error);
    }
  }
  //end

  useEffect(() => {
    getUpdateForm()
  }, [])


  return (
    <>
      {/* part1 */}
      <div className={`${style.Form} container-fluid  `} data-aos="fade-down" >
        <div className={`${style.page} container my-5 `} >
          <div className="row pt-5  " >
            <div className='d-flex pb-4 col-12  justify-content-center ' >
              <h3 className={style.header} >Update Patient Report  </h3>
            </div>

            {/* part2 */}
            <div>
              <div className={`${style.part6} col-12 d-lg-inline-flex py-3`}>
                <div className='col-lg-6 d-lg-inline-flex ps-2'>
                  <div className='col-12  d-lg-inline-flex py-lg-3'>
                    <div className='col-lg-4 pt-4 pe-2' >
                      <label className={`${style.name4}  `}>Emerg. Med. Care Given:</label>
                    </div>
                    <div className='col-lg-8'>
                      <textarea id="w3review" name="w3review" rows={4} className='col-11 px-2' disabled value={UForm.EmergMedCareGiven} />
                    </div>
                  </div>
                  <div className=' col-12 d-lg-inline-flex py-lg-3'>
                    <div className='col-lg-4 pt-4' >
                      <label className={`${style.name4}  `} >Patient Response to  Emerg. Med. Care:</label>
                    </div>
                    <div className='col-lg-8'>
                      <textarea id="w3review" name="w3review" rows={4} className='col-11 px-2' disabled value={UForm.PatientResponseToEmergMedCare} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* part3 */}
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
                              checked={UForm.Death === option} />
                            <label className='ps-1 pe-2 col-10 '>{option}</label>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                  <div className='col-6  ps-2 pe-1 ps-md-0 '>
                    <h6 className={`${style.name4} pb-2 ps-sm-1  text-decoration-underline`}>Authority Notified:</h6>
                    <div className=' col-12 ps-2'>
                      <input type="radio" name="M9" className={style.radioinput} checked={UForm.AuthorityNotified === 'yes'} /><label className='ps-1 pe-2 col-4'>Y</label>
                      <input type="radio" name="M9" checked={UForm.AuthorityNotified === 'no'} /><label className='ps-1 '>N</label>
                    </div>
                    <div className='px-sm-1 '>
                      <label className={`${style.name4} pb-lg-2 pt-4 `}   >Time of Death:</label><input type="time" className={`${style.input4}  col-10  my-lg-1  `} value={UForm.TimeOfDeath} />

                    </div>
                  </div>
                </div>
              </div>

              {/* part 4 */}
              <div className={`${style.part6} col-md-8`}>

                <div className={`${style.part68}  text-capitalize  px-2  py-4`}>
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
                            <td><input type="time" className={`${style.input4} w-100 px-1`} disabled value={UForm.Time} /> </td>
                            <td><input type="text" className={`${style.input4} w-100 px-1`} disabled value={UForm.B_P} /> </td>
                            <td><input type="number" className={`${style.input4} w-100 px-1`} disabled value={UForm.PULSE} /> </td>
                            <td><input type="number" className={`${style.input4} w-100 px-1`} disabled value={UForm.RESP} /> </td>
                            <td><input type="number" className={`${style.input4} w-100 px-1`} disabled value={UForm.TEMP} /> </td>
                            <td><input type="number" className={`${style.input4} w-100 px-1`} disabled value={UForm.PulseO2} /> </td>
                            <td><input type="number" className={`${style.input4} w-100 px-1`} disabled value={UForm.ECG} /> </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}