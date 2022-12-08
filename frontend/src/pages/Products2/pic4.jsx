import React from 'react'
import Product4 from '../../assets/images/pic4.jpeg';
import Footer from '../../components/Footer/Footer';
import { useNavigate, Link } from 'react-router-dom';
import pic from '../../assets/images/pic.jpeg';
import './Products2.css'
const pic4 = () => {
    let a=localStorage.getItem('login')
  return (
    <div>
        <div class="wrapper">
                <div class="logo">
                    <a href="index.html"><img src={pic} alt="" /></a>
                </div>
                <ul class="menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/Products">Products</Link></li>

                    <li><Link to="/contactUs">Contact</Link></li>
                </ul>
            </div>
            <div class="small-container single-products">
    <div class="row">
        <div class="col-2">
            <img src={Product4} width="100%" id="ProductImg" />

        </div>
        <div class="col-2">
            <p>Betel-Nut/Supari</p>
            <h1>Second Haladike</h1>
            <h4>Rs. 45</h4>
            <p></p>
            <Link to="/contactUs" class="btn">Enquire Now</Link>
            <h3>Product Details<i class="fa fa-indent"></i></h3>
            <br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    </div>
</div>
<Footer/>
</div>
  )
}

export default pic4