// import React ,{useEffect} from 'react'
// import style from "./AddForm.module.css"
// import "transition-style";
// import Aos from 'aos';
// import 'aos/dist/aos.css'
// import { MdArrowBackIos ,MdArrowForwardIos} from "react-icons/md";


// export default function AddForm() {
  
//   useEffect(()=>{
//     Aos.init(
//     {duration:1000},
//     );
//   },[])
//   return (
// <>
// <div className={`${style.Form} container-fluid  `}  data-aos="fade-down" >
//  <div className={`${style.page} container my-5 ` } >
// <div className="row pt-5  " >
//  <div className='d-flex pb-4 col-12  justify-content-center ' >
//   <h3 className={style.header} >Patient Care Report  </h3> 

// </div>

// {/* part1 */}


//   <div className='d-inline-flex  col-12  justify-content-start py-2'>
//   <h4  className={`${style.header2} pe-2`} >Services Name:  </h4> <input type="text" className= "col-7 col-lg-3 px-2" /></div>
 

// {/* part2 */}

// <div className={`${style.div2} py-2  `}>
// <div className={`${style.userbox} col-lg-2 col-6 d-inline-flex pe-4  me-lg-5`}> <input type="number" name required className={`${style.input}`} /> <label>Unit #:</label> </div>
// <div className={`${style.userbox} col-lg-2 col-6 d-inline-flex pe-4  me-lg-5`}> <input type="number" name required className={`${style.input}`}/> <label>Incident #:</label> </div>
// <div className={`${style.userbox} col-lg-2 col-6 d-inline-flex pe-4  me-lg-5`}> <input type="number" name required className={`${style.input}`}/> <label>Pt.Record #:</label> </div>
// <div className={`${style.userbox} col-lg-2 col-6 d-inline-flex pe-4`}> <input type="number" name required className={`${style.input}`}/> <label>Crash #:</label> </div>


// </div>


// {/* part3 */}

// <div className='  pt-4 '>
// <div className={`${style.userbox} col-lg-3 col-9    d-inline-flex pe-4 me-lg-4  `}> <input type="date" name required className={`${style.date}`}/> <label >Date of Onset:</label> </div>
// <div className={`${style.userbox} col-lg-3 col-9  d-inline-flex pe-4  me-lg-4  `}> <input type="date" name required className={`${style.date}`}/> <label>Date Unit Notified:</label> </div>
// <div className={`${style.userbox} col-lg-3 col-9   d-inline-flex pe-4  me-lg-4`}> <input type="date" name required className={`${style.date}`}/> <label>Run Report Date:</label> </div>
// <div className={`${style.userbox} col-lg-2 col-6 d-inline-flex `}> <input type="number" name required className={`${style.date}`} /> <label>Trauma ID :</label> </div>


// </div>


// {/* part4 */}
// <div className={`${style.div2} py-2 `}>
// <div className={`${style.userbox}  col-12 d-inline-flex pe-4 me-lg-4  `}> <input type="text" name required className={`${style.input2}  `}/> <label >Dispatched For :</label> </div>


// </div>



// {/* part5 */}

// <div className={`${style.part6} col-12 d-lg-flex   `}>
// <div className= {`${style.part6} col-lg-6   col-12 p-2`}>
// <div className='d-flex pb-2 col-12  justify-content-center '>
//   <h4 className={`${style.header2} text-uppercase`}>Time (MILITARY) </h4> 
//   </div>
// <div className=' d-flex '>
// <div className={`${style.userbox} col-6 col-lg-5 me-2 me-lg-5 pe-3 `}> <input type="time" name required className={`${style.input} pb-4 pt-4`}/> <label>Dispatch <br/> Notified:</label> </div>
// <div className={`${style.userbox} col-6 col-lg-5  me-2  me-lg-5 pe-3 `}> <input type="time" name required className={`${style.input} pb-4 pt-4`}/> <label>Time Lift <br/> Scene:</label> </div>
// </div>
// <div className=' d-flex '>
// <div className={`${style.userbox} col-6 col-lg-5 me-2 me-lg-5 pe-3 `}> <input type="time" name required className={`${style.input3} pb-2   ` }/> <label>Unit Notified:</label> </div>
// <div className={`${style.userbox} col-6 col-lg-5  me-2  me-lg-5 pe-3 `}> <input type="time" name required className={`${style.input3} pb-3 pt-4 `}/> <label>Arrived at <br/> Destination:</label> </div>
// </div>
// <div className=' d-flex '>
// <div className={`${style.userbox} col-6 col-lg-5 me-2 me-lg-5 pe-3 `}> <input type="time" name required className={`${style.input3} pb-2 `}/> <label>Unit Enroute:</label> </div>
// <div className={`${style.userbox} col-6 col-lg-5  me-2  me-lg-5 pe-3 `}> <input type="time" name required className={`${style.input3} pb-2 `}/> <label>Back in service:</label> </div>
// </div>
// <div className=' d-flex '>
// <div className={`${style.userbox} col-6 col-lg-5 me-2 me-lg-5 pe-3 `}> <input type="time" name required className={`${style.input3} pb-2 `}/> <label>Arrived at Scene:</label> </div>
// <div className={`${style.userbox} col-6 col-lg-5  me-2  me-lg-5 pe-3 `}> <input type="time" name required className={`${style.input3} pb-2 `}/> <label>Total incident Time :</label> </div>
// </div>





//   <div className="  d-inline-flex  col-12    py-5   ">
//     <div className="  col-8  ">
//       <div className='d-flex py-3 col-12'>
//         <div className='col-12 ' >
//         <label className={`${style.name2} d-inline-flex  col-5 `} >Minutes At Response: </label>
//         <input type="number" name required className={`${style.input4} d-inline-flex w-50 ps-2`}/> 

//         </div>
  
//       </div>



//       <div className='col-12  py-3'>
//         <label className={`${style.name2} d-inline-flex  col-5 `} >Minutes At Scene: </label>
//         <input type="number" name required className={`${style.input4} d-inline-flex w-50 ps-2`}/> 

//         </div>
//         <div className='col-12 pt-3'>
//         <label className={`${style.name2} d-inline-flex  col-5`} >Minutes For Transport: </label>
//         <input type="number" name required className={`${style.input4} d-inline-flex w-50 ps-2`}/> 

