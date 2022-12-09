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
            <h3>About Company</h3>
            <p class="role">Company</p>
            <p>Shree Gopalakrishna Trading Company, founded in 1970, is an Areca Nut Trading Company based out of Yellapur, Karnataka. With customers across the country.

                Our business principles are based on trust and quality assurance to cater to the needs of our customers. 
                Being a Family run generational business with over fifty years of experience in the trade, we have understood and mastered the requirements of our buyers. All our shipments are made to order, with thorough quality testing and screening performed throughout the entire process, from collection to delivery.
                </p>
          </div>
          <div class="team_member">
            <div class="team_img">
              <img src={client} alt="Team_image"/>
            </div>
            <h3>Collection</h3>
            <p class="role">collection</p>
            <p>We source our products from the  Agricultural Produce & Livestock Market Committee (APMC), where farmers from nearby areas bring their produce for auction.
              After careful examination and verification based on our criteria, we choose the finest nuts and place an order based on our inventory requirements.
            </p></div>
          <div class="team_member">
            <div class="team_img">
              <img src={support} alt="Team_image"/>
            </div>
            <h3>Processing</h3>
            <p class="role">Processing</p>
            <p>After getting the nuts from the market, We start with our processing techniques.
               The nuts are sorted based on size and variety with the help of machines in our godown. Any unwanted substances or defective nuts get eliminated in this process.
               The cleaned, sorted nuts are coated with a natural coloring made from areca nut water. This process is critical for extending the shelf life of the nuts while maintaining their quality.
               The prepared nuts are now cut as per customer specifications.
               Finally, the nuts are packaged into gunny bags (up to 50 kg) and shipped to their final destination</p>
          </div>
        </div>
      </div>

    <Footer/>
    </div>
  )
}

export default About