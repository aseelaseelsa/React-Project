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

  const formik = useFormik({
    initialValues: {
      FullName: '',
      Address: '',
      Date: '',
      AgeYearsOrMonths: '',
      DateOfBirth: '',
      Age: '',
      B_P: '',
      PhoneNumber: '',
      Gender: '',
      ChiefComplaint: '',
      PertinentFindingsOnPhysicalExarn: '',
      MedicalHistory: [],
      Allergies: [],
      Medication: '',
      MedicationName: '',
      EmergMedCareGiven: '',
      PatientResponseToEmergMedCare: '',
      Destination: '',
      Reasons: [],
      SiteOfInjury: '',
      Time: '',
      PULSE: '',
      RESP: '',
      TEMP: '',
      PulseO2: '',
      ECG: '',
      Death: '',
      TimeOfDeath: '',
      AuthorityNotified: '',
    }, onSubmit: sendForm,


  })

  //send form
  async function sendForm(values) {
    try {
      console.log(values);
      const { data } = await axios.post(`http://127.0.0.1:8000/api/CreatePatientForm`, values, {
        headers: {
          'auth-token': localStorage.getItem('userToken'),
        },
      }).catch((error) => {
        setStatusError(error.response.data.message);
      });
      toast.success('Form Send Successfully', {
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
    <>
      {/* part1 */}
      <div className={`${style.Form} container-fluid  `} data-aos="fade-down" >
        <form onSubmit={formik.handleSubmit}>
          <div className={`${style.page} container my-5 `} >
            <div className="row pt-5  " >
              <div className='d-flex pb-4 col-12  justify-content-center ' >
                <h3 className={style.header} >Patient Care Report  </h3>
              </div>
              {/* end part1 */}

              {/* part2 */}
              <div className='pb-4 '>
                {/* Grade 1 */}
                <div className='d-md-flex '>
                  <div className='col-md-4  pe-4  '>
                    <label className={`${style.name1} py-2 col-12 `} >(Full Name)</label><input type="text" name='FullName' className={`${style.input4} w-100 mb-3 ps-1`} value={formik.values.FullName} onChange={formik.handleChange} />
                  </div>
                  <div className='col-md-4 col-12  pe-4'>
                    <label className={`${style.name1} py-2 col-12`}>(ID.NO)</label><input type="text" name='PatientID' className={`${style.input4} w-100 mb-3 ps-1`} value={formik.values.PatientID} onChange={formik.handleChange} />
                  </div>
                  <div className='col-md-4 col-12 pe-4'>
                    <label className={`${style.name1} py-2  col-12`}>(Address)</label><input type="text" name='Address' className={`${style.input4} w-100 mb-3 ps-1`} value={formik.values.Address} onChange={formik.handleChange} />
                  </div>
                </div>
                {/* Grade 2 */}
                <div className='  d-md-flex '>
                  <div className='col-md-4  pe-4'>
                    <label className={`${style.name1} py-2  `}>(Date)</label><input type="date" className={`${style.input4} w-100 mb-3 ps-1`} name='Date' value={formik.values.Date} onChange={formik.handleChange} />
                  </div>

                  <div className='col-md-4 pe-4'>
                    <label className={`${style.name1} py-2  `}>(Age)</label><input type="text" className={`${style.input4} w-100 mb-3 ps-1`} name='Age' value={formik.values.Age} onChange={formik.handleChange} />
                  </div>

                  <div className='col-md-4  pe-4'>
                    <h6 className={`${style.name1} py-2  `}>(Age Years Or Months)</h6>
                    {['Years', 'Months'].map((option) => {
                      return (
                        <>
                          <input type="radio" name="AgeYearsOrMonths" className={style.radioinput}
                            value={option}
                            checked={formik.values.AgeYearsOrMonths === option}
                            onChange={formik.handleChange}
                          /><label className='ps-1 pe-2 col-4'>{option}</label>
                        </>
                      )
                    })}
                  </div>
                </div>

                {/* Grade 3 */}
                <div className=' d-md-flex '>
                  <div className='col-md-4  pe-4'>
                    <label className={`${style.name1} py-2  `}>(Phone)</label><input type="text" name='PhoneNumber' className={`${style.input4} w-100 mb-3 ps-1`} value={formik.values.PhoneNumber} onChange={formik.handleChange} />
                  </div>
                  <div className='col-md-4 col-12 pe-4'>
                    <label className={`${style.name1} py-2  col-12`}>(Set Of Injury)</label><input type="text" className={`${style.input4} w-100 mb-3 ps-1`} name='SiteOfInjury' value={formik.values.SiteOfInjury} onChange={formik.handleChange} />
                  </div>
                  <div className='col-md-4  pe-4'>
                    <h6 className={`${style.name1} py-2  `}>(Gender)</h6>
                    {['Male', 'Female'].map((option) => {
                      return (
                        <>
                          <input type="radio" name="Gender" className={style.radioinput}
                            value={option}
                            checked={formik.values.Gender === option}
                            onChange={formik.handleChange}
                          /><label className='ps-1 pe-2 col-4'>{option}</label>
                        </>
                      )
                    })}
                  </div>
                </div>
                {/* end Grade 3 */}
              </div>


              {/* part3*/}
              <div>
                <div className={`${style.part6} col-12 d-lg-inline-flex py-3`}>
                  {/* Grade 1 */}
                  <div className='col-lg-6 ps-2'>
                    <div className=' col-12  d-lg-inline-flex  py-lg-3'>
                      <div className='col-lg-4 pt-5' >
                        <label className={`${style.name4}  `}>Chief Complaint:</label>
                      </div>
                      <div className='col-lg-8'>
                        <textarea rows={4} className='col-11 px-2' name='ChiefComplaint' value={formik.values.ChiefComplaint} onChange={formik.handleChange} />
                      </div>
                    </div>

                    <div className=' col-12  d-lg-inline-flex py-lg-3'>
                      <div className='col-lg-4 pt-5' >
                        <label className={`${style.name4}  `}>Emerg. Med. Care Given:</label>
                      </div>
                      <div className='col-lg-8'>
                        <textarea rows={4} className='col-11 px-2' name='EmergMedCareGiven' value={formik.values.EmergMedCareGiven} onChange={formik.handleChange} />
                      </div>
                    </div>
                  </div>

                  {/* Grade 2 */}
                  <div className='col-lg-6  ps-2'>
                    <div className='col-12  d-lg-inline-flex py-lg-3'>
                      <div className='col-lg-4 pt-4 pe-2' >
                        <label className={`${style.name4}  `}>Pertinent Findings on  Physical Exarn:</label>
                      </div>
                      <div className='col-lg-8'>
                        <textarea rows={4} className='col-11 px-2' name='PertinentFindingsOnPhysicalExarn' value={formik.values.PertinentFindingsOnPhysicalExarn} onChange={formik.handleChange} />
                      </div>
                    </div>

                    <div className=' col-12 d-lg-inline-flex py-lg-3'>
                      <div className='col-lg-4 pt-4' >
                        <label className={`${style.name4}  `}>Patient Response to  Emerg. Med. Care:</label>
                      </div>
                      <div className='col-lg-8'>
                        <textarea rows={4} className='col-11 px-2' name='PatientResponseToEmergMedCare' value={formik.values.PatientResponseToEmergMedCare} onChange={formik.handleChange} />
                      </div>
                    </div>
                  </div>
                  {/* end Grade 2 */}
                </div>


                {/* part 4 */}
                <div className=' d-md-flex '>
                  {/* Medical History div : each 2 input in same div */}
                  <div className={`${style.part6} col-md-4 col-12 `}>
                    <div className="  py-4 ps-2">
                      <div >
                        <h6 className={`${style.header5} pb-3 text-center text-decoration-underline`} >Medical History:</h6>
                      </div>
                      <div>
                        <div className='d-inline-flex  col-12 '>
                          {/* input1 */}
                          <div className='col-7 d-inline-flex  '>
                            <div className=' col-1'>
                              <label className={style.customcheckbox}>
                                <input name="MedicalHistory" type="checkbox"
                                  value='Diabetes'
                                  onChange={formik.handleChange} />
                                <span className={style.checkmark} />
                              </label>
                            </div >
                            <div className={`${style.chek}  col-11`}>
                              <label className='ps-2 ' >Diabetes</label></div>
                          </div>

                          {/* input2 */}
                          <div>
                            <label className={style.customcheckbox}>
                              <input name="MedicalHistory" type="checkbox"
                                value={'COPD'}
                                onChange={formik.handleChange} />
                              <span className={style.checkmark} />
                            </label>
                          </div>
                          <div className={style.chek}>
                            <label className='ps-2 ' >COPD</label>
                          </div>
                        </div>

                        <div className='d-inline-flex  col-12 '>
                          {/* input3 */}
                          <div className='col-7 d-inline-flex  '>
                            <div className=' col-1'>
                              <label className={style.customcheckbox}>
                                <input name="MedicalHistory" type="checkbox"
                                  value={'cardiac'}
                                  onChange={formik.handleChange} />
                                <span className={style.checkmark} />
                              </label>
                            </div >
                            <div className={`${style.chek}  col-11`}>
                              <label className='ps-2 ' >Cardiac</label></div>
                          </div>
                          {/* input 4 */}
                          <div>
                            <label className={style.customcheckbox}>
                              <input name="MedicalHistory" type="checkbox"
                                value={'Seizure'}
                                onChange={formik.handleChange} />
                              <span className={style.checkmark} />
                            </label>
                          </div>
                          <div className={style.chek}>
                            <label className='ps-2 ' >Seizure</label>
                          </div>
                        </div>


                        <div className='d-inline-flex  col-12 '>
                          {/* input 5 */}
                          <div className='col-7 d-inline-flex  '>
                            <div className=' col-1'>
                              <label className={style.customcheckbox}>
                                <input name="MedicalHistory" type="checkbox"
                                  value={'Hypertension'}
                                  onChange={formik.handleChange} />
                                <span className={style.checkmark} />
                              </label>
                            </div >
                            <div className={`${style.chek}  col-11`}>
                              <label className='ps-2 ' >Hypertension</label></div>
                          </div>
                          {/* input 6 */}
                          <div>
                            <label className={style.customcheckbox}>
                              <input name="MedicalHistory" type="checkbox"
                                value={'cancer'}
                                onChange={formik.handleChange} />
                              <span className={style.checkmark} />
                            </label>
                          </div>
                          <div className={style.chek}>
                            <label className='ps-2 ' >Cancer</label>
                          </div>
                        </div>


                        <div className='d-inline-flex col-12 '>
                          {/* input 7 */}
                          <div className='col-7 d-inline-flex  '>
                            <div className=' col-1'>
                              <label className={style.customcheckbox}>
                                <input name="MedicalHistory" type="checkbox"
                                  value={'ot'}
                                  onChange={formik.handleChange} />
                                <span className={style.checkmark} />
                              </label>
                            </div >
                            <div className={`${style.chek}  col-11`}>
                              <label className='ps-2 ' >ot</label></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  {/* Allergies div */}
                  <div className={`${style.part6} col-md-4 col-12 `}>
                    <div className="py-4 ps-2">
                      <div >
                        <h6 className={`${style.header5} pb-3 text-center text-decoration-underline`}>Allergies:</h6>
                      </div>
                      <div>

                        <div className='d-inline-flex  col-12 '>
                          {/* input 1 */}
                          <div className='col-7 d-inline-flex  '>
                            <div className=' col-1'>
                              <label className={style.customcheckbox}>
                                <input name="Allergies" type="checkbox"
                                  value={'None'}
                                  onChange={formik.handleChange} />
                                <span className={style.checkmark} />
                              </label>
                            </div >
                            <div className={`${style.chek} col-11`}>
                              <label className='ps-2 ' >None</label></div>
                          </div>
                          {/* input2 */}
                          <div >
                            <label className={style.customcheckbox}>
                              <input name="Allergies" type="checkbox"
                                value={'PCN'}
                                onChange={formik.handleChange} />
                              <span className={style.checkmark} />
                            </label>
                          </div>
                          <div className={style.chek}>
                            <label className='ps-2 ' >PCN</label>
                          </div>
                        </div>

                        <div className='d-inline-flex  col-12 '>
                          {/* input 3 */}
                          <div className='col-7 d-inline-flex  '>
                            <div className=' col-1 '>
                              <label className={style.customcheckbox}>
                                <input name="Allergies" type="checkbox"
                                  value={'Sulfa'}
                                  onChange={formik.handleChange} />
                                <span className={style.checkmark} />
                              </label>
                            </div >
                            <div className={`${style.chek}  col-11`}>
                              <label className='ps-2 ' >Sulfa</label></div>
                          </div>
                          {/* input 4 */}
                          <div>
                            <label className={style.customcheckbox}>
                              <input name="Allergies" type="checkbox"
                                value={'Codeine'}
                                onChange={formik.handleChange} />
                              <span className={style.checkmark} />
                            </label>
                          </div>
                          <div className={style.chek}>
                            <label className='ps-2 ' >Codeine</label>
                          </div>
                        </div>

                        <div className='d-inline-flex col-12 '>
                          {/* input 5 */}
                          <div className='col-7 d-inline-flex  '>
                            <div className=' col-1'>
                              <label className={style.customcheckbox}>
                                <input name="Allergies" type="checkbox"
                                  value={'Iodine'}
                                  onChange={formik.handleChange} />
                                <span className={style.checkmark} />
                              </label>
                            </div >
                            <div className={`${style.chek}  col-11`}>
                              <label className='ps-2 ' >Iodine</label></div>
                          </div>
                          {/* input 6 */}
                          <div>
                            <label className={style.customcheckbox}>
                              <input name="Allergies" type="checkbox"
                                value={'Unknown'}
                                onChange={formik.handleChange} />
                              <span className={style.checkmark} />
                            </label>
                          </div>
                          <div className={style.chek}>
                            <label className='ps-2 ' >Unknown</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  {/* Medication  div */}
                  <div className={`${style.part6} col-md-4 col-12 `}>
                    <div className="py-4  ps-2">
                      <div >
                        <h6 className={`${style.header5} pb-3 text-center text-decoration-underline`}>Medication:</h6>
                      </div>

                      <div>
                        <div className='  col-12 '>
                          <div className='col-md-4 pe-4'>
                            {['Denies', 'Name(s)'].map((option) => {
                              return (
                                <div className='d-inline-block '>
                                  <input type="radio" name="Medication" className={style.radioinput}
                                    value={option}
                                    checked={formik.values.Medication === option}
                                    onChange={formik.handleChange}
                                  /><label className='ps-1 col-4'>{option}</label>
                                </div>
                              )
                            })}
                          </div>
                          {formik.values.Medication !== 'Denies' ?

                            <div className='  pe-4 pt-2 '>
                              <input type="text" name='MedicationName' value={formik.values.MedicationName} onChange={formik.handleChange} className={`${style.input4} w-100 mb-3 ps-1`} />
                            </div>
                            :
                            <div className='  pe-4 pt-2 '>
                              <input type="text" name='MedicationName' disabled className={`${style.input4} w-100 mb-3 ps-1`} />
                            </div>

                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* end part 4 */}


              {/* part5 */}

              <div className=' d-md-flex '>
                <div className={`${style.part6} col-md-4  py-5`}>
                  <div >
                    <h5 className={`${style.header7} ps-2  pb-3`}>Transported</h5>
                  </div>
                  <div className=' d-lg-flex d-md-inline-block d-flex ps-2'>
                    {/* Destination div */}
                    <div className=' col-6'>
                      <h6 className={`${style.header5} pb-2  text-decoration-underline`}>Destination:</h6>
                      <div >
                        {['Heath center', 'Interfacility', 'Rendezvous', 'Residence', 'Other'].map((option) => {
                          return (

                            <div className='d-inline-block  col-12'>
                              <input type="radio" name="Destination" className={`${style.radioinput} `}
                                value={option}
                                checked={formik.values.Destination === option}
                                onChange={formik.handleChange}
                              /><label className='ps-1 pe-2 col-10 '>{option}</label>
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    {/* Reasons div */}
                    <div >
                      <h6 className={`${style.header5} pb-2 text-decoration-underline`}>Reasons:</h6>
                      <div>
                        <div className='col-12 d-inline-flex' >
                          <div>
                            <label className={style.customcheckbox}>
                              <input
                                name="Reasons"
                                type="checkbox"
                                value={'Protocol'}
                                onChange={formik.handleChange}
                              />
                              <span className={style.checkmark} />
                            </label>
                          </div>
                          <div className={`${style.chek}`}>
                            <label className='ps-2'>Protocol</label>
                          </div>
                        </div>
                        <div className='col-12 d-inline-flex' >
                          <div>
                            <label className={style.customcheckbox}>
                              <input
                                name="Reasons"
                                type="checkbox"
                                value={'Nearest Facility'}
                                onChange={formik.handleChange}
                              />
                              <span className={style.checkmark} />
                            </label>
                          </div>
                          <div className={`${style.chek}`}>
                            <label className='ps-2'>Nearest Facility</label>
                          </div>
                        </div>
                        <div className='col-12 d-inline-flex' >
                          <div>
                            <label className={style.customcheckbox}>
                              <input
                                name="Reasons"
                                type="checkbox"
                                value={'Family case choice'}
                                onChange={formik.handleChange}
                              />
                              <span className={style.checkmark} />
                            </label>
                          </div>
                          <div className={`${style.chek}`}>
                            <label className='ps-2'>Family case choice</label>
                          </div>
                        </div>
                        <div className='col-12 d-inline-flex' >
                          <div>
                            <label className={style.customcheckbox}>
                              <input
                                name="Reasons"
                                type="checkbox"
                                value={'Online instructions'}
                                onChange={formik.handleChange}
                              />
                              <span className={style.checkmark} />
                            </label>
                          </div>
                          <div className={`${style.chek}`}>
                            <label className='ps-2'>Online instructions</label>
                          </div>
                        </div>
                        <div className='col-12 d-inline-flex' >
                          <div>
                            <label className={style.customcheckbox}>
                              <input
                                name="Reasons"
                                type="checkbox"
                                value={'Other'}
                                onChange={formik.handleChange}
                              />
                              <span className={style.checkmark} />
                            </label>
                          </div>
                          <div className={`${style.chek}`}>
                            <label className='ps-2'>Other</label>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Authority Notified div*/}
                  <div className='col-12 pt-4 d-inline-flex   ps-2 pe-1 ps-md-0 '>
                    <div className=' col-6 ps-2'>
                      <h6 className={`${style.name4} pb-2   text-decoration-underline`}>Authority Notified:</h6>

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

                    <div className='px-sm-1 col-6 '>
                      <label className={`${style.name4} pb-lg-2  `} >Time of Death:</label><input type="time" className={`${style.input4} col-10 my-lg-1  `} name='TimeOfDeath' value={formik.values.TimeOfDeath} onChange={formik.handleChange} />

                    </div>
                  </div>
                </div>
                {/* end part 5 */}


                {/* part 6 */}
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
                              <td> <input type="time" name='Time' className={`${style.input4} w-100 px-1`} value={formik.values.Time} onChange={formik.handleChange} /> </td>
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
                            : ''
                          }

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end part 6 */}
              </div>
            </div>
          </div>

          <div className=' d-flex justify-content-center pb-5 '>
            <button className={`${style.sendBtn} px-4 `} type='submit'>
              <span className='px-2'>Send Form</span>
            </button>
          </div>
        </form>
      </div>
    </>)
}