//         </div>
//     </div>
//     <div className="col-4 col-lg-3 pt-lg-2  px-2    ">
//     <div className='d-inline-flex  col-5 '>  
//         <label className={`${style.name2} d-inline-flex px-2 pt-2  `} >911</label>
//      <div className='col-12 '>
    

//     <div className='col-7'>
//     <input type="radio"  name="M9" className={style.radioinput} /><label className='ps-1  '>Y</label>
//     </div>
//     <div >
//     <input type="radio"  name="M9"  /><label className='ps-1 '>N</label>
//       </div>
// </div>


// </div>

//     <label className={`${style.name2} pb-lg-2 pt-4 `} >Time of Injury/IIIness:</label><input type="time" name required className={`${style.input4} w-100  my-lg-1 `}/> 


    
//     </div>
//   </div>

















// </div>


// <div className={`${style.part6}  col-lg-6  col-12 pb-5  p-2 `}>
// <div className='d-flex pb-2 col-12  justify-content-center '>
//   <h4 className={`${style.header2} text-uppercase pb-3`}>Patient Information</h4> 
//   </div>
//   <div className='col-12 d-flex '>
// <div className='col-4  pe-4  '>
// <label className={`${style.name1} py-2 col-12 `} >(Last Name)</label><input type="text" name required className={`${style.input4} w-100 mb-3 ps-1`}/> 
// </div>
// <div className='col-4   pe-4'>
// <label className={`${style.name1} py-2 col-12`}>(First)</label><input type="text" name required className={`${style.input4} w-100 mb-3 ps-1`}/> 

// </div>
// <div className='col-4  pe-4'>
// <label className={`${style.name1} py-2  col-12`}>(MI)</label><input type="text" name required className={`${style.input4} w-100 mb-3 ps-1`}/> 

// </div>
// </div>


// <div className='col-12 d-flex   '>
// <div className='col-6 pe-4  '>
// <label className={`${style.name1} pt-4 pb-2 col-12 `} >(Street Name)</label><input type="text" name required className={`${style.input4} w-100 mb-2 ps-1`}/> 
// </div>
// <div className='col-6  pe-4'>
// <label className={`${style.name1} pt-4 pb-2  col-12`}>(Apt. #)</label><input type="text" name required className={`${style.input4} w-100 mb-2 ps-1`}/> 

// </div>

// </div>




// <div className='col-12 d-flex '>
// <div className='col-4  pe-4  '>
// <label className={`${style.name1} pt-4 pb-2   col-12 `} >(City)</label><input type="text" name required className={`${style.input4} w-100 mb-3 px-1`}/> 
// </div>
// <div className='col-4  pe-4'>
// <label className={`${style.name1} pt-4 pb-2   col-12`}>(State)</label><input type="text" name required className={`${style.input4} w-100 mb-3 px-1`}/> 

// </div>
// <div className='col-4  pe-4'>
// <label className={`${style.name1} pt-4 pb-2   col-12`}>(Zip Code)</label><input type="number" name required className={`${style.input4} w-100 mb-3  px-1`}/> 

// </div>
// </div>


// <div className='col-12 d-flex  '>
// <div className='col-4  pe-4  '>
// <label className={`${style.name1} pt-4 pb-2  col-12 `} >(Phone)</label><input type="number" name required className={`${style.input4} w-100  px-1`}/> 
// </div>
// <div className='col-4  pe-4'>
// <label className={`${style.name1} pt-4 pb-2  col-12`}>(Date of Birth)</label><input type="date" name required className={`${style.input4} w-100  px-1`}/> 

// </div>
// <div className='col-4 pe-4 '>
// <label className={`${style.name1} pt-4 pb-2  col-12`}>(Age yrs. mons)</label><input type="number" name required className={`${style.input4} w-100  px-1`}/> 

// </div>
// </div>


// <div className='col-12 pt-5  '>
// <div className="col-6  pb-4  ">
// <label className={`${style.name1}  pb-2`} >(SSN#)</label><input type="number" name required className={`${style.input4} w-100  px-1`}/> 

// </div>
// <div className="col-6 d-flex  ">

//         <label className={`${style.name1} col-4   `} >(Gender)</label>
//      <div className=' d-inline-flex col-12 '>
//      <div className='d-inline-flex col-3'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >M 1</label><br />
//  </div></div>
//  <div className='d-inline-flex col-3'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >F 2</label><br />
//  </div></div>
//  <div className='d-inline-flex col-5'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >Unk 3</label><br />
//  </div></div>

// </div>


// </div>


// </div>



// <div className='col-12 d-flex pt-5'>
// <div className='col-3 col-lg-3 '>

// <label className={`${style.name1}  `} >Ethnicity</label>
//      <div >
//      <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' > 0 Other</label><br />
//  </div></div>
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >1 Hispanic</label><br />
//  </div></div>
  
// </div>
// </div>

// <div className='col-9  d-inline-flex '>
//   <div className='col-2  '>
//     <span  className={`${style.name1} ps-2 `}>Race</span>
//   </div >
//   <div className='col-10 '>
// <div className='col-12'>
// <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' > 0 Other, including multi racial</label><br />
//  </div></div>
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' > 1 White</label><br />
//  </div></div>
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >2 Black</label><br />
//  </div></div>
//   </div>
//   <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >3 American indian,Eskimo or Aleut</label><br />
//  </div></div>
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >4 Asian</label><br />
//  </div></div>
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >5 U Undetermined</label><br />
//  </div></div>
//   </div>




// </div>
// </div>



// </div>
// </div>
























// {/* part6 */}

// <div className={`${style.part6} col-12  d-lg-inline-flex `}>
// <div className='col-lg-6 '>


//   <div className=' col-12  d-lg-inline-flex  py-lg-3'>
   
//     <div className='col-lg-4 pt-5' >
//   <label className={`${style.name4}  `}>Chief Complaint:</label>
//   </div>
//   <div className='col-lg-8'>
// <textarea id="w3review" name="w3review" rows={4} className='col-11 px-2'  />
// </div>

// </div>


// <div className='  col-12   d-lg-inline-flex py-lg-3'>
   
//    <div className='col-lg-4 pt-5' >
//  <label className={`${style.name4}  `}>Past Midical History:</label>
//  </div>
//  <div className='col-lg-8'>
// <textarea id="w3review" name="w3review" rows={4} className='col-11 px-2'  />
// </div>

