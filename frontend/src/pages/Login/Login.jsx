import React, { useState } from 'react'
import "./Login.css"
import TextNIcon from '../../components/TextNIcon/TextNIcon'
import { ROUTES } from '../../routes/RouterConfig'
import axios from "axios"
import { useNavigate, Link } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [login,setLogin] = useState(false);
    const [signup,setSignup] = useState(false);
    const [loginerr,setLoginerr]=useState();
    const [signerr,setSignerr]=useState();
    const  [initialValues,setFormValues] = useState({  uname1: "",uemail1: "", upass1: "" });
    const [inputs,setInputs]=useState({
        uemail:"",
        upass:""
      });

    const handleSubmit = async (event) => {
        event.preventDefault()
        await axios.post('http://localhost:8080/api/user/login', {
            email: inputs.uemail,
            password: inputs.upass
        }).then(res => {
            console.log(res);
            console.log(res.data);
            setLogin(true);
            if(inputs.uemail=='admin@gmail.com'){
                localStorage.setItem('login','admin');
            }
            else{
                localStorage.setItem('login','user');
            }
            navigate("/Dashboard");
        }).catch(err => {
            console.log(err.response.data.message);
            setLoginerr(err.response.data.message);
            console.log(loginerr);
        })
    }

    const handleSubmit1 = async (event) => {
        event.preventDefault()
       await axios.post('http://localhost:8080/api/user/signup',{
        name:initialValues.uname1,
        email:initialValues.uemail1,
        password:initialValues.upass1,
        }).then( res => {
        console.log(res);
        console.log(res.data);
        setSignup(true);
        
        if(initialValues.uemail1=='admin@gmail.com'){
            localStorage.setItem('login','admin');
        }
        else{
            localStorage.setItem('login','user');
        }
        navigate("/Dashboard");
        }).catch(err =>{
            console.log(err.response.data.message);
            setSignerr(err.response.data.message);
        });
    }
    
    const yajas1=(e)=>{
        e.preventDefault();
        const newdata ={...inputs};
        newdata[e.target.name]=e.target.value;
        setInputs(newdata);
        console.log(inputs);
    };

    const yajas=(e)=>{
        e.preventDefault();
        console.log("hello")
        const newdata ={...initialValues};
        newdata[e.target.name]=e.target.value;
        setFormValues(newdata);
        console.log(initialValues);
    }
    return (
        <div className='hii'>
            <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                <li class="nav-item" role="presentation">
                    <a class="nav-link active" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
                        aria-controls="pills-login" aria-selected="true">Login</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" id="tab-register" data-mdb-toggle="pill" href="#pills-register" role="tab"
                        aria-controls="pills-register" aria-selected="false">Register</a>
                </li>
            </ul>

            <div class="tab-content">
                <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                    <form>

                        <div class="form-outline mb-4">
                            <input type="email" name='uemail' class="form-control" onChange={(e)=>yajas1(e)}/>
                            <label class="form-label" for="loginName" >Email or username</label>
                        </div>
                        <div class="form-outline mb-4">
                            <input type="password" name='upass' class="form-control" onChange={(e)=>yajas1(e)}/>
                            <label class="form-label" for="loginPassword" >Password</label>
                        </div>
                        <p style={{color:"red",textAlign:"center"}}>{loginerr}</p>
                        <div class="row mb-4">
                            <div class="col-md-6 d-flex justify-content-center">

                                <div class="form-check mb-3 mb-md-0">
                                    <input class="form-check-input" type="checkbox" value="" id="loginCheck" checked  />
                                    <label class="form-check-label" for="loginCheck"> Remember me </label>
                                </div>
                            </div>

                            <div class="col-md-6 d-flex justify-content-center">
                                <a href="#!">Forgot password?</a>
                            </div>
                        </div>


                        <button type="submit" class="btn btn-primary text-dark btn-block mb-4" onClick={(event) => handleSubmit(event)}>Sign in</button>
                        <div class="text-center">
                            <p className='text-primary'>Not a member? Register</p>
                        </div>
                    </form>
                </div>
                <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
                    <form>
                        <div class="form-outline mb-4">
                            <input type="text" name='uname1' class="form-control" onChange={(event) => yajas(event)}/>
                            <label class="form-label" for="registerName">Name</label>
                        </div>

                        <div class="form-outline mb-4">
                            <input type="email" name='uemail1' class="form-control" onChange={(event) => yajas(event)}/>
                            <label class="form-label" for="registerEmail">Email</label>
                        </div>


                        <div class="form-outline mb-4">
                            <input type="password" name='upass1' class="form-control" onChange={(event) => yajas(event)}/>
                            <label class="form-label" for="registerPassword">Password</label>
                        </div>
                        <p style={{color:"red",textAlign:"center"}}>{signerr}</p>
                        <div class="form-check d-flex justify-content-center mb-4">
                            <input class="form-check-input me-2" type="checkbox" value="" id="registerCheck" checked
                                aria-describedby="registerCheckHelpText" />
                            <label class="form-check-label" for="registerCheck">
                                I have read and agree to the terms
                            </label>
                        </div>
                        <button type="submit" class="btn btn-primary text-dark btn-block mb-3" onClick={(event) => handleSubmit1(event)}>Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login