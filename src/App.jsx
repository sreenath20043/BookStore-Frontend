
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './user/pages/Home'
import Auth from './pages/Auth'
import AllBooks from './user/pages/AllBooks'
import Viewbook from './user/pages/Viewbook'
import Careers from './user/pages/Careers'
import Contact from './user/pages/Contact'
import Profile from './user/pages/Profile'
import PagenotFound from './pages/PagenotFound'
import { useEffect, useState } from 'react'
import Preloader from './components/Preloader'
import AdminHome from './admin/pages/AdminHome'
import AdminBooks from './admin/pages/AdminBooks'
import AdminCareers from './admin/pages/AdminCareers'
import AdminSetting from './admin/pages/AdminSetting'
import Paymenterror from './user/pages/Paymenterror'
import Paymentsuccess from './user/pages/Paymentsuccess'


function App() {
 
  // for loading animation preloading
  const [isLoading,setIsLoading]=useState(false)

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(true)
    },2000)
  },[])
  //-----
  return (
    <>
    <Routes>
      <Route path='' element={ isLoading? <Home/> : <Preloader/>}/>
      <Route path='login' element={<Auth/>}/>
      <Route path='register' element={<Auth register/>}/>
      <Route path='allBooks' element={<AllBooks/>}/>
      <Route path='viewBook/:id' element={<Viewbook/>}/>
      <Route path='careers' element={<Careers/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='profile' element={<Profile/>}/>
      <Route path='paymentsuccess' element={<Paymentsuccess />} />
      <Route path='paymenterror' element={<Paymenterror />} />
      
      <Route path='adminhome' element={<AdminHome />} />
     <Route path='adminbook' element={<AdminBooks/>}/>
     <Route path='admincareers' element={<AdminCareers/>}/>
     <Route path='adminsetting' element={<AdminSetting/>}/>

        <Route path='*' element={<PagenotFound/>}/>
    </Routes>
    </>
  )
}

export default App