// </div>
// <div className=' col-12   d-lg-inline-flex py-lg-3'>
   
   
//    <div className='col-lg-4 pt-5' >
//  <label className={`${style.name4}  `}>Allergies:</label>
//  </div>
//  <div className='col-lg-8'>
// <textarea id="w3review" name="w3review" rows={4} className='col-11 px-2'  />
// </div>



// </div>
// <div className=' col-12  d-lg-inline-flex py-lg-3'>
   
   
//    <div className='col-lg-4 pt-5' >
//  <label className={`${style.name4}  `}>Emerg. Med. Care Given:</label>
//  </div>
//  <div className='col-lg-8'>
// <textarea id="w3review" name="w3review" rows={4} className='col-11 px-2'  />
// </div>



// </div>
// </div>









// <div className='col-lg-6  '>
//   <div className=' col-12   py-lg-3 d-lg-inline-flex'>
   
   
//     <div className='col-lg-4 pt-5' >
//   <label className={`${style.name4}  `}>injury/IIIness Narravtive:</label>
//   </div>
//   <div className='col-lg-8'>
// <textarea id="w3review" name="w3review" rows={4} className='col-11 px-2'  />
// </div>



// </div>


// <div className='col-12  d-lg-inline-flex py-lg-3'>
   
   
//    <div className='col-lg-4 pt-4' >
//  <label className={`${style.name4}  `}>Pertinent Findings on  Physical Exarn:</label>
//  </div>
//  <div className='col-lg-8'>
// <textarea id="w3review" name="w3review" rows={4} className='col-11 px-2'  />
// </div>



// </div>
// <div className=' col-12    d-lg-inline-flex py-lg-3'>
   
   
//    <div className='col-lg-4 pt-5' >
//  <label className={`${style.name4} `}>Patient Medications:</label>
//  </div>
//  <div className='col-lg-8'>
// <textarea id="w3review" name="w3review" rows={4} className='col-11 px-2'  />
// </div>



// </div>
// <div className=' col-12 d-lg-inline-flex py-lg-3'>
   
   
//    <div className='col-lg-4 pt-4' >
//  <label className={`${style.name4}  `}>Patient Response to  Emerg. Med. Care:</label>
//  </div>
//  <div className='col-lg-8'>
// <textarea id="w3review" name="w3review" rows={4} className='col-11 px-2'  />
// </div>



// </div>
// </div>
// </div>





























// <div className= {`${style.part6} col-12  py-4`}>
// <div className=' pt-4'>
//   <h6 className={`${style.header2} text-uppercase text-center `}>Provider impression - select one</h6> 
//   </div>





//  <div className=' col-lg-4 col-12 col-sm-6 d-inline-flex   text-capitalize my-4 '>
//   <div>
//   <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >Abdominal Pain/Problems</label><br />
//  </div></div>

//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >Airway Obstruction</label><br />
//  </div></div>
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >Alleged Sexual Assaulat</label><br />
//  </div></div>
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >allergic reaction</label><br />
//  </div></div>
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >aitered level of consciousness</label><br />
//  </div></div>
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >behavioral disorder</label><br />
//  </div></div>
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >cardiac arrest</label><br />
//  </div></div>
//  </div>
// </div>





// {/* div2 */}

//  <div className=' col-lg-4 col-12 col-sm-6 d-inline-flex  text-capitalize my-4'>
//   <div>
//   <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >Cardiac Rhythm Disturbance</label><br />
//  </div></div>
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >Chest Pain/Discomfort</label><br />
//  </div></div>
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >Diabetic Symptoms</label><br />
//  </div></div>
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >Electrocution</label><br />
//  </div></div>
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >Hyperthermia</label><br />
//  </div></div>
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >hypoglycemia</label><br />
//  </div></div>
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >Hypothermia (Disease)</label><br />
//  </div></div>
 
//  </div>
// </div>


// {/* 
// div3 */}
//  <div className='  col-lg-4 col-12 col-sm-6 d-inline-flex   text-capitalize my-4'>
//  <div>
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >Hypothermia (Disease)</label><br />
//  </div></div>
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >Hypovolemia</label><br />
//  </div></div>
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >Inhalation Injury (Toxic Gas)</label><br />
//  </div></div>
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >Not Applicable</label><br />
//  </div></div>
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >Obvious Death</label><br />
//  </div></div>
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >Other</label><br />
//  </div></div>
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >Poisoning/Drug Ingestion</label><br />
//  </div></div>
//   </div>
//  </div>




// {/* 
// div4 */}
//  <div className=' col-lg-4 col-12 col-sm-6 d-inline-flex   text-capitalize my-4  '>
//  <div>
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >Pregnancy/OB Delivery</label><br />
//  </div></div>
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >Psychiatric Disorder</label><br />
//  </div></div>
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >Respiratory Arrest</label><br />
//  </div></div>
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >Respiratory Distress</label><br />
//  </div></div>

//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >Seizure</label><br />
//  </div></div>
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >Shock</label><br />
//  </div></div>
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >Smoke Inhalation</label><br />
//  </div></div>

//   </div>
//  </div>
//  {/* 
// div5 */}
//  <div className=' col-lg-4 col-12 col-sm-6 d-inline-flex   text-capitalize my-4 '>
//  <div>
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >Stings/Venomous Bites</label><br />
//  </div></div>
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >Stroke/CVA</label><br />
//  </div></div>
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >Syncope/Fainting</label><br />
//  </div></div>
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >Traumatic Hypovolemia</label><br />
//  </div></div>
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >Traumatic Injury</label><br />
//  </div></div>
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >Vaginal Hemorrhage</label><br />
//  </div></div>
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >Unknown</label><br />
//  </div></div>
//   </div>
//  </div>
// </div>













// <div className={`${style.part6}   `}>
// <div className='col-12 col-lg-4  d-lg-inline-flex    py-2 '>
//  <div className='d-inline-flex col-12 text-capitalize '> 
//  <div className='col-lg-5 col-6  text-center px-2 '>
//   <label className={`${style.name} pb-3 `}>Multual Aid</label>
//   <div>
// <textarea id="w3review" name="w3review" rows={4} className='col-12 '  />
// </div>
//   </div>

//   <div className='col-6 col-lg-7  text-center px-2 '>
//   <label className={`${style.name}  pb-3  `}>EMS Tier</label>
//   <div>
// <textarea id="w3review" name="w3review" rows={4} className='col-12 '  />
// </div>
//   </div>
// </div>
// </div>



