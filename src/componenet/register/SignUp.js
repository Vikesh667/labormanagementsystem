import React from 'react'
import style from "./SignUp.module.css"
const SignUp = () => {
  return (
    <div className={style.signupContainer}>
     <input type='email' placeholder='Eamil...'/>
     <input type='password' placeholder='Password...'/>
     <input type='text' placeholder='Phone...'/>
   </div>
  )
}

export default SignUp