import React, { useEffect, useState } from 'react'
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './components/Login/Login';
import Dashbord from './components/Dashbord/Dashbord';
import Form from './components/Form/Form';
import UpdateUser from './components/Dashbord/UpdateUser.jsx';
import ShowForm from './components/Form/ShowForm.jsx';
import UpdateForm from './components/Form/UpdateForm';
import { ToastContainer } from 'react-toastify';
import { jwtDecode } from 'jwt-decode';
import AllForms from './components/AllForms/AllForms';
import ShowUpdateForm from './components/Form/ShowUpdateForm.jsx';
import AdminProtectedRoter from './components/ProtectedRouter/AdminProtectedRoter.jsx';
import ParamedicProtectedRouter from './components/ProtectedRouter/ParamedicProtectedRouter.jsx';
import AdminHospitalProtectedRouter from './components/ProtectedRouter/AdminHospitalProtectedRouter.jsx';
import PageNotFound from './components/PageNotFound/PageNotFound.jsx';



export default function App() {
  let [user, setUser] = useState(null);// الداتا المفكوك تشفيرها
  //   فك التشفير وعملتها بالااب حتر اقدر ارسل الداتا لجميع الصفحات رح يتنفذ بعد ما اعمل لوج ان
  function saveCurrentUser() {
    let token = localStorage.getItem('userToken');
    const decoded = jwtDecode(token);
    setUser(decoded);

  }

  //app اول ما تفتح ال
  // روح شوف اذا في يوزر باللوكل ستوريج او لا
  useEffect(() => {
    if (localStorage.getItem('userToken')) {//اذا كان في توكين معناها هاد الشحص حقيقي استدعي السيف كرنت يوزر
      saveCurrentUser();
    }
  }, []);



  let routers = createBrowserRouter([
    {
      path: '', element: <Layout user={user} setUser={setUser} />,
      children: [
        { index: true, element: <Home /> },
        { path: '*', element: <PageNotFound /> },
        { path: 'login', element: <Login info={saveCurrentUser}/> },
        { path: 'about', element: <About /> },
        { path: 'contact', element: <Contact /> },
        { path: 'dashboard', element: <AdminProtectedRoter><Dashbord /></AdminProtectedRoter> },
        { path: 'allForms', element: <AdminHospitalProtectedRouter><AllForms info={user}/></AdminHospitalProtectedRouter> },
        { path: 'Form', element: <ParamedicProtectedRouter><Form /></ParamedicProtectedRouter> },
        { path: 'allForms/showForm/:id', element: <AdminHospitalProtectedRouter><ShowForm /></AdminHospitalProtectedRouter> },
        { path: 'allForms/showUpdateForm/:id', element: <AdminHospitalProtectedRouter><ShowUpdateForm /></AdminHospitalProtectedRouter> },
        { path: 'dashboard/updateUser/:id/:name/:email/:personalId/:password/:dateOfBirth/:type/:inService', element: <AdminProtectedRoter><UpdateUser /></AdminProtectedRoter> },
        { path: 'updateForm', element: <ParamedicProtectedRouter><UpdateForm /></ParamedicProtectedRouter> },
      ]
    },


  ])


  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
      <ToastContainer theme="light"></ToastContainer>
      
     

    </>


  )
}
