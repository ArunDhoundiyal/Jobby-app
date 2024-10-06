import {useState, useEffect} from 'react'
import axios from 'axios'
import { FaArrowRightLong } from "react-icons/fa6";
 import { FaEyeSlash } from "react-icons/fa";
 import { FaEye } from "react-icons/fa";
import './index.css'
const Login = () => {
    const [togglePassword, setTogglePassword] = useState(false)
    const [userCredentials, setUserCredentials] = useState({loginUserName:'', loginPassword:''})
    const [submitLoginDetail, setSubmitLoginDetail] = useState({username:'', password:''})

    useEffect(()=>{
        const fetchLoginDetail = async() => {
            try {
                const response = await axios.post(`https://apis.ccbp.in/login`, submitLoginDetail)
                console.log(response)
                
            } catch (error) {
                console.log('error')
                
            }
        }
        fetchLoginDetail();


    },[submitLoginDetail])

    const onChangeLoginInput = (event) => {
        const {name, value} = event.target
        setUserCredentials(preUserCreadentials => ({...preUserCreadentials, [name]:value}))
    }


    const onClickLoginSubmitButton = (event) => {
        event.preventDefault()
        setSubmitLoginDetail({
            username: userCredentials.loginUserName,
            password: userCredentials.loginPassword
        })
    }
    return(
        <div className='login-bg-container'>
            <form onSubmit={onClickLoginSubmitButton} className='login-container'>
                <img src='https://assets.ccbp.in/frontend/react-js/logo-img.png' alt='website-jobby-login-logo' className='login-img-logo'/>
                <label htmlFor='username' className='login-input'>
                    USERNAME :-
                    <br/>
                    <input name='loginUserName' 
                    value={userCredentials.loginUserName} 
                    onChange={onChangeLoginInput} 
                    type="text" 
                    placeholder='Username' 
                    id='username' 
                    className='style-login-input' />
                    </label>  
                    <label htmlFor='password' className='login-input'>
                    PASSWORD :-
                    <br/>
                    <div className="password-login-container">
                        <input name='loginPassword' 
                        value={userCredentials.loginPassword} 
                        onChange={onChangeLoginInput} 
                        type={togglePassword ? 'text':'password'} 
                        placeholder='Password' 
                        id='password' 
                        className='style-login-password-input' />
                        <button 
                        className="password-toggle-button" 
                        onClick={()=>{setTogglePassword(preState=> !preState)}}>
                            {togglePassword ?<FaEye className="password-icon"  />:<FaEyeSlash className="password-icon" /> }
                        </button>
                    </div>
                    
                    </label> 
                    <button 
                    type='submit' className='style-login-button'>
                        Login<FaArrowRightLong className="login-right-arrow" />
                    </button>
            </form>
        </div>
    )
}

export default Login