// <div className='col-lg-8 col-12 d-lg-inline-flex py-4'>
// <div className='d-inline-flex col-12'>
// <div className='col-lg-5 col-6  text-center px-2 '>
//   <label className={`${style.name}  pb-3`}>Destination / Transfeered To</label>
//   <div>
// <textarea id="w3review" name="w3review" rows={4} className='col-12 '  />
// </div>
//   </div>

//   <div className='col-lg-7 col-6  ps-2'>
//     <div className='text-start text-lg-center'>
//   <label className={`${style.name} text-uppercase `}>mode of transport </label>
//   </div>
//   <div className='col-12 py-4 '>
//   <div className='d-inline-flex col-lg-4 col-6'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-1 ' >Fixed Wing</label><br />
//  </div></div>
//  <div className='d-inline-flex col-lg-4 col-6'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-1 ' >Ground</label><br />
//  </div></div>
//  <div className='d-inline-flex col-lg-4 col-6'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-1 ' >None</label><br />
//  </div></div>
//  <div className='d-inline-flex col-lg-4 col-6'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-1 ' >Other</label><br />
//  </div></div>
//  <div className='d-inline-flex col-lg-4 col-6'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-1 ' >Rotor Craft</label><br />
//  </div></div>
//   </div>
//   </div>
//   </div>
// </div>
// </div>







// <div className={`${style.part6} col-12  py-4`}>
// <div >
//   <h6 className={`${style.header2} text-uppercase text-center pb-3`}>destination determination/ out of <br />hospital triage criteria</h6> 
//   </div>

// {/* div1 */}
//  <div className=' col-lg-3 col-12 col-sm-6 d-inline-flex   text-capitalize my-3 '>
//   <div>
//   <div>
//   <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >closest facility</label><br />
//  </div></div>
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >diversion</label><br />
//  </div></div>
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >family choice</label><br />
//  </div></div>
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >law entorecment choice</label><br />
//  </div></div>

  
//   </div>
//  </div>
// </div>





// {/* div2 */}

//  <div className=' pb-4 col-lg-3 col-12 col-sm-6 d-inline-flex  text-capitalize my-3'>
//   <div>
//   <div>
//   <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >managed care</label><br />
//  </div></div>
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >not applicable</label><br />
//  </div></div>
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >on-line medical direction</label><br />
//  </div></div>
 
  
//   </div>
//  </div>
// </div>


// {/* 
// div3 */}
//  <div className=' pb-4  col-lg-3 col-12 col-sm-6 d-inline-flex   text-capitalize my-3'>
//  <div>
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >other</label><br />
//  </div></div>

//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >patient choice</label><br />
//  </div></div>
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >patient physician choice</label><br />
//  </div></div>

  
//   </div>
//  </div>




// {/* 
// div4 */}
//  <div className=' pb-4 col-lg-3 col-12 col-sm-6 d-inline-flex   text-capitalize my-3  '>
//  <div>
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >Protocol</label><br />
//  </div></div>

//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >specialty resource center</label><br />
//  </div></div>

//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >trauma triage (anatomy of injury)</label><br />
//  </div></div>
//     </div>
//  </div>

 
// </div>








// <div className={`${style.part6}  text-capitalize  py-5`}>
// <div >
//   <h5 className={`${style.header2} text-center`}>cardiac arrest information</h5> 
//   </div>
//   <div className='d-lg-inline-flex col-12 my-4'>
//   <div className='col-lg-6 col-12   my-4 my-lg-0'>
//     <table className='text-center '>
//       <thead >
//         <tr >
//           <td >Time</td>
//           <td >B/P</td>
//           <td >PULSE</td>
//           <td >RESP</td>
//           <td >TEMP</td>
//           <td className={style.td}>Pulse <br />O2</td>

//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td  > <input type="time" name required className={`${style.input4} w-100 px-1`}/> </td>
//           <td ><input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
//           <td><input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
//           <td><input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
//           <td><input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
//           <td><input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
//         </tr>
//         <tr>
//         <td  > <input type="time" name required  className={`${style.input4} w-100 px-1`}/> </td>
//           <td ><input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
//           <td><input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
//           <td><input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
//           <td><input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
//           <td><input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
//         </tr>
//         <tr>
//         <td  > <input type="time" name required className={`${style.input4} w-100 px-1`}/> </td>
//           <td ><input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
//           <td><input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
//           <td><input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
//           <td><input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
//           <td><input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
//         </tr>
//         <tr>
//         <td  > <input type="time" name required className={`${style.input4} w-100 px-1`}/> </td>
//           <td ><input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
//           <td><input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
//           <td><input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
//           <td><input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
//           <td><input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
//         </tr>
//       </tbody>
//     </table>
//   </div>
//   <div className='col-lg-6 col-12  px-1' >
//   <table className='text-center' >
//       <thead >
       
//       <td colspan="6" className={`${style.header6}  `}>Glasgow coma scale</td>
//        <tr >
//           <td >Eye</td>
//           <td >verb</td>
//           <td >motor</td>
//           <td >total</td>
         

//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td  > <input type="number" name required  className={`${style.input4} w-100 px-1`}/> </td>
//           <td ><input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
//           <td><input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
//           <td><input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
         
//         </tr>
//         <tr>
//         <td  > <input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
//           <td ><input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
//           <td><input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
//           <td><input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
        
//         </tr>
//         <tr>
//         <td  > <input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
//           <td ><input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
//           <td><input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
//           <td><input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
         
//         </tr>
//         <tr>
//         <td  > <input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
//           <td ><input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
//           <td><input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
//           <td><input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
         
//         </tr>
//       </tbody>
//     </table>
//   </div>
//   </div>



//   <div  className=' d-lg-inline-flex col-12'>
//   <div className='col-lg-6 col-12  my-4 my-lg-0'>
//     <table className='text-center' >
//       <thead >
       
//       <td colspan="6" className={`${style.header6}  `}>revised trauma score <br />(RTS)</td>
//        <tr >
//           <td >resp</td>
//           <td >BP</td>
//           <td >GCS</td>
//           <td >total</td>
         

//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td  > <input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
//           <td ><input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
//           <td><input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
//           <td><input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
         
//         </tr>
//         <tr>
//         <td  > <input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
//           <td ><input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
//           <td><input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
//           <td><input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
        
