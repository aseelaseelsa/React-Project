import React from 'react'
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function PageNotFound() {
  return (
    <>
      <Navigate to='/'></Navigate>
      {toast.error('Page Not Found', {
        position: "top-right",
        autoClose: 2800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })}
    </>

  )

}
