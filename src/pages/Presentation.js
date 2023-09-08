import React from 'react'
import tree from "../images/tree.jpg"
import { UserAuth } from '../context/AuthContext';
import {Link} from 'react-router-dom'





export default function Presentation() {

  const {user} = UserAuth();

  return (

    
  <div>

<div className='grid grid-cols-5 gap-1 px-1 py-1'>

<div className='col-span-2 bg-slate-400 rounded-md min-h-screen relative'>


<img 
className='object-bottom object-cover w-full h-full rounded-md absolute '
src={tree} alt="newsletter"
/>


<button>
<svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-3 my-1 relative stroke-gray-100 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
</svg>
</button>


  <h2 className='text-white font-custom text-3xl font-medium tracking-tighter line-clamp-2 p-3 relative'>Newsletter.</h2>
  <hr className='border-white'/>

  <div className='grid justify-items-center relative mt-60 '>
    <h2 className='text-white font-custom text-2xl font-medium tracking-tighter line-clamp'>Lagos, Nigeria</h2>
    <h1 className='text-white font-custom text-5xl font-medium tracking-tighter line-clamp truncate'>Microsoft Green</h1>

    <p className='text-white font-custom text-base font-medium tracking-tighter line-clamp'>Supported by August AI</p>
  </div>



{/*
  <div className='grid grid-cols-2 gap-1 px-4 h-32 relative'>

 <div className='col-span-1 bg-slate-200 rounded-md px-2 '>
 <h3 className='text-black font-custom text-5xl font-medium tracking-tighter line-clamp-2'>3</h3>
 <p className='text-black font-custom text-sm font-medium tracking-tighter line-clamp-2'>emails sent</p>
 </div>

 <div className='col-span-1 bg-slate-200 rounded-md px-2'>
 <h3 className='text-black font-custom text-5xl font-medium tracking-tighter line-clamp-2'>3</h3>
 <p className='text-black font-custom text-sm font-medium tracking-tighter line-clamp-2'>SMS sent</p>
 </div>

  </div>*/}

</div>






  <div className='col-span-3  rounded-md '>
  

<div className='grid grid-cols-5  gap-1 py-1 relative   ' >



<div  className='col-span-2 bg-lime-300 rounded-md p-2  '>
  <h3 className='text-black font-custom text-5xl font-medium tracking-tighter line-clamp-2  '>Welcome {user.displayName}</h3>

<div className=''>
  <h4 className='text-black font-custom text-xl font-medium tracking-tighter line-clamp-2 mt-20  '>IT Personel</h4>
</div>

</div>



<div className='col-span-3  bg-slate-200  '>

<div className='grid grid-cols-2 h-full gap-1'>
  
    
      <div className='col-span-1 bg-black rounded-md  p-2 '>
    <p className='text-white font-custom text-xl font-medium tracking-tighter line-clamp'>emails sent</p>
    <hr className='border-white'/>
    <div className='grid place-items-end mt-24'>
    <p className=' text-white font-custom text-7xl font-medium tracking-tighter line-clamp-2'>12</p>
    </div>
</div>




      <div className='col-span-1 bg-black rounded-md p-2'>
      <p className='text-white font-custom text-xl font-medium tracking-tighter line-clamp'>SMS sent</p>
      <hr className='border-white'/>

      <div className='grid place-items-end mt-24'>
    <p className=' text-white font-custom text-7xl font-medium tracking-tighter line-clamp-2 '>120</p>
    </div>
      </div>

  </div>  




</div>



  
</div>


<div className=' grid grid-cols-5 gap-1 h-full '>

<div className=' col-span-3 bg-green-300 rounded-md p-2 h-fit '>
<p className='font-custom text-xl font-medium tracking-tighter line-clamp'>Audience</p>
<hr className='border-gray'/>

<div className='grid grid-cols-4 mt-48'>
<h3 className='text-black font-custom text-4xl font-medium tracking-tighter line-clamp-2 col-span-3 mt-32 '>Create, Manage & Organize audience</h3>

<Link className='text-black' to="/Audience">

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 col-span-1 stroke-1 fill-green-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

</Link>

</div>

</div>


<div className='col-span-2 bg-slate-300 rounded-md p-2'>
<p className='font-custom text-xl font-medium tracking-tighter line-clamp'>Campaign</p>
<hr className='border-black'/> 
<h3 className='text-black font-custom text-4xl font-medium tracking-tighter line-clamp-2 mt-4 '>Create Email or SMS campaign</h3>

<Link className='text-black'  to="/Campaignselect">
<button>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 stroke-1 fill-green-500 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</button>
</Link>

</div>

</div>

  </div>


   </div>

    </div>
  )
}
