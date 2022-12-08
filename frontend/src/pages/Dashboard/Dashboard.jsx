import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import { Link } from 'react-router-dom';
import pic from '../../assets/images/pic.jpeg';
import './Dashboard.css';

const Dashboard = () => {

  let a=localStorage.getItem('login')

  return (
    <div>
      <header>
    <div class="wrapper">
        <div class="logo">
            <Link to="/Dashboard"><img src={pic} alt="" /></Link> 
        </div>
        <ul class="menu">
            <li><Link to="/Dashboard">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/Products">Products</Link></li>
            <li><Link to="/contactUs">Contact</Link></li>
            {
                a ?  <li><Link to="/Queries">User Queries</Link></li>:null
            }
        </ul>
    </div>
    <div class="banner-text">
        <h1>Lorem<span>ipsum</span></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla est nobis tempore molestiae voluptatibus
            repellendus minus rerum quos ex nam voluptates, unde ratione quod quibusdam.</p>
    </div>
</header>
<Footer/>
      </div>
  )
}

export default Dashboard
