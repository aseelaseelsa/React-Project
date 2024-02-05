import { useEffect, React, useLocation, useState } from 'react'
import style from './Dashbord.module.css'
import axios from 'axios';
import Aos from 'aos';
import { useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

export default function UpdateUser() {
  let [statusError, setStatusError] = useState('');
  // Frontend validation
  const schema = Yup.object({
    Name: Yup.string().required('Name is required'),
    PersonalID: Yup.string().required('ID is required'),
    Email: Yup.string().required('Email is required').email('not valid email'),
    Password: Yup.string().required('Password is required'),
    Type: Yup.string().required('Type is required'),
    inService: Yup.string().required('Status is required'),
  })
  //end


  let navigate = useNavigate();
  let { id, name, email, personalId, password, dateOfBirth, type, inService } = useParams();



  let formik = useFormik({
    //object contain value that send to backend
    initialValues: {
      Name: name,
      PersonalID: personalId,
      Email: email,
      Password: password,
      DateOfBirth: dateOfBirth == 'null' ? '' : dateOfBirth,
      Type: type,
      inService: inService,
    }, validationSchema: schema,
    onSubmit: save,
  })


  //send new data to backend 
  async function save(values) {
    try {
      const { data } = await axios.put(`http://127.0.0.1:8000/api/Admin/UpdateUserInfo/${id}?Name=${values.Name}&Email=${values.Email}&PersonalID=${values.PersonalID}&Password=${values.Password}&DateOfBirth=${values.DateOfBirth}&Type=${values.Type}&inService=${values.inService}`,
        null,
        {
          headers: {
            'auth-token': localStorage.getItem('userToken')
          }
        }
      ).catch((error) => {
        console.log(error.response.data.message);
        setStatusError(error.response.data.message);
      });
      ////end api response

      navigate('/dashboard');
      toast.success('Updated Successfully', {
        position: "top-right",
        autoClose: 1800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {

    Aos.init(
      { duration: 1000 },
    );
    window.scrollTo(0, 0);
  }, [])

  return (
    <div> <section className={`h-100 bg-light`} transition-style="in:wipe:down">
      <div className="container py-5 h-100  ">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card card-registration my-4">
              <div className="row g-0">
                <div className="col-xl-6 d-none d-xl-block">
                  <img
                    src="/img/dashboard.jpeg"
                    alt="Sample photo"
                    className="img-fluid  h-100"
                    style={{ borderTopLeftRadius: '.25rem', borderBottomLeftRadius: '.25rem' }}
                  />
                </div>
                <div className="col-xl-6">
                  <form onSubmit={formik.handleSubmit} >

                    <div className="card-body p-md-5 text-black ">
                      <h3 className={`${style.Registration} mb-5 pt-3 text-uppercase text-center`}>Update User Information</h3>

                      <div className="row">
                        <div className="col-md-12 mb-4">
                          <div className="form-outline">
                            {/* Name input */}
                            <input type="text" name='Name' className={`${style.input} form-control form-control-lg `}
                              placeholder=' Full Name'
                              defaultValue={name}
                              onChange={formik.handleChange}/>
                            <p className='text-danger'>{formik.errors.Name}</p>

                            {/* personal id input */}
                            <input type="number" name='PersonalID' className={`${style.input} form-control form-control-lg mt-4`}
                              placeholder='ID'
                              defaultValue={personalId}
                              onChange={formik.handleChange} />
                            <p className='text-danger'>{formik.errors.PersonalID}</p>

                            {/* email input */}
                            <input type="text" name='Email' className={`${style.input} form-control form-control-lg mt-4`}
                              placeholder=' Email'
                              defaultValue={email}
                              onChange={formik.handleChange} />
                            {statusError ? <p className='text-danger '>{statusError}</p>
                              : <p className='text-danger '>{formik.errors.Email}</p>}

                            {/* password input*/}
                            <input type="text" name='Password' className={`${style.input} form-control form-control-lg mt-4`} placeholder='Password'
                              defaultValue={password}
                              onChange={formik.handleChange} />
                            <p className='text-danger'>{formik.errors.Password}</p>

                            {/* date of birth input */}
                            <label className={`${style.input} form-label ps-1 `}>Date Of Birth:</label>
                            <input
                              type="date"
                              name="DateOfBirth"
                              className={`${style.input} form-control form-control-lg mb-1`}
                              defaultValue={dateOfBirth}
                              onChange={formik.handleChange} />
                          </div>
                        </div>
                      </div>

                      {/* Type Input */}
                      <div  >
                        <div className="d-md-flex justify-content-start align-items-center ">
                          <h6 className={`${style.type} mb-0 me-4 ps-1`}>Type:</h6>

                          {['Admin', 'Paramedic', 'Hospital'].map((type) => (
                            <div className="form-check form-check-inline mb-0 me-4" key={type}>
                              <input
                                className="form-check-input"
                                type="radio"
                                name="Type"
                                defaultValue={type}
                                checked={formik.values.Type === type}
                                onChange={formik.handleChange}
                              />
                              <label className={`${style.input} form-check-label`}>{type}</label>
                            </div>
                          ))}
                        </div>
                        <div className='ps-1 '>
                          <p className='text-danger'>{formik.errors.Type}</p>
                        </div>
                      </div>
                      
                      {/* status input */}
                      <div className="d-md-flex justify-content-start align-items-center mb-5">
                        <h6 className={`${style.type} mb-0 me-4 ps-1`}>Status: </h6>
                        <div className="form-check form-check-inline mb-0 me-4">
                          <input className="form-check-input" type="radio" name="inService" id="Active"
                            defaultValue='Active'
                            checked={formik.values.inService === 'Active'}
                            onChange={formik.handleChange} />
                          <label className={`${style.input} form-check-label`} >Active</label>
                        </div>

                        <div className="form-check form-check-inline mb-0 me-4">
                          <input className="form-check-input" type="radio" name="inService" id="NotActive"
                            defaultValue='NotActive'
                            checked={formik.values.inService === 'NotActive'}
                            onChange={formik.handleChange} />
                          <label className={`${style.input} form-check-label`}>In Active</label>
                        </div>
                      </div>
                      {/* end status input */}


                      <div className="d-flex justify-content-center pt-3 ">
                        <button className={`${style.cssbuttons} me-2 `} type="submit"  >
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}><path fill="none" d="M0 0h24v24H0z" /><path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" /></svg>
                          <span>Save</span>
                        </button>


                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
