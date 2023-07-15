import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';


const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();



  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      navigate('/Dashboard')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  };




  return (
   


<div>

<h1 className='text-2xl font-bold py-2'>Sign in to your account</h1>

<p className='py-2'>
          Don't have an account yet? Send an email to AugustStudio.com</p>


          <label className='py-2 font-medium'>Email Address</label>
          <input onChange={(e) => setEmail(e.target.value)} className='border p-3' type='email' />


          <label className='py-2 font-medium'>Password</label>
          <input onChange={(e) => setPassword(e.target.value)} className='border p-3' type='password' />


          <button onClick={handleSubmit}> Sign In</button>

</div>
  );
};

export default Signin;