//         </tr>
//         <tr>
//         <td  > <input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
//           <td ><input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
//           <td><input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
//           <td><input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
         
//         </tr>
//         <tr>
//         <td  > <input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
//           <td ><input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
//           <td><input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
//           <td><input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
         
//         </tr>
//       </tbody>
//     </table></div>



//   <div className='col-lg-6 col-12 px-1'>
//     <table className='text-center' >
//       <thead >
       
//       <td colspan="6" className={`${style.header6}  `} >revised trauma score <br />padiatric</td>
//        <tr >
//        <td >resp</td>
//           <td >BP</td>
//           <td >GCS</td>
//           <td >total</td>

//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td  > <input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
//           <td ><input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
//           <td><input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
//           <td><input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
         
//         </tr>
//         <tr>
//         <td  > <input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
//           <td ><input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
//           <td><input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
//           <td><input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
        
//         </tr>
//         <tr>
//         <td  > <input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
//           <td ><input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
//           <td><input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
//           <td><input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
         
//         </tr>
//         <tr>
//         <td  > <input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
//           <td ><input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
//           <td><input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
//           <td><input type="number" name required className={`${style.input4} w-100 px-1`}/> </td>
         
//         </tr>
//       </tbody>
//     </table></div>
//   </div>



//   <div className=' d-lg-inline-flex  col-12 text-capitalize py-5'>
//     <div className=' d-lg-inline-flex d-sm-inline-flex col-lg-6 '>
//     <div className={`${style.part6} col-lg-7  col-sm-8 py-4 ps-2`}>
//     <div >
//   <h6 className= {`${style.header5} text-center text-decoration-underline`}>respiratory effort:</h6> 
//   </div>

//   <div>
 
//   <div className='d-inline-flex col-12 '>
//     <div className='col-7 d-inline-flex  '>
//     <div className=' col-1'>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div >
//  <div className={`${style.chek}  col-11`}>
//   <label className='ps-2 ' >1 Normal</label></div>
//   </div>

//   <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >N not assessed</label>
//  </div>

  
//   </div>
  


//   <div className='d-inline-flex col-12 '>
//     <div className='col-7 d-inline-flex  '>
//     <div className=' col-1'>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div >
//  <div className={`${style.chek} col-11 `}>
//   <label className='ps-2 ' >2 shallow/labored</label></div>
//   </div>

//   <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >u unknown</label>
//  </div>

  
//   </div>
  

  
  
  
//   <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >3 shallow/non-labored</label><br />
//  </div></div>

  
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >4 deep/labored</label><br />
//  </div></div>

 
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >5 deep/non-labored</label><br />
//  </div></div>
 
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >6 absent</label><br />
//  </div></div>
   
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >7 labore/fatigued</label><br />
//  </div></div>
  
//     </div>
// </div>




//     <div className={`${style.part6} col-lg-5 col-12 col-sm-4 py-4 ps-2`}>
//     <div >
//   <h6 className={`${style.header5} text-center text-decoration-underline`}>resp. sounds:</h6> 
//   </div>

// <div className=' py-2'>

// <div className='col-5 d-inline-flex  ' >
//   <label > clear</label>
//   </div>
//   <div className='col-7 d-inline-flex col-sm-7' >
//     <input type="radio"  name="F1" className={`${style.radio} mt-2`} />  <label  className='ps-1 pe-4 pt-1'> L</label>
//      <input type="radio"  name="F1" className={`${style.radio} mt-2`}/>  <label  className='ps-1 pt-1'> r</label>

//   </div>

// </div>
// <div className=' py-2'>

// <div className='col-5 d-inline-flex ' >
//   <label > bronchi</label>
//   </div>
//   <div className='col-6 d-inline-flex col-sm-7' >
//     <input type="radio"  name="F5" className={`${style.radio} mt-2`} />  <label  className='ps-1 pe-4 pt-1'> L</label>
//      <input type="radio"  name="F5" className={`${style.radio} mt-2`}/>  <label  className='ps-1 pt-1'> R</label>

//   </div>

// </div>
// <div className=' py-2'>

// <div className='col-5 d-inline-flex ' >
//   <label > rhales</label>
//   </div>
//   <div className='col-6 d-inline-flex col-sm-7' >
//     <input type="radio"  name="F6" className={`${style.radio} mt-2`} />  <label  className='ps-1 pe-4 pt-1'> L</label>
//      <input type="radio"  name="F6" className={`${style.radio} mt-2`}/>  <label  className='ps-1 pt-1'> r</label>

//   </div>

// </div>
// <div className=' py-2'>

// <div className='col-5 d-inline-flex col-sm-5' >
//   <label > wheezws</label>
//   </div>
//   <div className='col-6 d-inline-flex col-sm-7' >
//     <input type="radio"  name="f8" className={`${style.radio} mt-2`} />  <label  className='ps-1 pe-4 pt-1'> L</label>
//      <input type="radio"  name="f8" className={`${style.radio} mt-2`}/>  <label  className='ps-1 pt-1'> r</label>

//   </div>

// </div>
// <div>


// </div>

//     </div>


//     </div>




// <div className='d-inline-flex col-6  '>

//     <div className={`${style.part6}  col-lg-5 col-12  text-capitalize py-4 ps-2`}>
//     <div >
//   <h6 className={`${style.header5} text-center text-decoration-underline pb-3`}>skin perfusion: </h6> 
//   </div>

//   <div >

//   <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' > 1 normal</label><br />
//  </div></div>
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' > 2 decreased</label><br />
//  </div></div>
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >3 not assessed</label><br />
//  </div></div>
  
//     </div>
//     </div>











//     <div className={`${style.part6} ps-2 col-lg-7 col-12 text-capitalize py-4`}>
//       <div >
//   <h6 className={`${style.header5} text-center text-decoration-underline`}>Pupils:</h6> 
//   </div>

// <div className=' py-2'>

// <div className='col-5 d-inline-flex ' >
//   <label > normal</label>
//   </div>
//   <div className='col-7 d-inline-flex ' >
//     <input type="radio"  name="F10" className={`${style.radio} mt-2`} />  <label  className='ps-1 pe-4 pt-1'> L</label>
//      <input type="radio"  name="F10" className={`${style.radio} mt-2`}/>  <label  className='ps-1 pt-1'> R</label>

//   </div>

