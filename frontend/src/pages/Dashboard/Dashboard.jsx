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
            <li><Link to="/">Logout</Link></li>
            {
                a=='admin' ?  <li><Link to="/Queries">User Queries</Link></li>:null
            }
        </ul>
    </div>
    <div class="banner-text">
        <h1>Shree GopalaKrishna Trading Company </h1>
        <p>Nestled in the town of Yellapur GTCo is a family-run Business with a mission to provide quality products to our customers. 
            We believe that when you buy our products, they should always be fresh and of superior quality. We at GTCo. have expertise in sourcing the best quality areca nuts and delivering them to you as per your needs. Our obsession with quality has driven us to enhance our techniques and practices.
            We value your needs....
            Check out our finest products</p>
    </div>
</header>
<Footer/>
      </div>
  )
}

export default Dashboard
