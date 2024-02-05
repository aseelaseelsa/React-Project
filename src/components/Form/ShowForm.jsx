import React, { useEffect, useState } from 'react'
import style from "./AddForm.module.css"
import "transition-style";
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ShowForm() {

  let { id } = useParams();
  let [PForm, setPForm] = useState({});

  //getPatientForm
  async function getPatientForm() {
    try {
      let { data } = await axios.get(`http://127.0.0.1:8000/api/Admin/SinglePatientForm/${id}`, {
        headers: {
          'auth-token': localStorage.getItem('userToken')
        }
      });
      setPForm(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPatientForm();
  }, [])


  return (
    <form>
      {/* part1 */}
      <div className={`${style.Form} container-fluid  `}   >
        <div className={`${style.page} container my-5 `} >
          <div className="row pt-5  " >
            <div className='d-flex pb-4 col-12  justify-content-center ' >
              <h3 className={style.header} >Patient Care Report  </h3>
            </div>

            {/* part2 */}
            <div className='pb-3 '>

              <div className='d-md-flex '>
                <div className='col-md-4  pe-4  '>
                  <label className={`${style.name1} py-2 col-12 `} >(Full Name)</label><input type="text" name='FullName' className={`${style.input4} w-100 mb-3 ps-1`} disabled value={PForm.FullName} />
                </div>
                <div className='col-md-4 col-12  pe-4'>
                  <label className={`${style.name1} py-2 col-12`}>(ID.NO)</label><input type="number" className={`${style.input4} w-100 mb-3 ps-1`} disabled value={PForm.PatientID} />

                </div>
                <div className='col-md-4 col-12 pe-4'>
                  <label className={`${style.name1} py-2  col-12`}>(Address)</label><input type="text" className={`${style.input4} w-100 mb-3 ps-1`} disabled value={PForm.Address} />

                </div>
              </div>
              <div className='  d-md-flex '>
                <div className='col-md-4  pe-4'>
                  <label className={`${style.name1} py-2  `}>(Date)</label><input type="text" className={`${style.input4} w-100 mb-3 ps-1`} disabled value={PForm.Date} />

                </div>
                <div className='col-md-4 pe-4'>
                  <label className={`${style.name1} py-2  `}>(Age)</label><input type="text" className={`${style.input4} w-100 mb-3 ps-1`} disabled value={PForm.Age} />
                </div>
                {/* <div className='col-md-4 pe-4'>
                  <label className={`${style.name1} py-2  `}>(Age yrs. mons)</label><input type="text" className={`${style.input4} w-100 mb-3 ps-1`} disabled value={PForm.AgeYearsOrMonths} />
                </div> */}
                <div className='col-md-4  pe-4'>
                  <h6 className={`${style.name1} py-2  `}>(Age yrs. mons)</h6>
                  {['Years', 'Months'].map((option) => {
                    return (
                      <>
                        <input type="radio" name="AgeYearsOrMonths" className={style.radioinput}
                          value={option}
                          checked={PForm.AgeYearsOrMonths === option}
                        /><label className='ps-1 pe-2 col-4'>{option}</label>
                      </>
                    )
                  })}
                </div>
          

              </div>
              <div className=' d-md-flex '>
                <div className='col-md-4  pe-4'>
                  <label className={`${style.name1} py-2  `}>(Phone)</label><input type="text" className={`${style.input4} w-100 mb-3 ps-1`} disabled value={PForm.PhoneNumber} />

                </div>
            

                <div className='col-md-4 col-12 pe-4'>
                  <label className={`${style.name1} py-2  col-12`}>(Set Of Injury)</label><input type="text" className={`${style.input4} w-100 mb-3 ps-1`} disabled value={PForm.SiteOfInjury} />
                </div>
                <div className='col-md-4 col-12 pe-4'>
                  <h6 className={`${style.name1} py-2  `}>(Gender)</h6>
                  {['Male', 'Female'].map((option) => {
                    return (
                      <>
                        <input type="radio" name="Gender" className={style.radioinput}
                          value={option}
                          checked={PForm.Gender === option}
                        /><label className='ps-1 pe-2 col-4'>{option}</label>
                      </>
                    )
                  })}
                </div>
              </div>
            </div>
            {/* end part1 */}

            {/* part 3*/}
            <div>
              <div className={`${style.part6} col-12 d-lg-inline-flex py-3`}>
                <div className='col-lg-6 ps-2'>
                  <div className=' col-12  d-lg-inline-flex  py-lg-3'>
                    <div className='col-lg-4 pt-5' >
                      <label className={`${style.name4}  `}>Chief Complaint:</label>
                    </div>
                    <div className='col-lg-8'>
                      <textarea id="w3review" name="w3review" rows={4} className='col-11 px-2' disabled value={PForm.ChiefComplaint} />
                    </div>
                  </div>
                  <div className=' col-12  d-lg-inline-flex py-lg-3'>
                    <div className='col-lg-4 pt-5' >
                      <label className={`${style.name4}  `}>Emerg. Med. Care Given:</label>
                    </div>
                    <div className='col-lg-8'>
                      <textarea id="w3review" name="w3review" rows={4} className='col-11 px-2' disabled value={PForm.EmergMedCareGiven} />
                    </div>
                  </div>
                </div>
                <div className='col-lg-6  ps-2'>

                  <div className='col-12  d-lg-inline-flex py-lg-3'>
                    <div className='col-lg-4 pt-4 pe-2' >
                      <label className={`${style.name4}  `}>Pertinent Findings on  Physical Exarn:</label>
                    </div>
                    <div className='col-lg-8'>
                      <textarea id="w3review" name="w3review" rows={4} className='col-11 px-2' disabled value={PForm.PertinentFindingsOnPhysicalExarn} />
                    </div>
                  </div>
                  <div className=' col-12 d-lg-inline-flex py-lg-3'>
                    <div className='col-lg-4 pt-4' >
                      <label className={`${style.name4}  `}>Patient Response to  Emerg. Med. Care:</label>
                    </div>
                    <div className='col-lg-8'>
                      <textarea id="w3review" name="w3review" rows={4} className='col-11 px-2' disabled value={PForm.PatientResponseToEmergMedCare} />
                    </div>
                  </div>
                </div>
              </div>

              {/* part 4 */}
              <div className=' d-md-flex '>
                <div className={`${style.part6} col-md-4 col-12 `}>
                  <div className="  py-4 px-2">
                    <div >
                      <h6 className={`${style.header5} pb-3 text-center text-decoration-underline`}>Medical History:</h6>
                    </div>
                    <div className='col-12'>
                      <textarea id="w3review" name="w3review" rows={3} className='col-12 px-2' disabled value={PForm.MedicalHistory} />
                    </div>
                  </div>
                </div>
                <div className={`${style.part6} col-md-4 col-12 `}>
                  <div className="py-4 px-2">
                    <div >
                      <h6 className={`${style.header5} pb-3 text-center text-decoration-underline`}>Allergies:</h6>
                    </div>
                    <div className='col-12'>
                      <textarea id="w3review" name="w3review" rows={3} className='col-12 px-2' disabled value={PForm.Allergies} />
                    </div>
                  </div>
                </div>
                <div className={`${style.part6} col-md-4 col-12 `}>
                  <div className="py-4  px-2">
                    <div >
                      <h6 className={`${style.header5} pb-3 text-center text-decoration-underline`}>Medication:</h6>
                    </div>
                    <div className='col-12'>
                      <textarea id="w3review" name="w3review" rows={3} className='col-12 px-2' disabled value={PForm.Medication} />
                    </div>

                  </div>

                </div>
              </div>

            </div>

            {/* part5*/}
            <div className=' d-md-flex  '>
              <div className={`${style.part6} col-md-4  pt-4`}>
                <div >
                  <h5 className={`${style.header7}  text-center pb-3`}>Transported</h5>
                </div>
                <div className=' d-inline-block col-12  px-2'>
                  <div className=''>
                    <h6 className={`${style.header5} pb-2  text-decoration-underline`}>Destination:</h6>
                    <div className='col-12 pb-4'>
                      <textarea id="w3review" name="w3review" rows={2} className='col-12 px-2' disabled value={PForm.Destination} />
                    </div>
                  </div>
                  <div className='  ps-2 pe-1 ps-md-0'>
                    <h6 className={`${style.header5} pb-2  text-decoration-underline`}>Reasons:</h6>
                    <div className='col-12'>
                      <textarea id="w3review" name="w3review" rows={2} className='col-12 px-2' value={PForm.Reasons} disabled />
                    </div>

                  </div>
                </div>

                <div className='col-12 pt-4 pb-2 d-inline-flex  ps-2 pe-1 ps-md-0 '>
                  <div className=' col-6   ps-2'>
                    <h6 className={`${style.name4} pb-2 ps-sm-1  text-decoration-underline`}>Authority Notified:</h6>

                    <input type="radio" name="M9" className={style.radioinput} checked={PForm.AuthorityNotified === 'yes'} /><label className='ps-1 pe-2 col-4'>Y</label>
                    <input type="radio" name="M9" checked={PForm.AuthorityNotified === 'no'} /><label className='ps-1 '>N</label>

                  </div>

                  <div className='px-sm-1 col-6 '>
                    <label className={`${style.name4} pb-lg-2  `} >Time of Death:</label><input type="time" className={`${style.input4} col-10 my-lg-1  `} disabled value={PForm.TimeOfDeath} />

                  </div></div>
              </div>

              {/* part 6  */}
              <div className={`${style.part6} col-md-8`}>

                <div className={`${style.part68}  text-capitalize  px-2  py-4 `}>
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
                            <td ><input type="time" className={`${style.input4} w-100 px-1`} disabled value={PForm.Time} /> </td>
                            <td ><input type="text" className={`${style.input4} w-100 px-1`} disabled value={PForm.B_P} /> </td>
                            <td><input type="number" className={`${style.input4} w-100 px-1`} disabled value={PForm.PULSE} /> </td>
                            <td><input type="number" className={`${style.input4} w-100 px-1`} disabled value={PForm.RESP} /> </td>
                            <td><input type="number" className={`${style.input4} w-100 px-1`} disabled value={PForm.TEMP} /> </td>
                            <td><input type="number" className={`${style.input4} w-100 px-1`} disabled value={PForm.PulseO2} /> </td>
                            <td><input type="number" className={`${style.input4} w-100 px-1`} disabled value={PForm.ECG} /> </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              {/* end part 6 */}
            </div>
          </div>
        </div>

      </div>

    </form>)
}
