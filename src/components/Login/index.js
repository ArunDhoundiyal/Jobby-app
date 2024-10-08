import {useState, useEffect} from 'react'
import {FaEye, FaEyeSlash} from 'react-icons/fa'

import './index.css'

const Login = () => {
  const [togglePassword, setTogglePassword] = useState(false)
  const [submitLoginDetail, setSubmitLoginDetail] = useState(null)
  const [userLoginDetail, setUserLoginDetail] = useState({
    username: '',
    password: '',
  })

  useEffect(() => {
    const postLoginDetail = async () => {
      if (submitLoginDetail) {
        try {
          const response = await fetch('https://apis.ccbp.in/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(submitLoginDetail),
          })
          console.log(response)
        } catch (error) {
          console.log(error)
        }
      }
    }
    postLoginDetail()
  }, [submitLoginDetail])

  const onClickTogglePassword = () => {
    setTogglePassword(!togglePassword)
  }

  const onSubmitLoginDetails = event => {
    event.preventDefault()
    setSubmitLoginDetail(userLoginDetail)
  }

  const onChangeLoginDetail = event => {
    const {name, value} = event.target
    setUserLoginDetail({...userLoginDetail, [name]: value})
  }

  return (
    <div className="login-bg-container">
      <form onSubmit={onSubmitLoginDetails} className="login-form-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="job-login-logo-img"
          />
        </div>

        <label className="login-label" htmlFor="userName">
          USERNAME :
          <input
            placeholder="Username"
            className="login-username-input"
            type="text"
            id="userName"
            name="username"
            value={userLoginDetail.username}
            onChange={onChangeLoginDetail}
          />
        </label>
        <label className="login-label" htmlFor="passWord">
          PASSWORD :
          <div className="login-password-container">
            <input
              placeholder="Password"
              className="login-password-input"
              type={togglePassword ? 'text' : 'password'}
              id="passWord"
              name="password"
              value={userLoginDetail.password}
              onChange={onChangeLoginDetail}
            />
            <button
              className="login-toggle-button"
              type="button"
              onClick={onClickTogglePassword}
            >
              {togglePassword ? (
                <FaEyeSlash className="fa-eye" />
              ) : (
                <FaEye className="fa-eye" />
              )}
            </button>
          </div>
        </label>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
