import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function AdminHospitalProtectedRouter({ children }) {
  let [user, setUser] = useState(null);
  let navigate = useNavigate()   



  
  useEffect(() => {
    if (localStorage.getItem('userToken')) {
      let token = localStorage.getItem('userToken');
      const decoded = jwtDecode(token);
      console.log(decoded);
      setUser(decoded);
    } else {
      navigate('/login');
      {
        toast.error('Please Login Before Proceeding', {
          position: "top-right",
          autoClose: 2200,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
      }
    }
  }, []);



  //start accept condition //
  if (user && user.inService === 'Active'
    && (user.Type === 'Admin' || user.Type === 'Hospital')) {
    return <>{children}</>
  }
  //end

  if (user && (user.Type === 'Paramedic')) {

    return (<>
      <Navigate to='/'></Navigate>
      {toast.error('Access To This Page Is Restricted', {
        position: "top-right",
        autoClose: 2800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })}

    </>)
  }
  //end

  if (user && (user.Type === 'Admin' || user.Type === 'Hospital') && user.inService === 'NotActive') {
    return (<>
      <Navigate to='/'></Navigate>
      {toast.error('You Are Not Active User', {
        position: "top-right",
        autoClose: 3800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })}

    </>)
  }
  //end



}
