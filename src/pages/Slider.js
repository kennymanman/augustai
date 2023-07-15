import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import {CgNotes , CgHeart, CgCheckO, CgBell, CgUserList, CgArrowLeft } from "react-icons/cg";
import { Link } from "react-router-dom";



const Slider = () => {
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
        } lg:block bg-gray-400 w-80 lg:min-h-screen rounded-r-lg `}
      >
        <nav>
          
        <Link to="/Dashboard" >
          <CgArrowLeft className='h-9 w-6 m-3' />
        </Link>


        <p className="pt-1 pl-11  font-custom text-2xl font-medium tracking-tighter line-clamp-2 text-black ">Quick Links</p>
            <hr/>
          <ul>
            
            

           <li className={`flex flex-row gap-3 p-2 m-2 font-custom text-xl font-medium tracking-tighter line-clamp-2 cursor-pointer ${
              selectedSection === 'favorites' ? 'bg-blue-500 text-white rounded-xl ' : ''
            }`}
            onClick={() => handleSectionChange('favorites')}>
            <CgHeart className='mt-1 '/> Favorites
            </li>



            <li className={`flex flex-row gap-3 p-2 m-2 font-custom text-xl font-medium tracking-tighter line-clamp-2 cursor-pointer ${
              selectedSection === 'notes' ? 'bg-blue-500 text-white rounded-full ' : ''
            }`}
            onClick={() => handleSectionChange('notes')}>
            <CgNotes className='mt-1 '/> All notes
            </li>


            <li className={`flex flex-row gap-3 p-2 m-2 font-custom text-xl font-medium tracking-tighter line-clamp-2 cursor-pointer ${
              selectedSection === 'mytasks' ? 'bg-blue-500 text-white rounded-full ' : ''
            }`}
            onClick={() => handleSectionChange('mytasks')}>
            <CgCheckO  className='mt-1 '/> Tasks
            </li>



            <li className={`flex flex-row gap-3 p-2 m-2 font-custom text-xl font-medium tracking-tighter line-clamp-2 cursor-pointer ${
              selectedSection === 'reminder' ? 'bg-blue-500 text-white rounded-full ' : ''
            }`}
            onClick={() => handleSectionChange('reminder')}>
            <CgBell  className='mt-1 '/> Reminder
            </li>


          
            <li className={`flex flex-row gap-3 p-2 m-2 font-custom text-xl font-medium tracking-tighter line-clamp-2 cursor-pointer ${
              selectedSection === 'shared' ? 'bg-blue-500 text-white rounded-full ' : ''
            }`}
            onClick={() => handleSectionChange('shared')}>
            <CgUserList  className='mt-1 '/> Shared
            </li>
            
            
            
          </ul>
        </nav>
      </div>
</div>








<div className=''>
{/* Content of the selected section */}
{selectedSection === 'favorites' && 

<>
<h1>Favorites Section</h1>

</>
}



{selectedSection === 'notes' && 

<>
<h1>All notes</h1>

</>
}



{selectedSection === 'mytasks' && 

<>
<h1>Tasks</h1>

</>
}



{selectedSection === 'reminder' && 

<>
<h1>Reminder</h1>

</>
}




{selectedSection === 'shared' && 

<>
<h1>Shared</h1>

</>
}

</div>


</div>


  );
};

export default Slider;