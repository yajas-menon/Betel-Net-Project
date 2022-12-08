import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer'
import "./contactUs.css";
import pic from '../../assets/images/pic.jpeg';
import { Link } from 'react-router-dom';
import axios from "axios";

const Contactus = () => {

  let a=localStorage.getItem('login')
  
  const [hi,setHi]=useState(false);
  const [inputs,setInputs]=useState({
    uname2:"",
    uemail2:"",
    umsg2:""
  });

const yajas2=(e)=>{
  e.preventDefault();
  const newdata ={...inputs};
  newdata[e.target.name]=e.target.value;
  setInputs(newdata);
  console.log(inputs);
}

const submit = () =>{
  axios.put("http://localhost:8080/api/user/addQueries",{
    name:inputs.uname2,
    email:inputs.uemail2,
    msg:inputs.umsg2
  }).then( res =>{
    console.log(res);
    setHi(true);
  }).catch(err=>{
    console.log(err);
  })
}
  return (
      <div className='xyz'>
          <div class="wrapper">
            <div class="logo">
              <a href="index.html"><img src={pic} alt="" /></a>
            </div>
            <ul class="menu">
              <li><Link to="/Dashboard">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/Products">Products</Link></li>

              <li><Link to="/contactUs">Contact</Link></li>
            </ul>
          </div>
          <h1 className='text'>Contact Us</h1>
          <div className="container">
          
            <div class="content">
              <div class="left-side">
                <div class="address details">
                  <i class="fas fa-map-marker-alt"></i>
                  <div class="topic">Address</div>
                  <div class="text-one">12/144, Analekoppa Extension, Sagar, Shimoga</div>
                  <div class="text-two">Karnataka, India - 577401</div>
                </div>
                <div class="phone details">
                  <i class="fas fa-phone-alt"></i>
                  <div class="topic">Phone</div>
                  <div class="text-one">+91-9108929864 ,</div>
                  <div class="text-two">08048118588</div>
                </div>
                <div class="email details">
                  <i class="fas fa-envelope"></i>
                  <div class="topic">Email</div>
                  <div class="text-one">srivinayakabettelnuttraders@gmail.com</div>
                  <div class="text-two">Sanketh.star@gmail.com</div>
                </div>
              </div>
              <div class="right-side">
                <div class="topic-text1">Send us a message</div>
                <p>If you have any queries , you can send us a message from here. It's our pleasure to help you.</p>
                <form action="#">
                  <div class="input-box">
                    <input type="text" name='uname2' placeholder="Enter your name" onChange={(e)=>yajas2(e)}/>
                  </div>
                  <div class="input-box">
                    <input type="text" name='uemail2'placeholder="Enter your email" onChange={(e)=>yajas2(e)}/>
                  </div>
                  <div class="input-box message-box">
                    <input type="text"name='umsg2' placeholder="Your Requirement" onChange={(e)=>yajas2(e)}/>
                  </div>
                  <div class="button">
                    {
                      !hi ? <input type="button" value="Send Now" onClick={(e) => submit(e)}/>:<input type="button" value="Sent" onClick={(e) => submit(e)}/>
                    }
                  </div>
                </form>
              </div>
            </div>
          </div>
        

        <Footer />

      </div>
  )
}

export default Contactus;