// </div>
// <div className=' py-2'>

// <div className='col-5 d-inline-flex ' >
//   <label >constricted</label>
//   </div>
//   <div className='col-7 d-inline-flex ' >
//     <input type="radio"  name="F11" className={`${style.radio} mt-2`} />  <label  className='ps-1 pe-4 pt-1'> L</label>
//      <input type="radio"  name="F11" className={`${style.radio} mt-2`}/>  <label  className='ps-1 pt-1'> R</label>

//   </div>

// </div>
// <div className=' py-2'>

// <div className='col-5 d-inline-flex ' >
//   <label > dilated</label>
//   </div>
//   <div className='col-7 d-inline-flex ' >
//     <input type="radio"  name="F14" className={`${style.radio} mt-2`} />  <label  className='ps-1 pe-4 pt-1'> L</label>
//      <input type="radio"  name="F14" className={`${style.radio} mt-2`}/>  <label  className='ps-1 pt-1'> R</label>

//   </div>

// </div>
// <div className=' py-2'>

// <div className='col-5 d-inline-flex ' >
//   <label > no react.</label>
//   </div>
//   <div className='col-7 d-inline-flex ' >
//     <input type="radio"  name="F15" className={`${style.radio} mt-2`} />  <label  className='ps-1 pe-4 pt-1'> L</label>
//      <input type="radio"  name="F15" className={`${style.radio} mt-2`}/>  <label  className='ps-1 pt-1'> R</label>

//   </div>

// </div>
// <div>


// </div></div></div>
//   </div>
// </div>










// {/* part */}

// <div className={`${style.part6}   col-12  py-4 text-capitalize`}>
// <div >
//   <h5 className={`${style.header2} text-center`}>glasgow coma scale (GCS) values</h5> 
//   </div>



//  <div className=' col-lg-4 col-12 col-sm-5 d-inline-flex   text-capitalize my-4 '>
//   <div>
 
//   <h6 className={`${style.header6}`}>Eye Opening Component</h6>
//   <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >0 Not applicable</label><br />
//  </div></div>

//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >1 None</label><br />
//  </div></div>

//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >2 Responds to Pain</label><br />
//  </div></div>
 
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >3 Responds to Speech</label><br />
//  </div></div>
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >4 Spontaneous Opening</label><br />
//  </div></div>
  

//  </div>
// </div>





// {/* div2 */}

//  <div className=' col-lg-4 col-12 col-sm-7 d-inline-flex  text-capitalize my-4'>
//   <div>

//   <h6 className={`${style.header6}`}>Verbal Component For<br /> patients <MdArrowForwardIos className=' d-inline  '/>5 years:</h6>
//   <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' ></label>1 None<br />
//  </div></div>
  
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >2 Non-specific sounds</label><br />
//  </div></div>
  
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >3 Inappropriate words</label><br />
//  </div></div>

//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >4 Confused conversation or speech</label><br />
//  </div></div>
  
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >5 Onented and appropriate speech</label><br />
//  </div></div>
  
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >9 Unknown</label><br />
//  </div></div>
  
//  </div>
// </div>


// {/* 
// div3 */}
//  <div className='  col-lg-4 col-12 col-sm-5 d-inline-flex   text-capitalize my-4'>
//  <div>
 
//   <h6 className={`${style.header6}`}>For patients 2-5 years:</h6>
 
//   <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >1 None</label><br />
//  </div></div>

//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >2 Grunts</label><br />
//  </div></div>

//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >3 Cries and/or screams</label><br />
//  </div></div>
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >4 Inappropriate words</label><br />
//  </div></div>
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >5 Appropriate words</label><br />
//  </div></div>
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >9 Not assessed</label><br />
//  </div></div>
//   </div>
//  </div>




// {/* 
// div4 */}
//  <div className=' col-lg-4 col-12 col-sm-7 d-inline-flex   text-capitalize     my-4'>
//  <div>
 
//   <h6 className={`${style.header6}`}>For patients 0-23 months:</h6>
//   <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >1 None</label><br />
//  </div></div>
//   <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >2 Persistent cry, grunting</label><br />
//  </div></div>

//   <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >3 Inappropriate cry</label><br />
//  </div></div>
//   <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >4 Cies, inconsolable</label><br />
//  </div></div>

//   <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >5 Smiles, coos, cries appropriately</label><br />
//  </div></div>


//  <div className='d-inline-flex'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >9 not assessed</label><br />
//  </div></div>
 
 
  
//   </div>
//  </div>
//  {/* 
// div5 */}
// <div className=' col-lg-8 col-12  d-inline-flex   text-capitalize my-4  '>
//  <div>
//  <h6 className={`${style.header6} text-start`} >motor component</h6> 

//   <h6 className={`${style.header6}`}>for patients <MdArrowForwardIos className=' d-inline  '/>5 years:</h6>
//   <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >1 None</label><br />
//  </div></div>


//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >2 Extensor posturing in response to painful stimulation</label><br />
//  </div></div>
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >3 Flexor posturing in response to painful stimulation</label><br />
//  </div></div>
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >4 General withdrawal in response to painful stimulation</label><br />
//  </div></div>
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >5 Localization of painful stimulation</label><br />
//  </div></div>
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >6 Obeys commands with appropriate motor response</label><br />
//  </div></div>
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >9 Unknown</label><br />
//  </div></div>

//   </div>
//  </div>


//  {/* 
// div6 */}

//   <div className=' col-lg-6 col-12  d-inline-flex   text-capitalize my-3  '>
//  <div className='my-4'>
 
//   <h6 className={`${style.header6}`}>For patients up to 5 years</h6>
//   <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >1 None</label><br />
//  </div></div>

//   <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >2 Extensor posturing in response to painful stimulation</label><br />
//  </div></div>
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >3 Flexor posturing in response to painful stimulation</label><br />
//  </div></div>
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >4 General withdrawal in response to painful stimulation</label><br />
//  </div></div>
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >5 Localization of painful stimulation</label><br />
//  </div></div>

//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >6 Spontaneous</label><br />
//  </div></div>
//  <div className='d-inline-flex col-12'>
//     <div>
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={style.chek}>
//   <label className='ps-2 ' >9 Not assessed</label><br />
//  </div></div>
//   </div>
//  </div> 

 

//   {/* 
// div7 */}
 
