import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import FrontPage from './Components/FrontPage/FrontPage'
import SecondPage from './Components/SecondPage/SecondPage'
import ThirdPage from './Components/ThirdPage/ThirdPage'
import PersonInfo from './Components/Person/PersonInfo'
import FourthPage from './Components/FourthPage/FourthPage'
import Bottom from './Components/Bottom/Bottom'
import Footer from './Components/Footer/Footer'
import LoginPage from './Pages/LoginPage/LoginPage'
import { Routes,Route } from 'react-router-dom';
import MentalHealthCheckup from './Pages/MentalHealthCheckup/MentalHealthCheckup'
import LoginContextProvider from './ContextAPI/loginContextAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Doctor from './Components/Doctors/Doctor';
import CustomCursor from './Components/CustomCursor/CustomCursor'
import MentalHealthSection from './Pages/LoginPage/MentalHealthSection/MentalHealthSection'

const App = () => {
  return (
    <>
    {/* <ScrollAnimation/> */}
  <CustomCursor/>
    
    <ToastContainer/>
    <Navbar/>
    <Routes>
      <Route path='/' element={<>
    <FrontPage/>
    <SecondPage/>
    <ThirdPage/>
    <PersonInfo/>
    <FourthPage/>
    <Bottom/>

      </>}/>   

   <Route path='/doctors' element={ <Doctor/>} />  
   <Route path='/login' element={ <LoginPage/>} />  
   <Route path='/check-mental-health' element={ <MentalHealthCheckup/>} />  
   <Route path='/learn-mental-health' element={<MentalHealthSection/>}/>

      
    </Routes>
    

    <Footer/>

   


    </>
  )
}

export default App