import { React, useEffect, useState } from 'react';
import style from './AllForm.module.css'
import axios from 'axios';
import Aos from 'aos';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

export default function AllForms() {
  let [Forms, setForms] = useState([]);
  let [UpdateForms, setUpdateForms] = useState([]);
  //get all patient Forms
  async function getForm() {
    try {
      let { data } = await axios.get('http://127.0.0.1:8000/api/Admin/PatientFormsList', {
        headers: {
          'auth-token': localStorage.getItem('userToken')
        }
      });
      setForms(data.patients);
    } catch (error) {
      console.log(error);
    }

  }

  //to show main form when i click show pationt form buttons
  let navigate = useNavigate()
  function showform(id) {
    navigate(`/allForms/showForm/${id}`);
  }


  //get updateStatus form
  async function getUpdateForm() {
    try {
      let { data } = await axios.get('http://127.0.0.1:8000/api/Admin/StatusUpdateFormsList', {
        headers: {
          'auth-token': localStorage.getItem('userToken')
        }
      }
      );
      setUpdateForms(data);
    } catch (error) {
      console.log(error);
    }


  }


  //to show update form when i click show update form buttons
  function showUpdateform(id) {
    navigate(`/allForms/showUpdateForm/${id}`);
  }




  useEffect(() => {
    window.scrollTo(0, 0);
    Aos.init(
      { duration: 1000 },
    );
    getUpdateForm();
    getForm();
  }, [])





  return (
    <div className={`${style.part2}`}>
      <div className="container   ">
        <div className={`${style.tablePart} pb-5 pt-3  `} >
          <div className={`${style.tableContainer}  container-lg  `}>
            <h2 className={`${style.Registration} text-center py-5 fs-1  `} > Forms Data</h2>
            <div className="table-responsive-md  ">
              <table className="table text-center ">
                <thead >
                  <tr className='table-dark'>
                    <th>Paramedic<br /> who  wrote the form</th>
                    <th>Action</th>
                    <th >Update Forms</th>               
                  </tr>
                </thead>
                {/* loader condition*/}
                {Forms.length > 0 ?

                  <tbody className="text-center">
                    {/* show all forms  */}
                    {Forms.reverse().map((form) => {
                      const updateFormsForPatient = UpdateForms.filter((update) => update.patient_id === form.id);
                      return (
                        <>
                          <tr key={form.id}>
                            <td className="py-3 pt-5">{form.user_name}</td>
                            <td className="py-4 ">
                              <button className="btn btn-warning btn-md alert-secondary" onClick={() => showform(form.id)}>
                                Show Patient Form
                              </button>
                            </td>
                            <td className="py-3">
                              <div>
                                <div className="pb-2 ">
                                  {updateFormsForPatient.length > 0 ? 'Update Forms' : <div className='alert alert-secondary py-2 '>There Are No Updated Forms</div>}
                                </div>
                                {updateFormsForPatient.reverse().map((updateForm) => (
                                  <div className='pb-2' key={updateForm.id}>
                                    <button className="btn btn-danger btn-sm py-2" onClick={() => showUpdateform(updateForm.id)}>
                                      Show Update Form {updateForm.id}
                                    </button>
                                  </div>
                                ))}
                              </div>
                            </td>
                           
                          </tr>
                        </>
                      );
                    })}
                  </tbody>

                  // loader condition 
                  :
                  <tbody>
                   <tr>
                    <td colSpan="8" className='pt-3 pb-2'>
                      <Loading />
                      <p className='pb-0'>Not Found</p>
                    </td>
            
                    </tr>
                  </tbody>
                }
                {/* end loader condition */}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