//  <div className=' col-lg-6    col-12 d-inline-flex  text-capitalize my-4 '>
//   <div className='col-12 my-4 '>
 
//   <h6 className={`${style.header5} text-decoration-underline  `}>revised trauma score (RTS) values</h6>
//   <div  className='d-inline-flex col-12  justify-content-start  '>




//     <div className=' col-4 '>

//     <h6 className={`${style.header6}  text-start`}>resp. rate </h6>
//     <div className='d-inline-flex col-12 '>
//     <div >
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={`${style.chek}  col-11`}>
//  <label className='ps-2 col-6 col-lg-4'>10-29 </label>
//   <label className='ps-2'>4 </label>
//  </div></div>
 
//  <div className='d-inline-flex col-12 '>
//     <div >
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={`${style.chek}  col-11`}>
//  <label className='ps-2 col-6 col-lg-4'><MdArrowForwardIos className=' d-inline  '/>29 </label> 
//   <label className='ps-2'>3 </label>
//  </div></div>
  
//  <div className='d-inline-flex col-12 '>
//     <div >
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={`${style.chek}  col-11`}>
//  <label className='ps-2 col-6 col-lg-4'>6-9 </label>
//   <label className='ps-2'>2 </label>
//  </div></div>

//  <div className='d-inline-flex col-12 '>
//     <div >
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={`${style.chek}  col-11`}>
//  <label className='ps-2 col-6 col-lg-4'>1-5 </label>
//   <label className='ps-2'>1 </label>
//  </div></div>
//  <div className='d-inline-flex col-12 '>
//     <div >
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={`${style.chek}  col-11`}>
//  <label className='ps-2 col-6 col-lg-4'> none</label>
//   <label className='ps-2'>0</label>
//  </div></div>
  

//     </div>
//     <div className=' col-4'>
      
//     <h6 className={`${style.header6}  text-start`}>systolic B.P.</h6>
//     <div className='d-inline-flex col-12 '>
//     <div >
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={`${style.chek}  col-11`}>
// <label className='ps-2  col-7 col-lg-4'>BP<MdArrowForwardIos className=' d-inline  '/>89 </label>
//    <label className='ps-2'>4 </label>
//  </div></div>
 
 
//  <div className='d-inline-flex col-12 '>
//     <div >
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={`${style.chek}  col-11`}>
//  <label className='ps-2 col-6 col-lg-4'>76-89  </label>
//   <label className='ps-2'>3 </label>
//  </div></div>  
 
//  <div className='d-inline-flex col-12 '>
//     <div >
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={`${style.chek}  col-11`}>
//  <label className='ps-2 col-6 col-lg-4'>50-75 </label>
//   <label className='ps-2'>2 </label>
//  </div></div>

//  <div className='d-inline-flex col-12 '>
//     <div >
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={`${style.chek}  col-11`}>
//  <label className='ps-2 col-6 col-lg-4'>1-49 </label>
//   <label className='ps-2'>1 </label>
//  </div></div> 

//  <div className='d-inline-flex col-12 '>
//     <div >
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={`${style.chek}  col-11`}>
//  <label className='ps-2 col-6 col-lg-4'>none </label>
//   <label className='ps-2'>0</label>
//  </div></div>
  

//     </div>
//     <div className=' col-4  '>
//     <h6 className={`${style.header6}  text-start`}>GCS total</h6>
//     <div className='d-inline-flex col-12 '>
//     <div >
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={`${style.chek}  col-11`}>
//  <label className='ps-2 col-6 col-lg-4'>13-15 </label>
//   <label className='ps-2'>4 </label>
//  </div></div>

//  <div className='d-inline-flex col-12 '>
//     <div >
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={`${style.chek}  col-11`}>
//  <label className='ps-2 col-6 col-lg-4'>9-12 </label>
//   <label className='ps-2'>3 </label>
//  </div></div>
//  <div className='d-inline-flex col-12 '>
//     <div >
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={`${style.chek}  col-11`}>
//  <label className='ps-2 col-6 col-lg-4'>6-8 </label>
//   <label className='ps-2'>2 </label>
//  </div></div>
//  <div className='d-inline-flex col-12 '>
//     <div >
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={`${style.chek}  col-11`}>
//  <label className='ps-2 col-6 col-lg-4'>4-5  </label>
//   <label className='ps-2'>1 </label>
//  </div></div>
//  <div className='d-inline-flex col-12 '>
//     <div >
//   <label className={style.customcheckbox}>
//   <input name="dummy" type="checkbox"  />
//   <span className={style.checkmark} />
// </label>
//  </div>
//  <div className={`${style.chek}  col-11`}>
//   <label className='ps-2 col-7 col-lg-4'><MdArrowBackIos className=' d-inline  '/>4 </label>

//   <label className='ps-2'>0 </label>
//  </div></div>


//     </div>
//   </div>

//  </div>
// </div>









// </div>











// {/* part */}

// <div className={`${style.part6} d-lg-inline-flex text-capitalize  `}>
//   <div className={`${style.part6}   col-lg-5 col-12 ps-2`}>

//   <div >
//   <h5 className= {`${style.header4} text-center py-4`}>cardiac arrest information</h5> 
//   </div>


// <div className='d-lg-inline-flex col-12 py-2 pt-3  '>
//   <div className=' col-6  d-inline-flex'>
//     <div className= {`${style.inner} col-8 `}>Cardiac arrest:</div>
//     <div className=' col-4'>
    
//   <input type="radio"  name="M9" className={style.radioinput} /><label className='ps-1 pe-2'>Y</label>
//   <input type="radio"  name="M9"  /><label className='ps-1 '>N</label>
//     </div>
//   </div>
//   <div className=' col-6 d-inline-flex'>
//     <div className= {`${style.inner} col-8 `}>bystander CPR:</div>
//     <div className=' col-4'>
    
//   <input type="radio"  name="M8"  /><label className='ps-1 pe-2'>Y</label>
//   <input type="radio"  name="M8"  /><label className='ps-1'>N</label>
//     </div>
//   </div>
// </div>
// <div className=' d-lg-inline-flex col-12 py-2 '>
//   <div className=' col-6  d-inline-flex'>
//     <div className= {`${style.inner} col-8 `}>Witnessed arrest:</div>
//     <div className=' col-4'>
    
