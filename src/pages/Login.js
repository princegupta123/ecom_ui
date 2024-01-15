import React from 'react'

const Login = () => {
  return (
    <div className='login'>
        <div className='left'>
         <img src='/images/profile.png'/>
        </div>
        <div className='right'>
          <div className='send-otp'>
            <input placeholder='Mobile Number' type='text'/>
            <button>Send OTP</button>
          </div>
           <input type='text' placeholder='OTP' />
           <button className='verify-otp'>Verify OTP</button>
        </div>
    </div>
  )
}

export default Login