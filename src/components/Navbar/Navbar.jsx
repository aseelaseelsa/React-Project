import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import style from './Navbar.module.css';
export default function Navbar({ user, logout }) {

  const location = useLocation();

  function isActive(route) {
    return location.pathname === route;
  }

  return (

    <>
      <nav className={`${style.Navbar1}  navbar sticky-top navbar-expand-lg `}>
        <div className="container ">
          <Link className="navbar-brand" to=""><img className={style.img} src='./img/logo.png' alt='' /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item ">
                <Link className={`${style.NavLink} nav-link me-3 px-0 mx-3 ${isActive('/') ? style.active : ''}`} to="">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`${style.NavLink} nav-link me-3 px-0 mx-3 ${isActive('/about') ? style.active : ''}`} to="about">About</Link>
              </li>

              <li className="nav-item">
                <Link className={`${style.NavLink} nav-link me-3 px-0 mx-3 ${isActive('/contact') ? style.active : ''}`} to="contact">Contact</Link>
              </li>




            </ul>
            <ul className="navbar-nav ms-auto mb-2 mt-lg-0  p-0">

              {/* Logout condition */}

              {!user ?
                <li className="nav-item">
                  <Link className={`${style.NavLink} nav-link me-3 px-0 mx-3 pt-lg-3 ${isActive('/login') ? style.active : ''}`} to="login">Login</Link>
                </li>
                :

                <>

                  {/* Paramedic condition */}
                  {user.inService === 'Active' && user.Type === 'Paramedic' ?
                    <>
                      <li className="nav-item">
                        <Link className={`${style.NavLink} nav-link me-3  pt-lg-3  px-0 mx-3 ${isActive('/Form') ? style.active : ''} `} to="Form">Add Form</Link>
                      </li>
                      <li className="nav-item">
                        <Link className={`${style.NavLink} nav-link me-3  pt-lg-3  px-0 mx-3  ${isActive('/updateForm') ? style.active : ''} `} to="updateForm">Update Form</Link>
                      </li>
                    </>
                    : ''}
                  {/* hospital&& admin condition */}
                  {user.inService === 'Active' && (user.Type === 'Hospital' || user.Type === 'Admin') ?
                    <li className="nav-item">
                      <Link className={`${style.NavLink} nav-link me-3 px-0 pt-lg-3  mx-3 ${isActive('/allForms') ? style.active : ''}`} to="allForms">All Forms</Link>
                    </li>

                    : ''}
                  {/* admin condition */}
                  {user.inService === 'Active' && user.Type === 'Admin' ?

                    <li className="nav-item">
                      <Link className={`${style.NavLink} nav-link me-3 px-0 pt-lg-3  mx-3 ${isActive('/dashboard') ? style.active : ''}`} to="dashboard">Dashboard</Link>
                    </li>
                    : ''}
                  {/*end admin condition */}


                  <li className="nav-item">
                    <span className={`${style.NavLink} nav-link me-3 px-0 pt-lg-3  mx-3  pb-0`} onClick={logout}>Logout</span>
                  </li>
                </>
              }
              {/* end Logout condition */}


            </ul>
          </div>
        </div>
      </nav>

    </>


  )
}
