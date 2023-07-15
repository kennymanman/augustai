import React from 'react'
import { GrAddCircle } from "react-icons/gr";



function NotesUI() {
  return (


<div className='p-3'>
<div className='grid grid-cols-3'>







  <div className='col-span-1 '>
     <p className='text-black font-custom text-3xl font-base tracking-tighter text-start'>all notes</p>
    </div>





    <div className='flex flex-row col-span-1 '>
    
    <h3 className='font-custom text-2xl font-medium tracking-tighter'>Create new note</h3>
     <svg  className='w-11 h-10 fill-green-500 stroke-1 stroke-gray-100' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    </div>







  <div className='col-span-1 text-black font-custom text-3xl font-base tracking-tighter flex flex-row text-end'>
    <p>7 <p className='pl-2'>notes</p></p>
    </div>

</div>

    </div>
  )
}

export default NotesUI