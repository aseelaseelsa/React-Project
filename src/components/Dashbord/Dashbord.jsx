import React, { useEffect, useState, useRef } from 'react'
import style from './Dashbord.module.css'
import "transition-style";
import { CiEdit } from "react-icons/ci";
import Aos from 'aos';
import 'aos/dist/aos.css'
import * as Yup from 'yup';
import axios from 'axios';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Loading from '../Loading/Loading';


export default function Dashbord() {
  // front end validation
  const schema = Yup.object({
    Name: Yup.string().required('Name is required'),
    PersonalID: Yup.string().required('ID is required'),
    Email: Yup.string().required('Email is required').email('not valid email'),
    Password: Yup.string().required('Password is required'),
    Type: Yup.string().required('Type is required'),
    inService: Yup.string().required('Status is required'),
  })

  let navigate = useNavigate()   

  let [paramedics, setParamedics] = useState([]);
  let [statusError, setStatusError] = useState('');
  const [search, setSearh] = useState("");

  //formik
  const formik = useFormik({
    initialValues: {
      Name: '',
      PersonalID: '',
      Email: '',
      Password: '',
      DateOfBirth: '',
      Type: '',
      inService: '',
    }, validationSchema: schema,
    onSubmit: sendRegisterData,
  })


  // send rigester data 
  async function sendRegisterData(values) {
    try {
      const { data } = await axios.post('http://127.0.0.1:8000/api/Admin/CreateUser', values ,
        {
          headers: {
            'auth-token': localStorage.getItem('userToken')
          }
        }
      ).catch((error) => {
        setStatusError(error.response.data.message);
      });

      // // Reset the form values
      formik.resetForm();

      toast.success('Created Successfully', {
        position: "top-right",
        autoClose: 3800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });


      // Reload the page after successful deletion
      setTimeout(function () {
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  }

  //end function


  //function to show paramedics data in table
  async function getParamedic() {
    try {
      let { data } = await axios.get('http://127.0.0.1:8000/api/Admin/UsersList',
        { headers: { 'auth-token': localStorage.getItem('userToken') } });
      setParamedics(data);
    } catch (error) {
      console.log(error);
    }
  }


  //end function
  useEffect(() => {
    window.scrollTo(0,0);
    Aos.init(
      { duration: 1000 },
    );
    getParamedic();
  }, []);


  //delete function (btn in table)
  async function deletedata(id) {
    try {
      const { data } = await axios.delete(`http://127.0.0.1:8000/api/Admin/DeleteUser/${id}`,
        {
          headers: {
            'auth-token': localStorage.getItem('userToken')
          }
        }
      )

      if (data.message === 'User Deleted') {
        // Reload the page after successful deletion
        window.location.reload();
      }
    } catch (error) {
      console.log('error');
    }
  }
  //end delete function

  // this function is work first (in delete btn)
  function deleted(id) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success ms-1",
        cancelButton: "btn btn-danger me-1"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        deletedata(id);
        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: "User deleted.",
          icon: "success"
        });
      }
    });

  }

  //start update function
  function updatedata(id, name, email, personalId, password, dateOfBirth, type, inService) {
    navigate(`/dashboard/updateUser/${id}/${name}/${email}/${personalId}/${password}/${dateOfBirth}/${type}/${inService}`);
  }
  //end update function

  return (
    <>
      <section className={`h-100 bg-light`} transition-style="in:wipe:down">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card card-registration my-4">
                <div className="row g-0">
                  <div className="col-xl-6 d-none d-xl-block">
                    <img
                      src="img/dashboard.jpeg"
                      alt="Sample photo"
                      className="img-fluid  h-100"
                      style={{ borderTopLeftRadius: '.25rem', borderBottomLeftRadius: '.25rem' }}
                    />
                  </div>
                  <div className="col-xl-6">
                    <div className="card-body p-md-5 text-black">
                      <h3 className={`${style.Registration} mb-5 pt-3 text-uppercase text-center`}>Welcome Admin</h3>
                      <form onSubmit={formik.handleSubmit}>
                        <div className="row">
                          <div className="col-md-12 mb-4">
                            <div className="form-outline">
                              {/* Name */}
                              <input
                                type="text"
                                name="Name"
                                className={`${style.input} form-control form-control-lg `}
                                placeholder="Full Name"
                                value={formik.values.Name}
                                onChange={formik.handleChange}
                              />
                              <p className='text-danger'>{formik.errors.Name}</p>

                              {/* Personal ID */}
                              <input
                                type="number"
                                name="PersonalID"
                                className={`${style.input} form-control form-control-lg mt-4`}
                                placeholder="ID"
                                value={formik.values.PersonalID}
                                onChange={formik.handleChange}
                              />
                              <p className='text-danger'>{formik.errors.PersonalID}</p>
                              {/* Email */}
                              <input
                                type="email"
                                name="Email"
                                className={`${style.input} form-control form-control-lg mt-4`}
                                placeholder="Email"
                                value={formik.values.Email}
                                onChange={formik.handleChange}
                              />
                              {
                                statusError ? <p className='text-danger '>{statusError}</p>
                                  : <p className='text-danger '>{formik.errors.Email}</p>
                              }
                              {/* Password */}
                              <input
                                type="text"
                                name="Password"
                                className={`${style.input} form-control form-control-lg mt-4`}
                                placeholder="Password"
                                value={formik.values.Password}
                                onChange={formik.handleChange}
                              />
                              <p className='text-danger'>{formik.errors.Password}</p>

                              {/* Date of Birth */}
                              <label className={`${style.input} form-label ps-1 mt-3 `}>Date of Birth:</label>
                              <input
                                type="date"
                                name="DateOfBirth"
                                className={`${style.input} form-control form-control-lg mb-1`}
                                value={formik.values.DateOfBirth}
                                onChange={formik.handleChange}
                              />
                            </div>
                          </div>
                        </div>

                        {/* Type Input */}
                        <div className='' >

                          <div className="d-md-flex justify-content-start align-items-center ">
                            <h6 className={`${style.type} mb-0 me-4 ps-1`}>Type:</h6>

                            {['Admin', 'Paramedic', 'Hospital'].map((type) => (
                              <div className="form-check form-check-inline mb-0 me-4" key={type}>

                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="Type"
                                  value={type}
                                  checked={formik.values.Type === type}
                                  onChange={formik.handleChange} />
                                <label className={`${style.input} form-check-label`}>{type}</label>
                              </div>
                            ))}
                          </div>
                          <div className='ps-1 '>
                            <p className='text-danger'>{formik.errors.Type}</p>
                          </div>
                        </div>

                        {/* Status Input */}

                        <div className=' mt-3 pt-2' >
                          <div className="d-md-flex justify-content-start align-items-center">
                            <h6 className={`${style.type} mb-0 me-4 ps-1`}>Status:</h6>
                            {['Active', 'NotActive'].map((status) => (
                              <div className="form-check form-check-inline mb-0 me-4" key={status}>
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inService"
                                  value={status}
                                  checked={formik.values.inService === status}
                                  onChange={formik.handleChange}
                                />
                                <label className={`${style.input} form-check-label`}>{status}</label>
                              </div>
                            ))}
                          </div>
                          <div className=' ps-1'>
                            <p className='text-danger'>{formik.errors.inService}</p>
                          </div>
                        </div>

                        <div className="d-flex justify-content-center pt-3">
                          <button className={`${style.cssbuttons} me-2`} type="submit">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
                              <path fill="none" d="M0 0h24v24H0z" />
                              <path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" />
                            </svg>
                            <span>Add</span>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* User Management part */}
      <div className={`${style.tablePart} pb-5 pt-5  `} >
        <div className={`${style.tableContainer}  container-lg  `}>

          <h2 className={`${style.Registration} text-center py-5 fs-1  `} data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="700"> User Management </h2>

          <form className={`${style.form} w-50 mb-5`}
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="700">
            <label htmlFor="search" className={`${style.labelstyle}`}>
              <input className={`${style.input2}`} type="text" required placeholder="Search " id="search" onChange={(e) => setSearh(e.target.value)} />


              <div className={`${style.fancybg} `} />
              <div className={`${style.search}`}>
                <svg viewBox="0 0 24 24" aria-hidden="true" className="r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-4wgw6l r-f727ji r-bnwqim r-1plcrui r-lrvibr ">
                  <g>
                    <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
                  </g>
                </svg>
              </div>

            </label>
          </form>

          <div className="table-responsive-md  "
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="700">

            <table className="table text-center ">
              <thead >
                <tr className='table-dark  '>
                  <th>Name</th>
                  <th>Email</th>
                  <th>ID</th>
                  <th>Password</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Update</th>
                  <th>Delete</th>

                </tr>

              </thead>

              {/* loader condition */}
              {paramedics.length > 0 ?

                <tbody className='text-center' >
                  {/* Search condition */}
                  {paramedics.filter((paramedic) => {
                    if (search === "") {
                      return paramedic;
                    }
                    else if (paramedic.Name.toUpperCase().includes(search.toUpperCase())) {
                      return paramedic;
                    }
                  })
                    // show user data
                    .reverse().map((paramedic) => {
                      return (
                        <tr>
                          <td className='pt-5'>{paramedic.Name}
                          </td>
                          <td className='pt-5'>{paramedic.Email}</td>
                          <td className='pt-5'>{paramedic.PersonalID}</td>
                          <td className='pt-5'>{paramedic.Password}

                          </td>

                          <td className='pt-5'>{paramedic.Type}</td>
                          <td className='pt-5'>{paramedic.inService}</td>
                          <td  >
                            <div className='row  pt-3 px-3  d-flex justify-content-center' >
                              <button className={`${style.updatebutton}   `} onClick={() => { updatedata(paramedic.id, paramedic.Name, paramedic.Email, paramedic.PersonalID, paramedic.Password, paramedic.DateOfBirth, paramedic.Type, paramedic.inService) }}  >
                                <CiEdit className={`${style.deletesvgIcon} fs-5 fw-bold `} />
                              </button></div>
                          </td>
                          <td >
                            <div className='row  pt-3 px-3  d-flex justify-content-center' >
                              <button className={`${style.deletebutton}  `} onClick={() => {deleted(paramedic.id)}}>
                                <svg className={style.deletesvgIcon} viewBox="0 0 448 512">
                                  <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                                </svg>
                              </button>
                            </div>
                          </td>
                        </tr>

                      )
                    })}

                  {/* if user not found in search */}
                  {search !== "" && paramedics.filter(paramedic => paramedic.Name.toUpperCase().includes(search.toUpperCase())).length === 0 && (
                    <tr>
                      <td colSpan="8">User not found</td>
                    </tr>
                  )}
                </tbody>

                //loader conditions
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
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
