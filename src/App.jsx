import { useState } from 'react'
import './App.css'
import ProductCard from './components/productCard'
import UserData from './components/userData'
import Testing from './components/testing'
import LoginPage from './pages/loginpage.jsx'
import HomePage from './pages/homePage.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegisterPage from './pages/signinPage.jsx'
import AdminHomePage from './pages/adminHomePage.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-red-500 h-[100vh]'>
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/signup" element={<RegisterPage/>}/>
            <Route path="/admin/*" element={<AdminHomePage />} />
            <Route path="*" element={<HomePage />} />

           

        </Routes>

     </BrowserRouter>
</div>
  )
}

export default App
