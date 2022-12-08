import React from 'react'
import './Footer.css';
import { useNavigate , Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div> 
    <footer>
    <div class="container1">
        <div class="row">
            <div class="col-lg-3 col-sm-6">
                <div class="single-box">
                    <h2>Navigation</h2>
                    <ul>
                        <li><Link to="/Dashboard">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/Products">Products</Link></li>
                        <li><Link to="/contactUs">Contact Us</Link></li>

                    </ul>

                </div>
            </div>
            <div class="col-lg-3 col-sm-6">
                <div class="single-box">
                    <h2>About</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam repellendus sunt praesentium
                        aspernatur iure molestias.</p>

                    <div class="card-area">
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-google"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-instagram"></i>
                    </div>

                </div>
            </div>
            <div class="col-lg-3 col-sm-6">
                <div class="single-box">
                    <h2>Newsletter</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur doloremque earum
                        similique fugiat nobis. Facere?</p>
                    <h2>Follow us on</h2>
                    <p class="socials">
                        <i className='fab fa-facebook-f'></i>
                        <i className="fab fa-google"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                    </p>
                </div>
            </div>
        </div>
    </div>
</footer>
</div>
)
}

export default Footer
