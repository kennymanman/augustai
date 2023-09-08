import React from 'react'
import { UserAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import black from "../images/black.jpg"




export default function Profile() {

    const { user, logout } = UserAuth();
    const navigate = useNavigate();
  
    const handleLogout = async () => {
      try {
        await logout();
        navigate('/');
        console.log('You are logged out')
      } catch (e) {
        console.log(e.message);
      }
    };


  return (




    <div>
      
      
    


<div className='grid grid-cols-5 gap-2 '>


<div className='col-span-2 h-screen sticky top-0 p-1 '>

<img 
className='object-bottom object-cover w-full h-full rounded-lg absolute '
src={black} alt="newsletter"
/>

<button>
<svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-3 my-1 relative stroke-gray-100 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
</svg>
</button>


  <h2 className='text-white font-custom text-3xl font-medium tracking-tighter line-clamp-2 p-3 relative'>Profile.</h2>
  <hr className='border-white border-4 border-inherit'/>


<div className='flex justify-center'>
  <img class=" relative inline-block h-40 w-auto rounded-md ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""></img>
</div>

<hr className='border-white'/>
<h2 className='text-white font-custom text-5xl font-medium tracking-tighter relative px-3 pt-3'>{user.displayName}</h2>

<h3 className='text-white font-custom relative tracking-tighter px-3 text-lg'>department: Human Resources</h3>
<h3 className='text-white font-custom relative tracking-tighter px-3 text-lg'>role: Intern</h3>

<div className='w-1/2 p-2'>
<hr className='border-white'/>


<Link to="/DetailsEdit">
<div className='flex flex-row place-content-between'>
<h3 className='text-white font-custom relative tracking-tighter px-3 text-lg'>Change profile info</h3>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 relative stroke-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
</svg>
</div>
</Link>


<hr className='border-white'/>


<Link to="/Resetmypassword">
<div className='flex flex-row place-content-between'>
<h3 className='text-white font-custom relative tracking-tighter px-3 text-lg'>See my office</h3>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 relative stroke-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
</svg>
</div>
</Link>



<hr className='border-white'/>


<Link onClick={handleLogout}>
<div className='flex flex-row place-content-between'>
<h3 className='text-white font-custom relative tracking-tighter px-3 text-lg'>Log-out</h3>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 relative stroke-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
</svg>
</div>
</Link>



</div>


</div>


<div className='col-span-2'>Bra</div>

<div className='col-span-1'>Gra</div>







</div>



    </div>
  )
}
