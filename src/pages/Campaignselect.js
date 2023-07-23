import React from 'react'
import tree from "../images/tree.jpg"
import {Link} from 'react-router-dom'
import field from "../images/fieldthree.jpg"
import hill from "../images/hill.jpg"





export default function Campaignselect() {
  return (



    <div className='p-2 bg-black '>

<div className='grid grid-cols-5 '>


<div className='relative h-screen col-span-2'>

<img 
className='object-bottom object-cover w-full h-full rounded-md absolute '
src={hill} alt="newsletter"
/>

<button>
<svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-2 my-2 relative stroke-gray-100 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
</svg>
</button>

     <h2 className='text-white font-custom text-5xl font-medium tracking-tighter relative   p-2'>Select Campaign type</h2> 
     <hr className='border-white relative'/>



     {/*<p className='relative text-white font-medium tracking-tighter font-custom text-md text-center p-2  '>August Studio.</p>*/}
</div>

       

   <div className='col-span-3'>

    <div className='text-center mt-40'>

      <h3 className='text-white font-custom text-4xl font-medium tracking-tighter'>Select type</h3>
      <hr className='border-white '/>

<div className='grid grid-rows-2 gap-11 justify-items-center mt-20 text-center '>


<Link to="/Email">
<button className= 'bg-white rounded-full px-28  py-2 font-medium tracking-tighter font-custom text-center text-lg text-black'>Create Email Campaign</button>
</Link>


<Link to="/Sms">
<button className='bg-white rounded-full px-28  py-2 font-medium tracking-tighter font-custom text-lg text-black '>Create SMS Campaign</button>
</Link>
</div>

      
    </div>

   </div>
        
        



        </div>
        
        
        
        
        </div>
  )
}
