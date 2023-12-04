import React from 'react'
import "./auth.css";
const Auth = () => {
  return (
    <div className='login'>
    <div className='send-otp'>
      <input type='number' placeholder='enter your number'/>  
      <button>Send OTP</button>
    </div>
    <div className='verify-otp'>
    <input type='number' placeholder='enter OTP'/>
    <button>Verify OTP</button>
    </div>
    </div>
  )
}

export default Auth