//   <input type="radio"  name="M6"  /><label className='ps-1 pe-2'>Y</label>
//   <input type="radio"  name="M6"  /><label className='ps-1 '>N</label>
//     </div>
//   </div>
//   <div className=' col-6 d-inline-flex'>
//     <div className= {`${style.inner} col-8 `}>pulse restord:</div>
//     <div className='col-4'>
    
//   <input type="radio"  name="M4"  /><label className='ps-1 pe-2'>Y</label>
//   <input type="radio"  name="M4"  /><label className='ps-1'>N</label>
//     </div>
//   </div>
// </div>
// <div className=' d-lg-inline-flex col-12 py-2'>
//   <div className=' col-6  d-inline-flex'>
//     <div className= {`${style.inner} col-8 `}>trauma arrest:</div>
//     <div className='col-4'>
    
//   <input type="radio"  name="M1"  /><label className='ps-1 pe-2'>Y</label>
//   <input type="radio"  name="M1"  /><label className='ps-1 '>N</label>
//     </div>
//   </div>
//   <div className=' col-6 d-inline-flex '>
//     <div className= {`${style.inner} col-8 `}>Number of shocks:</div>
//     <div className=' col-4 pe-3'>
    
//     <input type="number" name required className={`${style.input4} w-100 `}/>
//     </div>
//   </div>
// </div>
//   </div>
  
  
  
  
  
//   <div className={`${style.part6}   col-lg-2   pt-4  pb-2 `}>
//   <div  >
//   <h5 className={`${style.header4} text-center pb-lg-5`}>cardiac pulmonary <br/> arrest time: </h5> 
//   </div>
//   <div className='py-2 px-2'>
    
//     <input type="time" name required className={`${style.input4} w-100 text-center  `}/>
//     </div>
//   </div>



//   <div className={`${style.part6}   col-lg-5 px-1 pt-1 `}>
// <div >

// <table className='text-center' >
//       <thead className='py-2'>
       
//       <td className='py-3'>Min.</td>
//     <td><MdArrowBackIos className=' d-inline pb-1 '/> 4</td>
//     <td><MdArrowBackIos  className=' d-inline pb-1 '/> 8</td>
//     <td><MdArrowBackIos  className=' d-inline pb-1 '/> 12</td>
//     <td><MdArrowForwardIos className='d-inline pb-1 '/> 12</td>
//     <td>UNK.</td>

//       </thead>
//       <tbody>
//         <tr>
//           <td  > arrest to CPR </td>
//           <td ><input type="number" name required className={`${style.input4} w-100`}/> </td>
//           <td><input type="number" name required className={`${style.input4} w-100 `}/> </td>
//           <td><input type="number" name required className={`${style.input4} w-100 `}/> </td>
//           <td><input type="number" name required className={`${style.input4} w-100 `}/> </td>
//           <td><input type="number" name required className={`${style.input4} w-100 `}/> </td>

//         </tr>
//         <tr>
//         <td  > arrest to DEFIB. </td>
//           <td ><input type="number" name required className={`${style.input4} w-100 `}/> </td>
//           <td><input type="number" name required className={`${style.input4} w-100 `}/> </td>
//           <td><input type="number" name required className={`${style.input4} w-100 `}/> </td>
//           <td><input type="number" name required className={`${style.input4} w-100 `}/> </td>
//           <td><input type="number" name required className={`${style.input4} w-100 `}/> </td>

//         </tr>
//         <tr>
//         <td  >arrest to MEDS. </td>
//           <td ><input type="number" name required className={`${style.input4} w-100 `}/> </td>
//           <td><input type="number" name required className={`${style.input4} w-100 `}/> </td>
//           <td><input type="number" name required className={`${style.input4} w-100 `}/> </td>
//           <td><input type="number" name required className={`${style.input4} w-100 `}/> </td>
//           <td><input type="number" name required className={`${style.input4} w-100 `}/> </td>

//         </tr>
      
//       </tbody>
//     </table>
//     </div>
//   </div>

// </div>   







// {/* part */}


// <div className={`${style.part6}   text-capitalize  py-5 `}>
// <div >
//   <h5 className={`${style.header2} text-center text-uppercase`}> any changes in cardiac rhythm <br/> should be noted below</h5> 
//   </div>
//   <div className='d-flex justify-content-center   my-4'>
//   <div >
//     <table className='text-center '>
//       <thead >
//         <tr >
//           <td >Time</td>
//           <td >HR</td>
//           <td >Rythm</td>
//           <td >Medication</td>
         

//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td  > <input type="time" name required className={`${style.input4} w-100 `}/> </td>
//           <td ><input type="number" name required className={`${style.input4} w-100 `}/> </td>
//           <td><input type="text" name required className={`${style.input4} w-100 `}/> </td>
//           <td><input type="text" name required className={`${style.input4} w-100 `}/> </td>
         
//         </tr>
//         <tr>
//         <td  > <input type="time" name required  className={`${style.input4} w-100 `}/> </td>
//           <td ><input type="number" name required className={`${style.input4} w-100 `}/> </td>
//           <td><input type="text" name required className={`${style.input4} w-100 `}/> </td>
//           <td><input type="text" name required className={`${style.input4} w-100 `}/> </td>
          
//         </tr>
//         <tr>
//         <td  > <input type="time" name required className={`${style.input4} w-100 `}/> </td>
//           <td ><input type="number" name required className={`${style.input4} w-100 `}/> </td>
//           <td><input type="number" name required className={`${style.input4} w-100 `}/> </td>
//           <td><input type="number" name required className={`${style.input4} w-100 `}/> </td>
         
//         </tr>
//         <tr>
//         <td  > <input type="time" name required className={`${style.input4} w-100 `}/> </td>
//           <td ><input type="number" name required className={`${style.input4} w-100 `}/> </td>
//           <td><input type="number" name required className={`${style.input4} w-100 `}/> </td>
//           <td><input type="number" name required className={`${style.input4} w-100 `}/> </td>
          
//         </tr>
//       </tbody>
//     </table>
//   </div>
  
//   </div>


// </div>



























// </div>


// </div>
// <div className=' d-flex justify-content-center pb-5 gap-3'>
// <button className={`${style.sendBtn} px-4 `}>
  
//   <span className='px-2'>Send</span>
// </button>
// <button className={`${style.UpdateBtn} px-4 `}>
  
//   <span className='px-2'>Update</span>
// </button>
// </div>
// <div>

// </div>

// </div>


// </>












//     )
// }
