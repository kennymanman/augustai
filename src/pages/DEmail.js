import React, {useState} from 'react'
import { HiMenuAlt3 } from "react-icons/hi";
import { GrAddCircle } from "react-icons/gr";
import { Link } from "react-router-dom";
import {CgNotes , CgHeart, CgCheckO, CgBell, CgUserList, CgArrowLeft, CgTrash } from "react-icons/cg";
import Templateone from '../components/emailTemplates/Templateone'
import EmailEditor from '../components/EmailEditor'

import CreateEmail from "../emailscreencomponents/CreateEmail"
import EmailAI from "../emailscreencomponents/EmailAI"
import EmailSummary from "../emailscreencomponents/EmailSummary"
import SentEmail from "../emailscreencomponents/SentEmail"




export default function Email() {


  const menus = [
    { name: "Create new audience", link: "/", icon:GrAddCircle },
  ]


  const [open, setOpen] = useState(true);

  const [notes, setNotes] = useState([]);

  const [selectedSection, setSelectedSection] = useState('createnew');

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };




  return (
    
    <div className='bg-lime-200 flex relative  '>



{/*
<div className='absolute w-full p-2 grid'>
        <h1 className='text-black font-custom text-5xl font-medium tracking-tighter justify-self-end mt-3 '>Create email.</h1>

<hr/>

</div> */}







<div
        className={`bg-black min-h-screen absolute  ${
          open ? "w-96" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >


<div className="py-3 grid  ">

<Link to="/Presentation">
<svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer place-self-start w-6 h-6 mx-1 my-1 relative stroke-white ">
 <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
</svg>
</Link>




{/*
         <HiMenuAlt3
           size={26}
           color={"white"}
           className="cursor-pointer place-self-end mt-6  "
           onClick={() => setOpen(!open)}
         />*/}


<div className='place-self-end'>
<button  onClick={() => setOpen(!open)}>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer  mt-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
</button>
</div>



<hr className='mt-3'/>



</div>


<div className=''>

<ul>
            
            

           <li className={`flex flex-row gap-3 p-2  font-custom text-xl font-medium tracking-tighter line-clamp-2 cursor-pointer ${
              selectedSection === 'summary' ? 'bg-green-600 text-white rounded-xl ' : 'text-gray-300'
            }`}
            onClick={() => handleSectionChange('summary')}>
            <CgHeart className='mt-1 '/> Summary
            </li>





            <li className={`flex flex-row gap-3 p-2  font-custom text-xl font-medium tracking-tighter line-clamp-2 cursor-pointer ${
              selectedSection === 'createnew' ? 'bg-green-600 text-white rounded-xl ' : 'text-gray-300'
            }`}
            onClick={() => handleSectionChange('createnew')}>
            <CgNotes className='mt-1 '/> Create new
            </li>


</ul>

</div>

        </div>




<div className='w-full relative'>

{/* Content of the selected section */}
{selectedSection === 'summary' && 

<>


<EmailSummary />
</>
}



{selectedSection === 'createnew' && 

<>

<div className='relative'>
<CreateEmail />
</div>
</>
}



{selectedSection === 'mytasks' && 

<>
<h1 className='p-4 font-custom text-4xl font-medium tracking-tighter line-clamp-2'>Tasks</h1>

</>
}

</div>


</div>




  )
}
