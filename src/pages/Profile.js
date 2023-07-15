import React from 'react'
import { UserAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';




export default function Profile() {

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
    <div>Profile


<h1>Hello {user.displayName}</h1>

<Link to="/DetailsEdit"> <p>Edit Profile Name</p>    </Link>

<Link to="/Resetmypassword"> <p>Reset your password</p>    </Link>



<button onClick={handleLogout} className='border px-6 py-2 my-4'>
        Logout
      </button>
    </div>
  )
}
