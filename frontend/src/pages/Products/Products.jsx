import React from 'react'
import './Products.css';
import pic from '../../assets/images/pic.jpeg';
import { ROUTES } from '../../routes/RouterConfig'
import { useNavigate, Link } from 'react-router-dom'
import pic1 from '../../assets/images/pic1.jpeg'
import pic2 from '../../assets/images/pic2.jpeg'
import pic3 from '../../assets/images/pic3.jpeg'
import pic4 from '../../assets/images/pic4.jpeg'
import pic5 from '../../assets/images/pic5.jpeg'
import pic6 from '../../assets/images/pic6.jpeg'
import pic7 from '../../assets/images/pic7.jpeg'
import pic8 from '../../assets/images/pic8.jpeg'
import Footer from '../../components/Footer/Footer';

const Products1 = () => {
    const a=localStorage.getItem('login');
    const shreyas = (value) =>{ 
    localStorage.setItem('product',value);
    }
    return (
        <div>
            <div class="wrapper">
                <div class="logo">
                    <a href="index.html"><img src={pic} alt="" /></a>
                </div>
                <ul class="menu">
                    {
                        a ? <li><Link to="/Dashboard">Home</Link></li>:<li><Link to="/">Home</Link></li>
                    }
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/Products">Products</Link></li>

                    <li><Link to="/contactUs">Contact</Link></li>
                </ul>
            </div>
            <h1 className='text'>Our Products</h1>
            <div class="container abc">
                <div class="box">
                    <img src={pic1} />
                    <div class="image__overlay image__overlay--primary">
                        <div class="image__title">JadiApi</div>
                        <p class="image__description">
                            <Link to="/pic1"><button class="button1" value="JadiApi" onClick={(e) =>shreyas(e.target.value)}>View</button></Link>
                        </p>
                    </div>
                </div>
                <div class="box1">
                    <img src={pic2} />
                    <div class="image__overlay image__overlay--primary">
                        <div class="image__title">Bhinnarangi cutting</div>
                        <p class="image__description">
                            <a href="/pic2"><button class="button1" value="Bhinnarangi Cutting (Holu)" onClick={(e) =>shreyas(e.target.value)}>View</button></a>
                        </p>
                    </div>
                </div>
                <div class="box">
                    <img src={pic3} />
                    <div class="image__overlay image__overlay--primary">
                        <div class="image__title">First Haladike</div>
                        <p class="image__description">
                            <a href="/pic3"><button class="button1" value="First Haladike" onClick={(e) =>shreyas(e.target.value)}>View</button></a>
                        </p>
                    </div>
                </div>
                <div class="box1">
                    <img src={pic4} />
                    <div class="image__overlay image__overlay--primary">
                        <div class="image__title">Second Haladike</div>
                        <p class="image__description">
                            <a href="/pic4"><button class="button1" value="Second Haladike" onClick={(e) =>shreyas(e.target.value)}>View</button></a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="container abc1">

                <div class="box">
                    <img src={pic5} />
                    <div class="image__overlay image__overlay--primary">
                        <div class="image__title">Barda</div>
                        <p class="image__description">
                            <a href="/pic5"> <button class="button1" value="Barda" onClick={(e) =>shreyas(e.target.value)}>View</button></a>
                        </p>
                    </div>
                </div>
                <div class="box1">
                    <img src={pic6} />
                    <div class="image__overlay image__overlay--primary">
                        <div class="image__title">Bhinnarangi Barda</div>
                        <p class="image__description">
                            <a href="/pic6"><button class="button1" value="Bhinnarangi Barda" onClick={(e) =>shreyas(e.target.value)}>View</button></a>
                        </p>
                    </div>
                </div>
                <div class="box">
                    <img src={pic7} />
                    <div class="image__overlay image__overlay--primary">
                        <div class="image__title">Moti JadiApi</div>
                        <p class="image__description">
                            <a href="/pic7"><button class="button1" value="Moti JadiApi" onClick={(e) =>shreyas(e.target.value)}>View</button></a>
                        </p>
                    </div>
                </div>
                <div class="box1">
                    <img src={pic8} />
                    <div class="image__overlay image__overlay--primary">
                        <div class="image__title">Dhapapi</div>
                        <p class="image__description">
                            <a href="/pic8"><button class="button1" value="Dhapapi" onClick={(e) =>shreyas(e.target.value)}>View</button></a>
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Products1;