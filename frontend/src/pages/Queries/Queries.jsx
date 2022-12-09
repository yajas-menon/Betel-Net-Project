import React from 'react'
import './Queries.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import {ROUTES} from '../../routes/RouterConfig.js'
const Queries = ()  =>{

  const [queries1,setQueries]=useState([]);
  const navigate=useNavigate();
     useEffect (() =>{
      axios.get('http://localhost:8080/api/user/getUsers').then(res =>{
        setQueries(res.data.users);
        console.log(queries1);
       }).catch(err =>{
        console.log(err);
       })
    });
    
    const shreyas = () =>{
      navigate(ROUTES.Dashboard)
    } 

  return (
    <div>
     
    <div class="outerdiv1234">
        <div class="innerdiv1234">
        <div className='go'>
        <button className='btn btn-lg btn-primary' onClick={(e) => shreyas(e)}>Go Back</button>
        <h1 className='intro'>All User Queries</h1>
        </div>
            <div class="">
                {
                  queries1 && queries1?.map((item,key) =>{
                    if(item.email!=='admin@gmail.com' && item.queries!=0){
                    return(
                      <div className='div1 eachdiv'>
                      <div class="userdetails">
                    <div class="imgbox">
                        <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-daniel.jpg"
                            alt="" className='imagebro' />
                    </div>
                    <div class="detbox">
                        <p class="name">{item.name}</p>
                    </div>
                </div>
                <div class="review">
                    <h4>{item.queries}</h4>
                </div>
                <p></p>
                </div>  
                    )
                    }
                  })
                }
            </div>
        </div>
    </div>
    </div>
  )
}

export default Queries