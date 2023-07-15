import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import {CgNotes , CgHeart, CgCheckO, CgBell, CgUserList, CgArrowLeft, CgTrash } from "react-icons/cg";
import { Link } from "react-router-dom";
import NotesUI from '../components/NotesUI';



const Notes = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);



  const toggleSidebar = () => {
    
    setIsSidebarOpen(!isSidebarOpen);
    setIsVisible(false);
    
  };


  const closeSidebar =() =>{

    setIsSidebarOpen(!isSidebarOpen);
    setIsVisible(true);

  }


  const [selectedSection, setSelectedSection] = useState('notes');

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };










  return (

    <div className="flex "> 


    <div className="grid justify-items-stretch ">
      {/* Hamburger menu */}

      {isVisible ? (

      <button
        className="inline lg:hidden   py-2 px-4  md:py-0  justify-self-start "
        onClick={toggleSidebar}
      >
        <GiHamburgerMenu/>
      </button>
      ):(
        <div>
      <button  className=" lg:hidden justify-self-end "  onClick={closeSidebar}>
        <AiFillCloseCircle />
      </button>
      </div>
      )}




      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? 'block' : 'hidden'
        } lg:block bg-black w-80 lg:min-h-screen rounded-r-lg p-2 `}
      >
        <nav>
          
        <Link to="/Dashboard" >
          <CgArrowLeft className='h-9 w-6 m-1' />
        </Link>


        <p className="pt-1 pl-11  font-custom text-3xl font-medium tracking-tighter line-clamp-2 text-gray-100 ">Quick Links</p>

       
            <hr className='border-white'/>
          <ul>
            
            

           <li className={`flex flex-row gap-3 p-2  font-custom text-xl font-medium tracking-tighter line-clamp-2 cursor-pointer ${
              selectedSection === 'favorites' ? 'bg-green-600 text-white rounded-xl ' : 'text-gray-300'
            }`}
            onClick={() => handleSectionChange('favorites')}>
            <CgHeart className='mt-1 '/> Favorites
            </li>



            <li className={`flex flex-row gap-3 p-2  font-custom text-xl font-medium tracking-tighter line-clamp-2 cursor-pointer ${
              selectedSection === 'notes' ? 'bg-green-600 text-white rounded-xl ' : 'text-gray-300'
            }`}
            onClick={() => handleSectionChange('notes')}>
            <CgNotes className='mt-1 '/> All notes
            </li>


            <li className={`flex flex-row gap-3 p-2  font-custom text-xl font-medium tracking-tighter line-clamp-2 cursor-pointer ${
              selectedSection === 'mytasks' ? 'bg-green-600 text-white rounded-xl ' : 'text-gray-300'
            }`}
            onClick={() => handleSectionChange('mytasks')}>
            <CgCheckO  className='mt-1 '/> Tasks
            </li>



            <li className={`flex flex-row gap-3 p-2  font-custom text-xl font-medium tracking-tighter line-clamp-2 cursor-pointer ${
              selectedSection === 'reminder' ? 'bg-green-600 text-white rounded-xl ' : 'text-gray-300'
            }`}
            onClick={() => handleSectionChange('reminder')}>
            <CgBell  className='mt-1 '/> Reminder
            </li>


          
            <li className={`flex flex-row gap-3 p-2  font-custom text-xl font-medium tracking-tighter line-clamp-2 cursor-pointer ${
              selectedSection === 'shared' ? 'bg-green-600 text-white rounded-xl ' : 'text-gray-300'
            }`}
            onClick={() => handleSectionChange('shared')}>
            <CgUserList  className='mt-1 '/> Shared
            </li>




            <li className={`flex flex-row gap-3 p-2  font-custom text-xl font-medium tracking-tighter line-clamp-2 cursor-pointer ${
              selectedSection === 'deleted' ? 'bg-green-600 text-white rounded-xl ' : 'text-gray-300'
            }`}
            onClick={() => handleSectionChange('deleted')}>
            <CgTrash  className='mt-1 '/> Deleted
            </li>
            
            
            
          </ul>
        </nav>
<hr className='border-white'/>

<h3 className='text-gray-300 font-custom text-xl font-medium tracking-tighter line-clamp-2 text-center mx-5 leading-5'>Want to send a message to the team?</h3>
<div className='text-center mb-10'>
<button className='bg-orange-500 px-4 rounded-md font-custom text-xl font-medium tracking-tighter '>Go</button>
</div>
<hr className='border-white'/>

<div className=' w-full  relative   '>


       <video 
autoPlay
 loop
 muted 
className='object-bottom object-fill w-fit h-fit absolute rounded-lg '>
<source src={"https://player.vimeo.com/external/363482436.sd.mp4?s=bfbcb2411714a76067b77b6b13c0e0f2f139c509&profile_id=164&oauth2_token_id=57447761"} type="video/mp4" />

</video>

<p className='relative justify-center text-white self-center text-center font-custom text-xl font-medium tracking-tighter pt-12'>Powered by August AI</p>

       </div>

          
        
      </div>

      
</div>








<div className='bg-yellow-50 w-full'>

<div className="flex justify-center mt-10 px-10 ">
      <input
        type="text"
        placeholder="Search"
        className="bg-gray-100 rounded-full py-2 px-4 w-96 "
      />
    </div>

<hr/>

{/* Content of the selected section */}
{selectedSection === 'favorites' && 

<>
<h1 className='p-4 font-custom text-4xl font-medium tracking-tighter line-clamp-2'>Favorites Section</h1>

</>
}



{selectedSection === 'notes' && 

<>

{/*<h1 className='p-4 font-custom text-3xl font-medium tracking-tighter line-clamp-2'>All notes</h1>*/}
<NotesUI/>
</>
}



{selectedSection === 'mytasks' && 

<>
<h1 className='p-4 font-custom text-4xl font-medium tracking-tighter line-clamp-2'>Tasks</h1>

</>
}



{selectedSection === 'reminder' && 

<>
<h1 className='p-4 font-custom text-4xl font-medium tracking-tighter line-clamp-2'>Reminder</h1>

</>
}




{selectedSection === 'shared' && 

<>
<h1 className='p-4 font-custom text-4xl font-medium tracking-tighter line-clamp-2'>Shared</h1>

</>
}



{selectedSection === 'deleted' && 

<>
<h1 className='p-4 font-custom text-4xl font-medium tracking-tighter line-clamp-2'>Deleted</h1>

</>
}





</div>


</div>


  );
};

export default Notes;
