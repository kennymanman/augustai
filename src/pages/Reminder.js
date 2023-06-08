import React from 'react'
import { FiArrowLeft } from "react-icons/fi";
import Calendar from '../components/Calendar';



export default function Reminder() {
  return (
    
    <div className='bg-yellow-300 min-h-screen p-2'>
      
      <FiArrowLeft className='text-2xl mt-2'/>

      <h3 className='font-custom text-8xl font-bold tracking-tighter text-black '>Reminder.</h3>
      <hr/>
      
      <div className='grid grid-cols-2 mt-3'>
     

      <p className='tracking-tighter text-start'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      It has survived not only five centuries, but also the leap in.</p>

      <p className='tracking-tighter text-end'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      It has survived not only five centuries, but also the leap in.</p>
      </div>

      <div className='bg-black min-h-screen rounded-md'>

      <div className='grid grid-cols-3 mt-3 p-2 gap-2'>
     <Calendar className='col-span-1 absolute'/>
    

     <div className='col-span-2'>
     <h2 className='font-custom text-6xl font-bold tracking-tighter text-white text-start mt-4'>All Reminders</h2>
     <h3 className='text-white font-custom tracking-tighter mt-5 text-4xl text-end '>upcoming events.</h3>
     <hr className='border-white'/>
     </div>
      </div>


      </div>
      </div>
  )
}


