import React from 'react'
import { useNavigate } from 'react-router-dom';
import {auth} from "../config/firebaseConfig"
import { UserAuth } from '../context/AuthContext';
import {Link} from 'react-router-dom'
import MySpaceEditor from '../components/MySpaceEditor';
import Editor from "../components/Editor"


export default function CreateUser() {





    const { user, logout } = UserAuth();
    const navigate = useNavigate();
  
    
      const handleLogout = async () => {
        try {
          await logout();
          navigate('/');
          console.log('You are logged out')
        } catch (e) {
          console.log(e.message);
        }
      };


  return (
    


<div className='bg-gradient-to-r from-black via-black to-black  h-screen p-3'>
        
<div className='flex justify-between pt-2'>
<h1 className='text-white font-custom text-2xl font-base tracking-tighter'>August AI.</h1>

<button onClick={handleLogout}>
<h1 className='text-white font-custom text-2xl font-base tracking-tighter'>LogOut</h1>
</button>

</div>


 <hr className='border-2 border-white'/> 

<div className='flex justify-between'>
 <h2 className='font-custom tracking-tighter text-4xl my-1 text-white'>Collaboration</h2>




 <div className="flex -space-x-1 overflow-hidden w-fit py-2 px-2 group-hover:scale-100">

 <img
          className="inline-block h-9 w-9 rounded-full ring-2 ring-lime-300"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM0AAAD2CAMAAABC3/M1AAAAM1BMVEX///8AAADR0dHKyspLS0t6enpubm5kZGTv7+/e3t7X19fa2try8vL19fU/Pz9zc3Pl5eWDodvdAAAA9ElEQVR4nO3aSxKCMBRFQUUFIf72v1oLdQGxhMqV6h6/wTuTZJDsdgAAAAAAAAAAAAAAAAAAAAC/u5xn19ZrLOS2n91br7GQ46vm1HqNhajJpSaXmlxqcqnJpSaXmlxqcqnJpSaXmlxqcqnJpSaXmlxqcqnJpSbXf9SMXZXp/cI+THXjY6OaYb+GoVFNv0pNr0bNpmu2dQqUQ5Xuc0J3deOlUU2t/7g9a6nJpSaXmlxqcqnJpSaXmlxqcqnJpSaXmlxqcqnJpSaXmlxqcqnJpSbXtmreL+ytfjUsbZxKKdOj9RoAAAAAAAAAAAAAAAAAAADwhSceAQktTzjFmAAAAABJRU5ErkJggg=="
          alt=""
        />




        <img
          className="inline-block h-9 w-9 rounded-full ring-2 ring-white "
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <img
          className="inline-block h-9 w-9 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <img
          className="inline-block h-9 w-9 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
          alt=""
        />
        <img
          className="inline-block h-9 w-9 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </div>

</div>
<hr className='border-white border-2'/> 



<div className='grid grid-cols-5 gap-2'>

  <div className='col-span-4 bg-white relative'>


{/*
<div className='bg-blue-100 rounded-md flex p-2' >
  
  <button className='bg-lime-300 text-custom px-2 tracking-tighter text-lg rounded-xl font-base w-44 border-2 border-black' >Create New</button>
  
  </div>
*/}

  <Editor className="" />

  </div>





<div className='col-span-1 bg-white h-96 rounded-md p-1 gap-1'>

<h2 className='font-custom tracking-tighter text-3xl my-1 text-black'>AI tools</h2>

<div className='grid grid-cols-2 gap-1 '>
<div className='bg-orange-400 h-40 rounded-lg col-span-1'></div>

<div className='bg-green-400 h-40 rounded-lg col-span-1'></div>

</div>



<div className='grid grid-cols-2 mt-2 gap-1'>
<div className='bg-blue-400 h-40 rounded-lg col-span-1'></div>

<div className='bg-yellow-400 h-40 rounded-lg col-span-1'></div>

</div>


</div>




</div>












 </div>



  )

}
