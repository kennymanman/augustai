import React from 'react'
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";

import Bluesky from "./Video/Bluesky.mp4"

import {Link} from 'react-router-dom'

import ReactWeather, { useOpenWeather } from 'react-open-weather';




export default function Dashboard() {


    const { data, isLoading, errorMessage } = useOpenWeather({
      key: '7130f0ff7221e63b3e0e85127e670e7a',
      lat: '48.137154',
      lon: '11.576124',
      lang: 'en',
      unit: 'metric', // values are (metric, standard, imperial)
    });


    
  






  return (





<div className=" bg-yellow-100 grid grid-cols-2 gap-1 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 min-h-screen ">

{/*
<video 
autoPlay
 loop
 muted 
className='max-h-screen object-cover absolute '>
<source src={Bluesky} type="video/mp4" />
</video> */}









<div className=''>

<video 
autoPlay
 loop
 muted 
className='object-fill absolute aspect-h-80'>
<source src={Bluesky} type="video/mp4" />

</video>

<div className='grid grid-cols-3 gap-1 mb-2 mt-2 relative  '>




<div className='rounded-lg col-span-1 max-h-fit text-center '>
<img class="inline-block h-12 w-12 rounded-full ring-2 ring-black" src="https://images.unsplash.com/photo-1654573821777-e00c3a414335?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1162&q=80" alt="{user.handle}"/>
</div>  

<div className='rounded-2xl col-span-2 bg-black p-2 '>
  
 <p className=' text-center font-custom text-3xl font-bold tracking-tight text-white '>Glory Morisson</p> 
 <p className=' text-center font-roman text-2xl font-medium text-white '>NSITF Admin</p> 
</div>
</div>



<div className='grid grid-cols-2  gap-1 relative pl-1'>

  <div className='grid grid-flow-row-dense gap-y-2 '>

  <div className='bg-white rounded-md h-64 border-2 border-slate-900 '>

  <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel="Abuja"
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast
    />
  </div>

<div className='bg-red-500 rounded-md h-24 border-2 border-slate-900 p-2'>
<p className=' text-start font-custom text-3xl font-bold tracking-tighter '>Website Visits</p>
 <Link to="/Webvisit">Go</Link></div> 
</div>

<div className='bg-yellow-300 rounded-md border-2 border-slate-900 p-2 '>
  
<p className=' text-start font-custom text-3xl font-bold tracking-tighter '>Reminder</p>
  <Link to="/Reminder">Remind</Link>
  </div>

</div>

<div className='bg-blue-300 rounded-md relative h-48 mt-2 mb-2 border-2 border-slate-900 ml-1 p-2 '>
<p className=' text-start font-custom text-3xl font-bold tracking-tighter '>Meetings</p>

<div className='grid grid-cols-2  gap-1'>
<div className=''>
  <p className='text-center font-custom text-lg font-normal tracking-tighter' >Open Meetings</p>
</div>

<div className='text-start'>
<p className='font-custom text-lg font-medium tracking-tighter' >Create<br/>and Schedule Meetings</p>
<Link to="/Meeting">See More</Link>
</div>
</div>


</div>



<div className='grid grid-cols-2  gap-1 gap-x-28 relative pl-1'>
  <div className='bg-green-300 rounded-md h-fit border-2 border-slate-900  p-2'>

  <p className=' text-start font-custom text-3xl font-bold tracking-tighter '>Chats</p>
   Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of t.
  
  <Link to="/Chat">See More</Link>
  </div>

  <div className='bg-green-500 rounded-md max-h-fit border-2 border-slate-900 p-2 '>
  <p className=' text-start font-custom text-3xl font-bold tracking-tighter '>Presentation</p>
  <Link to="/Presentation">See More</Link>
  </div>
</div>


<div className='bg-yellow-500 border-2 border-slate-900 h-44 mt-2 relative '>Ad Carousel</div>



</div>






<div className='bg-red-500 relative min-h-screen border-2 border-slate-900 rounded-lg'>


  <MainContainer>
    <ChatContainer>
      <MessageList>
        <Message
          model={{
            message: "Hey i am AUG AI, how may i help",
            sentTime: "just now",
            sender: "Joe",
          }}
        />
      </MessageList>
      <MessageInput placeholder="Type message here" />
    </ChatContainer>
  </MainContainer>





</div>








{/*
<div className='grid grid-flow-col gap-2 lg:grid-cols-2 sm:grid-cols-1 min-h-screen '>


*First Column*
<div className='bg-green-300 grid grid-flow-row '>


<div className='grid grid-cols-2 grid-rows-6  mt-50'> 

<div className='bg-red-400 row-span-2'>Avatar</div>
<p>Welcome Glory Morisson</p>
</div> 



 <div className='grid grid-cols-2   gap-x-1 '>
<div className='bg-yellow-200 col-span-1 rounded-md'>Yellow</div> 
<div className='bg-yellow-500 rounded-md '>Yellow</div>  
</div> 
  
  

</div>  


Second Column
<div className='bg-blue-200'>Chatbot Entry screen</div>  
  
</div>
*/}
    
    </div>

  )
}
