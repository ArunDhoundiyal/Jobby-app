import {useState} from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
 import { FaEyeSlash } from "react-icons/fa";
 import { FaEye } from "react-icons/fa";
import './index.css'
const Login = () => {
    const [togglePassword, setTogglePassword] = useState(false)
    return(
        <div className='login-bg-container'>
            <div className='login-container'>
                <img src='https://assets.ccbp.in/frontend/react-js/logo-img.png' alt='website-jobby-login-logo' className='login-img-logo'/>
                <label htmlFor='username' className='login-input'>
                    USERNAME :-
                    <br/>
                    <input type="text" placeholder='Username' id='username' className='style-login-input' />
                    </label>  
                    <label htmlFor='password' className='login-input'>
                    PASSWORD :-
                    <br/>
                    <div className="password-login-container">
                        <input type={togglePassword ? 'text':'password'} placeholder='Password' id='password' className='style-login-password-input' />
                        <button className="password-toggle-button" onClick={()=>{setTogglePassword(preState=> !preState)}}>{togglePassword ?<FaEye className="password-icon"  />:<FaEyeSlash className="password-icon" /> }</button>
                    </div>
                    
                    </label> 
                    <button className='style-login-button'>Login<FaArrowRightLong className="login-right-arrow" /></button>
            </div>
        </div>
    )
}

export default Login