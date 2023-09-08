import React , { useRef } from 'react'
import EmailEditor from 'react-email-editor';
import Emailformtest from '../components/Emailformtest.tsx';



export default function CreateEmail() {



 

  return (
    <div className=' p-2 grid bg-lime-200 '>
        <h1 className='text-black font-custom text-5xl font-medium tracking-tighter justify-self-end mt-3  '>Create email.</h1>

<hr className='border-black border-2'/>

 

<Emailformtest />




</div> 
  )
}
