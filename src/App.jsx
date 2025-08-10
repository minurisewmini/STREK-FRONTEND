import { useState } from 'react'
import './App.css'
import ProductCard from './components/productCard'
import UserData from './components/userData'
import Testing from './components/testing'
import LoginPage from './pages/home/loginpage.jsx'
import HomePage from './pages/home/homePage.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegisterPage from './pages/home/signinPage.jsx'
import AdminHomePage from './pages/home/adminHomePage.jsx'
import ContactPage from './pages/home/contact.jsx'
import { Toaster } from 'react-hot-toast'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-red-500 h-[100vh]'>
     <BrowserRouter>
     <Toaster/>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/signup" element={<RegisterPage/>}/>
            <Route path="/admin/*" element={<AdminHomePage />} />
            <Route path="*" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            

           

        </Routes>

     </BrowserRouter>
</div>
  )
}

export default App
