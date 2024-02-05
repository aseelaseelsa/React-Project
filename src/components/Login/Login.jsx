import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import style from './Login.module.css'
import "transition-style";
import Aos from 'aos';
import 'aos/dist/aos.css'
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


export default function Login2(props) {

  //validation frontend
  const schema = Yup.object({
    email: Yup.string().required('email is required').email('not valid email'),
    password: Yup.string().required('password is required'),
  })

  let navigate = useNavigate();   

  let formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    }, validationSchema: schema,//frontend validation
    onSubmit: sendLoginData,  

  })

  async function sendLoginData(values) {
    try{
 let { data } = await axios.post("http://127.0.0.1:8000/api/login", values).catch((error) =>{
  toast.error(error.response.data.message, {
    position: "top-right",
    autoClose: 1600,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
})


if (data.success === true) {
  toast.success('Login Successfully', {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });



  localStorage.setItem('userToken', data.user.api_token);// طالما في توكين باللوكل ستوريج معناها اليةزر عامل تسجيل دخول
  props.info();
  navigate('/');
}
    }catch (error) {
      console.log(error);
    }
   
  }

  useEffect(() => {
    window.scrollTo(0,0);
    // Aos.init();
  }, [])
  return (
    <>

      <section className={`${style.gradientForm}  py-4 `} transition-style="in:wipe:down"  >
        <div className="container py-5 h-100 ">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">

                        <h4 className={`${style.Welcome} mt-1 mb-5 pb-1 text-capitalize`}>Welcome User</h4>
                      </div>
                      <form onSubmit={formik.handleSubmit}>

                        <div className="form-outline  mb-4">

                          <input type="email" className="form-control" placeholder="Enter Your Email " name='email' value={formik.values.email} onChange={formik.handleChange} />
                          {/* frontend error */}
                          <p className='text-danger'>{formik.errors.email}</p>

                        </div>


                        <div className="form-outline mb-4">
                          <input type="password" className="form-control" placeholder="Enter Your Password " name='password' value={formik.values.password} onChange={formik.handleChange} />
                          {/* frontend error */}
                          <p className='text-danger'>{formik.errors.password}</p>
                        </div>
                        <div className="text-center pt-3 mb-5 pb-1  d-flex justify-content-center ">
                          <button className={`${style.sendBtn} `} type='submit' >Login</button>

                        </div>

                      </form>
                    </div>
                  </div>



                  <div className={`${style.gradientCustom22} col-lg-6 d-flex align-items-center`}>
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 className="mb-4"> Dedicated Users! </h4>
                      <p className="small mb-0">
                        We extend our heartfelt gratitude for your commitment to providing emergency medical care with skill, compassion, and unwavering dedication. Your expertise and quick response play a vital role in safeguarding lives during critical moments. As you embark on this noble journey of serving our community, know that your presence makes a significant difference. Thank you for being the first responders who make a profound impact in times of need!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>





    </>
  )
}
