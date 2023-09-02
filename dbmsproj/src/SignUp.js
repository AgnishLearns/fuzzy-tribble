import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './SignUpValidation';
import axios from 'axios';


const SignUp = () => {

    const [values, setValues] = useState({
        name: '',
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
        if(errors.name === "" && errors.email === "" && errors.password === "") {
          axios.post('http://localhost:8080/signup', values)
          .then(res => {
            navigate('/signin')
          })
          .catch(err => console.log(err))
        }
      }
  return (
    <div className='relative w-full h-screen bg-black'>
    <div className='flex justify-center items-center h-full bg-purple-300 '>
        <form onSubmit={handleSubmit} className='max-w-[400px] w-full mx-auto bg-transparent outline-black border- p-8'>
          
            <h2 className='text-4xl font-bold text-center py-4'>NIRF.</h2>
            <div className='flex flex-col mb-4'>
                <label>Institute Name</label>
                <input onChange={handleInput} className='border relative bg-gray-100 p-2 rounded outline-none bg-transparent border-purple-900' type="text" name='name' />
                {errors.name && <span className='text-red-800'> {errors.name}</span>}
            </div>
            
            <div className='flex flex-col mb-4'>
                <label>Institute Email</label>
                <input onChange={handleInput} className='border relative bg-gray-100 p-2 rounded outline-none bg-transparent border-purple-900' type="email" name='email' />
                {errors.email && <span className='text-red-800'> {errors.email}</span>}
            </div>
            <div className='flex flex-col '>
                <label>Password</label>
                <input onChange={handleInput} className='border relative bg-gray-100 p-2 rounded outline-none active:border-b-2 active:outline-none bg-transparent border-purple-900' type="password" name='password' />
                {errors.password && <span className='text-red-800'> {errors.password}</span>}
            </div>
            <div id="box" className='bg-indigo-100 rounded-md my-2 px-2 py-1'>
                    <ol>
                    <h5 className='text-black underline text-xs'>Follow the given format for Password</h5>
                    <ol className='text-blue-800 font-mono text-xs'>
                    <li>Password must be atleast 8 characters.</li>
                    <li>At least one alphabet.</li>
                    <li>At least one number present in the password.</li>
                    <li>At least one special character.</li>
                    </ol>
                    </ol>
              </div>
            <button type='submit' className='w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white'>Sign Up</button>
            <p className='flex items-center mt-2 font-thin text-black '>On signing up you are agreeing to our terms and conditions. </p>
            <Link to="/signin" className='text-center mt-8 cursor-pointer hover:underline'>Already a member? Sign in</Link>        
    
            </form>
    </div>
    </div>
  )
}

export default SignUp