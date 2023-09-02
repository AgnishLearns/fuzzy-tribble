import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Validation from './LoginValidation';
import axios from 'axios';

export default function Login() {
    const [values, setValues] = useState({
      email: '',
      password: ''
    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
      setValues(prev => ({...prev,[event.target.name] : [event.target.value]}))
    }
    const handleSubmit = (event) => {
      event.preventDefault();
      setErrors(Validation(values));
      if(errors.email === "" && errors.password === "") {
        axios.post('http://localhost:8080/login', values)
        .then(res => {
          if(res.data === "Success") {
            navigate("/home")
          }
          else{
            alert("Invalid User");
          }
        })
        .catch(err => console.log(err))
      }
    }
  return (
    <div className='relative w-full h-screen bg-zinc-900/90'>    

    <div className='flex justify-center items-center h-full'>
        <form action='' onSubmit={handleSubmit} className='max-w-[400px] w-full mx-auto bg-white p-8'>
            <h2 className='text-4xl font-bold text-center py-4'>NIRF.</h2>
            <div className='flex flex-col mb-4'>
                <label>Institute Email</label>
                <input onChange={handleInput} name='email' className='border relative bg-gray-100 p-2' type="email" />
                {errors.email && <span className='text-red-800'> {errors.email}</span>}
            </div>
            <div className='flex flex-col '>
                <label>Password</label>
                <input onChange={handleInput} name='password' className='border relative bg-gray-100 p-2' type="password" />
                {errors.password && <span className='text-red-800'> {errors.password}</span>}
            </div>
            <button type='submit' className='w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white'>Sign In</button>
            <p className='flex items-center mt-2'><input className='mr-2' type="checkbox"  />Remember Me</p>
         <Link to="/" className='text-center mt-8 cursor-pointer hover:underline'>Not a member? Sign up now</Link>
        </form>
    </div>
    </div>
  )
}