import {auth} from "../config/firebaseConfig"
import {signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import { useState } from "react";
import Dashboard from '../Dashboard'




export const Auth = () => {

    const [email, setSigninEmail] = useState("");
    const [password, setSigninPassword] = useState("");
    

  




//const signio = async () => {
//await createUserWithEmailAndPassword(auth, email, password);
//};


const signin =(e)=> {
  e.preventDefault();
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential)=> {console.log(userCredential);
  })
  .catch((error) =>{
    console.log(error);
  });
};



//const signI = async () => {
  //try {
  //const user = await createUserWithEmailAndPassword(auth, email, password);
//console.log (user);

  //} catch (error){console.log(error.message)}
  
  //};



return(
<div>

<input
placeholder="Email..."
onChange={(e) => setSigninEmail(e.target.value)}
/>

<input
placeholder="Password..."
type="password"
onChange={(e) => setSigninPassword(e.target.value)}
/>

<button onClick={signin}> Sign In</button>





</div>
)

  };

