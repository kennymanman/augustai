import React, {useState} from 'react'
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

import axios from "axios"

//import ReactWeather, { useOpenWeather } from 'react-open-weather';

import {GrSettingsOption} from 'react-icons/gr'

import { UserAuth } from './context/AuthContext';







export default function Dashboard() {


  


const { user} = UserAuth();
  
const [data, setData] = useState({})

const [location, setLocation] = useState("")

const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=7130f0ff7221e63b3e0e85127e670e7a`


const searchLocation = (event) => {
  if (event.key === 'Enter') {
    axios.get(url).then((response) => {
      setData(response.data)
    
      console.log(response.data)
      
    })
    setLocation('')
  }
}





return (





<div className=" bg-gray-400 grid grid-cols-2 gap-1 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 min-h-screen ">

{/*
<video 
autoPlay
 loop
 muted 
className='max-h-screen object-cover absolute '>
<source src={Bluesky} type="video/mp4" />
</video> */}






<div className=''>

{/*<video 
autoPlay
 loop
 muted 
className='object-fill absolute aspect-h-80'>
<source src={Bluesky} type="video/mp4" />

</video>*/}


{/*

<div className='grid grid-cols-3 gap-1 mb-2 mt-2 relative   '>

<div className='rounded-lg col-span-1 max-h-fit text-center '>
<img class="inline-block h-12 w-12 rounded-full ring-2 ring-black" src="https://images.unsplash.com/photo-1654573821777-e00c3a414335?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1162&q=80" alt="{user.handle}"/>
</div>  

<div className='rounded-2xl col-span-2 bg-black p-2 '>
  
 <p className=' text-center font-custom text-3xl font-bold tracking-tight text-white '>Hello {user.displayName}</p> 
 <p className=' text-center font-roman text-2xl font-medium text-white '>NSITF Admin</p> 

 <Link to="/Profile"><GrSettingsOption className='bg-white' /></Link>
</div>
</div>

*/}


<div className='grid grid-cols-6 m-1  gap-1 '>

<div className='relative col-span-4 bg-slate-300 h-fit rounded-md border-2 border-slate-900'>

<video 
autoPlay
 loop
 muted 
className='object-bottom object-fill w-full h-full absolute '>
<source src={"https://player.vimeo.com/external/552079024.hd.mp4?s=cb11020059a26b25eedc7a4f2d6fc2b1b1c6e722&profile_id=174&oauth2_token_id=57447761"} type="video/mp4" />

</video>

<div className='grid grid-cols-5 relative '>


<Link to="/Profile"><img class="col-span-2 inline-block h-10 w-10 rounded-full ring-2 m-3 ring-black" src="https://images.unsplash.com/photo-1654573821777-e00c3a414335?ixlib=rb-4.0.3&ixid=MnwxMj" alt="{user.handle}"/></Link>

<div className='grid grid-rows-2 col-span-3 mt-4'>
<h1 className=' font-custom text-4xl font-medium tracking-tighter line-clamp-2 text-white '>Welcome {user.displayName}</h1>
<h2 className=' font-custom text-xl font-medium tracking-tighter text-gray-200 '>Human Resources, head of department</h2>
<h3 className=' font-custom text-xl font-medium tracking-tighter text-gray-200 '>at August Studio.</h3>
</div>

{/*<div className='col-span-1 place-self-end m-3'>
<Link to="/Profile"><GrSettingsOption className='bg-white ' /></Link>
</div>*/}


</div>
</div>



<div className=' col-span-2 rounded-md bg-lime-300 border-2 border-slate-900  '>
<p className='text-center text-black font-custom text-5xl font-base tracking-tighter'>12:09</p>

</div>


</div>








<div className='grid grid-cols-2  gap-1 relative m-1'>

  <div className='grid grid-flow-row-dense gap-y-2 '>


<div className='bg-white rounded-md h-fit border-2 border-slate-900  '>

<div className="grid grid-flow-col-dense grid-cols-4 gap-1">


  <p className='col-span-2 text-start font-custom  text-2xl font-bold tracking-tighter leading-5 ml-2 pt-3 '>Weather.</p>
  

  <input
 className='rounded-full col-span-2 text-center mt-3 m-1 outline  outline-slate-500'
 value={location}
 onChange={event => setLocation(event.target.value)}
 onKeyDown={searchLocation}
  placeholder  ='enter location'
  type="text" 
  
  />
  

</div>

<hr/>

<div className='p-2'>

<div className='grid grid-cols-5' >
<h5 className=' col-span-1 text-start font-custom  text-sm font-bold tracking-tighter leading-5'>city</h5>


<h2 className='col-span-4 font-custom text-xl font-medium tracking-tighter'>{data.name}</h2>

{/*<h2 className='col-span-2 font-custom text-lg font-semibold tracking-tighter'>{data.sys ? <p>{data.sys.country}</p>: null}</h2>*/}

</div>


<div className='grid grid-cols-5' >
{data.main ? <h2 className='col-span-2 font-custom text-8xl font-base tracking-tighter'>{data.main.temp.toFixed()}°</h2>: null}




<h4 className='col-span-3 tracking-tighter font-custom font-medium mt-5 text-xl'>{data.weather ? <p>{data.weather[0].main}, {data.weather[0].description} </p>: null}</h4>
</div>

<hr/>
{/*<p className='font-custom tracking-tight text-xl font-base leading-6 text-slate-800'>Check & view weather of all office location cities with the push of a button.</p>*/}
<div className='grid grid-cols-3 mt-5'>

 <div className='col-span-1'>
  <h5 className=' text-start font-custom  text-sm font-bold tracking-tighter leading-5'>humidity</h5>
  <p className='font-custom text-center  text-2xl font-medium tracking-tighter'>{data.main ? <p>{data.main.humidity}</p>: null}</p>
  </div> 


  <div className='col-span-1'>
  <h5 className=' text-start font-custom  text-sm font-bold tracking-tighter leading-5'>windspeed</h5>
  <p className='font-custom text-center  text-2xl font-medium tracking-tighter'>{data.wind ? <p>{data.wind.speed}</p>: null}</p>
  </div> 


  <div className='col-span-1'>
  <h5 className=' text-start font-custom  text-sm font-bold tracking-tighter leading-5'>temp max</h5>
  <p className='font-custom text-center  text-2xl font-medium tracking-tighter'>{data.main ? <p>{data.main.temp_max}</p>: null}</p>
  </div> 

</div>


{/*<p className='font-custom tracking-tight text-xl font-bold leading-5 text-slate-600'>Check and view weather of all office location cities with the push of a button.</p>*/}
</div>



  </div>

<div className='bg-red-500 rounded-md h-24 border-2 border-slate-900 p-2'>
<p className=' text-start font-custom text-3xl font-bold tracking-tighter '>Notes</p>
 <Link to="/Notes">Go</Link></div> 
</div>


<div className='bg-yellow-300 rounded-md border-2 border-slate-900 p-2 '>
  
  
<p className=' text-start font-custom text-3xl font-bold tracking-tighter '>Reminder</p>
  <Link to="/Reminder">Remind</Link>
  </div>

</div>



<div className='bg-blue-300 rounded-md relative h-48 m-1 border-2 border-slate-900 ml-1 p-2 '>
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



<div className='grid grid-cols-2  gap-1 relative m-1'>
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
