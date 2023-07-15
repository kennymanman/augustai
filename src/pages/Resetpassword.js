import React, { useState } from 'react';
import {auth} from "../config/firebaseConfig"

import {sendPasswordResetEmail} from "firebase/auth";


export default function Resetpassword() {


    const [email, setEmail] = useState("")
    const [error, setError] = useState('');


    const Reset = async () => {

        sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    // ..
  })
  .catch((error) => {

    console.log("Reset Activated.")
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

}




  return (
    <div>
        <h1>Reset your password</h1>

<input
placeholder="Email..."
onChange={(e) => setEmail(e.target.value)}
/>


<button onClick={Reset}> Reset Password</button>

</div>

  )
}
