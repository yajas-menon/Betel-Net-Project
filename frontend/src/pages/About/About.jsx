import React from 'react'
import { useNavigate , Link} from 'react-router-dom'
import { ROUTES } from '../../routes/RouterConfig'
import "./About.css";
import quality from '../../assets/images/quality.jpg';
import client from '../../assets/images/client.jpg';
import support from '../../assets/images/support.jpg'
import Footer from '../../components/Footer/Footer';
import pic from '../../assets/images/pic.jpeg';

const About = () => {
  let a=localStorage.getItem('login')
    const navigate = useNavigate()

    const changeDir = (dir) =>{
        navigate(dir)
    }

  return (
    <div className='About'>
          <div class="wrapper">
            <div class="logo">
              <Link to="/Home"><img src={pic} alt="" /></Link>
            </div>
            <ul class="menu">
              <li><Link to="/Dashboard">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/Products">Products</Link></li>
              <li><Link to="/contactUs">Contact</Link></li>
            </ul>
          </div>
        <div class="wrapper">
        <h1>About Us</h1>
        <div class="team">
          <div class="team_member">
            <div class="team_img">
              <img src={quality} alt="Team_image"/>
            </div>
            <h3>Stringent Quality Measures</h3>
            <p class="role">Quality assurance</p>
            <p>We deliver the best quality products to our clients as we follow stringent quality measures from the initial stages of procurement of raw materials. We also have a quality department, where our entire range is tested on counts of purity, shelf life and flavor.</p>
          </div>
          <div class="team_member">
            <div class="team_img">
              <img src={client} alt="Team_image"/>
            </div>
            <h3>Clientele</h3>
            <p class="role">Client comms</p>
            <p>We have built a good number of customers since our inception. Our clients are very happy and have recommended us to other people as well. We are widely appreciated amongst our clientele all over in India.
            </p></div>
          <div class="team_member">
            <div class="team_img">
              <img src={support} alt="Team_image"/>
            </div>
            <h3>Why Prefer Us?</h3>
            <p class="role">Support </p>
            <p>Our client base has widened since our establishment because we bring forth 100% pure products. Also, we work in accordance with the ethical business norms & standards as well as follow client-centered approach. We also ensure timely delivery of even the urgent & bulk orders.</p>
          </div>
        </div>
      </div>

    <Footer/>
    </div>
  )
}

export default About