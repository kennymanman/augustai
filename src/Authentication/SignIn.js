import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import signinscreenone from "../images/signinscreenone.jpg"


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
      setError( )
      console.log(e.message)
      
    }
  };




  return (
   


<div className=' p-3 h-screen bg-gradient-to-r from-black via-black to-blue-600 '>


<<<<<<< HEAD
{/*
<img 
className='object-bottom object-cover w-full h-fit  absolute '
src={signinscreenone} alt="newsletter"
/> */}

<div className='flex justify-between  relative pt-2'>
<h1 className='text-white font-custom text-2xl font-base tracking-tighter'>August AI.</h1>

{/*
<button onClick={handleLogout}>
<h1 className='text-white font-custom text-2xl font-base tracking-tighter'>LogOut</h1>
</button> */}





<div className='rounded-full bg-lime-300 h-4 w-4 m-2'/>




</div>




 <hr className='border-white  border-2  '/> 


=======
<img 
className='object-bottom object-cover w-full h-full  absolute '
src={signinscreenone} alt="newsletter"
/>
>>>>>>> 7b690f721f5c0ab6c73008d5a82393791a9fb320



{/*
<h1 className='text-2xl font-bold py-2'>Sign in to your account</h1>

<p className='py-2'>
          Don't have an account yet? Send an email to AugustStudio.com</p>


          <label className='py-2 font-medium'>Email Address</label>
          <input onChange={(e) => setEmail(e.target.value)} className='border p-3' type='email' />


          <label className='py-2 font-medium'>Password</label>
          <input onChange={(e) => setPassword(e.target.value)} className='border p-3' type='password' />


          <button onClick={handleSubmit}> Sign In</button> */}

<<<<<<< HEAD
<div className='grid grid-cols-5 gap-2 h-fit '>
=======
<div className='grid grid-cols-5 gap-2 '>
>>>>>>> 7b690f721f5c0ab6c73008d5a82393791a9fb320

<div className='col-span-2 relative p-3 '>


<<<<<<< HEAD


<div className='mt-64'>
=======
<h2 className='text-white font-custom text-2xl font-medium tracking-tighter relative mt-2'>August AI.</h2>

<hr className='relative border-white border-2'/>

<div className='mt-80'>
>>>>>>> 7b690f721f5c0ab6c73008d5a82393791a9fb320
<h1 className='text-white font-custom text-7xl font-medium tracking-tighter '>Sign in to your account</h1>

<h1 className='text-white font-custom text-3xl font-medium tracking-tighter mt-7'>Collaboration + AI + Chatbot.</h1>

<h4 className='text-white font-custom text-sm font-medium tracking-tighter'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h4>
</div>


</div>


<div className='col-span-3  p-3  relative h-screen grid  place-items-end  '>


<div className='flex flex-col gap-4 w-1/2   '>
<input onChange={(e) => setEmail(e.target.value)} className='border-b-2 py-4 w-full relative bg-transparent rounded-t-lg placeholder:text-white p-2 text-white text-2xl' type='email' placeholder='EMAIL' />


<input onChange={(e) => setPassword(e.target.value)} className='border-b-2 py-4 w-full relative bg-transparent rounded-t-lg placeholder:text-white p-2 text-white text-2xl' type='password' placeholder='PASSWORD' />

<<<<<<< HEAD
<button onClick={handleSubmit} className='w-full bg-gray-600 text-white rounded-lg py-3 font-medium tracking-tighter font-custom text-xl  '>Log in</button>
=======
<button onClick={handleSubmit} className='w-full bg-black text-white rounded-lg py-3 font-medium tracking-tighter font-custom text-xl  '>Log in</button>
>>>>>>> 7b690f721f5c0ab6c73008d5a82393791a9fb320

<h4 className='text-white font-custom text-sm font-medium tracking-tighter'>Dont have an account or forgot your password or email? send a message to the office admin for your login details or change of password/email.</h4>
</div>
  
</div>



</div>



</div>
  );
};

export default Signin;