import React,{useState} from 'react'
import {connect} from 'react-redux'
import { Link,redirect } from 'react-router-dom'

const Login = () => {
    const [formData,setFormData]= useState({
        email:'',
        password:''
    })
    const onChange =(e)=>setFormData({...formData,[e.target.name]:e.target.value})

    const onSubmit= (e)=>{
        e.preventDefault();
    }
    const {email,password}=formData
  return (
    <div className='container mt-5'>
        <h1>Sign In</h1>
        <p>Signin to your account</p>
        <form onSubmit={(e)=>onSubmit(e)}>  
            <div className='form-group'>
                <input className='form-control'
                type='email'
                placeholder='Email'
                name='email'
                value={email}
                onChange={(e)=>onChange(e)}
                required/>
            </div>
            <div className='form-group'>
                <input className='form-control'
                type='password'
                placeholder='Password'
                name='password'
                value={password}
                onChange={(e)=>onChange(e)}
                minLength={6}
                required/>
            </div>
            <button className='btn btn-primary' type='submit'>Login</button>
        </form>
        <p className='mt-3'>
            Don't have an account? <Link to="/signup">Signup</Link>
        </p>
        <p className='mt-3'>
         Forgot your password?<Link to="/password-reset">Reset Password</Link>
        </p>
      
    </div>
  )
}
const mapStateToProps=(state)=>{

}

export default (connect) (Login);
