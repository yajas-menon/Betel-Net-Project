import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import { ROUTES } from '../../routes/RouterConfig'
import Navbar from '../../components/Navbar/Navbar'

const Home = () => {

    const navigate = useNavigate()
    localStorage.removeItem('login');
    localStorage.setItem('loggedin','false');
    const changeDir = (dir) =>{
        navigate(dir)
    }

  return (
    <div className='Home'>
        <Navbar/>
        <Footer/>
    </div>
  )
}

export default Home