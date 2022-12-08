import React , {useState} from 'react'
import { useNavigate , Link} from "react-router-dom";
import './SignUp.css'
import { ROUTES } from '../../routes/RouterConfig'
import axios from 'axios';

function SignUp() {
    
    const navigate=useNavigate();

    const [signUpForm , setSignUpForm] = useState({
        registerName: "",
        registerUsername: "",
        registerEmail: "",
        registerPassword: "",
        registerRepeatPassword:""

    })

    const handleSubmit = async (event) =>{
        event.preventDefault()
        console.log(signUpForm)

       await axios.post('http://localhost:8080/api/signup',{
        registerName:signUpForm.registerName,
        registerUsername:signUpForm.registerUsername,
        regiterEmail:signUpForm.registerEmail,
        registerPassword:signUpForm.registerPassword,
        registerRepeatPassword:signUpForm.registerRepeatPassword
        }).then( res => {
        console.log(res);
        console.log(res.data);
                navigate("/Dashboard");
        }).catch(err =>{
            alert(err);
        });
    }

    const handleChange = (event) =>{
        const {name , value} = event.target 

        setSignUpForm(prevState =>{
            return{
                ...prevState,
                [name] : value
            }
        })
    } 
    return (
        <div>
         <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
    <form>
      <div class="text-center mb-3">
        <p>Sign up with:</p>
        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-facebook-f"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-google"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-twitter"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-github"></i>
        </button>
      </div>

      <p class="text-center">or:</p>
      <div class="form-outline mb-4">
        <input type="text" id="registerName" class="form-control" />
        <label class="form-label" for="registerName">Name</label>
      </div>
      <div class="form-outline mb-4">
        <input type="text" id="registerUsername" class="form-control" />
        <label class="form-label" for="registerUsername">Username</label>
      </div>
      <div class="form-outline mb-4">
        <input type="email" id="registerEmail" class="form-control" />
        <label class="form-label" for="registerEmail">Email</label>
      </div>
      <div class="form-outline mb-4">
        <input type="password" id="registerPassword" class="form-control" />
        <label class="form-label" for="registerPassword">Password</label>
      </div>
      <div class="form-outline mb-4">
        <input type="password" id="registerRepeatPassword" class="form-control" />
        <label class="form-label" for="registerRepeatPassword">Repeat password</label>
      </div>
      <div class="form-check d-flex justify-content-center mb-4">
        <input class="form-check-input me-2" type="checkbox" value="" id="registerCheck" checked
          aria-describedby="registerCheckHelpText" />
        <label class="form-check-label" for="registerCheck">
          I have read and agree to the terms
        </label>
      </div>

      <Link to="/Dashboard"><button type="submit" class="btn btn-dark text-dark btn-block mb-3">Sign in</button></Link>
    </form>
  </div>

</div>
    )
    
}

export default SignUp