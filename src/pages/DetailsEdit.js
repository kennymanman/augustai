import React, { useState } from 'react'
import {updateProfile } from "firebase/auth";


import { UserAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';





export default function DetailsEdit() {

  const { user } = UserAuth();

    //const [error, setError] = useState('');

    const [displayName, setDisplayName] = useState("");
  
    const [photoURL, setPhotoUrl] = useState("")
  
    const navigate = useNavigate()
    







const updateuserdata = async () => {

  updateProfile(user, {
    displayName, photoURL:"https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/05/Shell_logo.svg-e1659037248878.png?auto=format&q=60&fit=max&w=930"
  }).then(() => {
    alert("Profile Updated")
    console.log(user.displayName)
    
    // Profile updated!
    // ...
  }).catch((error) => {
    console.log("Error.")
    // An error occurred
    // ...
  });

}


return (



<div>

<input
placeholder="Type full name"
type="text"
value={displayName}
onChange={(e) => setDisplayName(e.target.value)}
/>

{/*IMPORTANT This is When you finally figure how to update Profile photo, for now its just the company URL*/}
{/*<input
placeholder="Upload Image"
type="image" alt="user"
onChange={(e) => setPhotoUrl(e.target.value)}
/>
*/}

<button disabled={!displayName} onClick={updateuserdata}> Update Profile</button>

<p>Welcome {user.displayName}  </p>

<img className='rounded-full h-12 w-12 m-9' src={user.photoURL} alt="" />

    </div>
  )
}
