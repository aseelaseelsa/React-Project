import {React,useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import { useNavigate } from 'react-router-dom';

export default function Layout({ user, setUser }) {

  let navigate = useNavigate();

  //logout function
  function logout() {
    localStorage.removeItem('userToken');
    setUser(null);
    navigate('/login');
  }

  return (
    <div>
      <Navbar user={user} logout={logout} />
      <Outlet></Outlet>
      <Footer />
    </div>
  )
}
