import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import {Auth} from "./Authentication/auth"

import SignIn from "./Authentication/SignIn"

import { AuthContextProvider } from "./context/AuthContext"
import ProtectedRoute from './components/ProtectedRoute';



import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Dashboard from './Dashboard';
import Chat from "./pages/Chat"
import Meeting from "./pages/Meeting"
import Presentation from './pages/Presentation';
import Webvisit from './pages/Webvisit';
import Reminder from './pages/Reminder';
import Chatfull from './pages/Chatfull';
import Chatwrite from './pages/Chatwrite';
import Profile from "./pages/Profile"
import DetailsEdit from './pages/DetailsEdit';
import Resetpassword from './pages/Resetpassword';
import Notes from "./pages/Notes"
import Audience from "./pages/Audience"





function App() {

  
return (

//<div>

//<Auth/>



//</div>

<AuthContextProvider>
    
    <Router>
    <Routes>
    <Route path="/" element={<SignIn/>}/>
      
    <Route path="/Dashboard" element={
    <ProtectedRoute>
    <Dashboard/>
    </ProtectedRoute>
    }/>

    <Route path="/Chat" element={<Chat />} />
    <Route path="/Meeting" element={<Meeting />} />
    <Route path="/Presentation" element={<Presentation />} />
    <Route path="/Reminder" element={<Reminder />} />
    <Route path="/Webvisit" element={<Webvisit />} />
    <Route path="/Chatfull" element={<Chatfull />} />
    <Route path="/Chatwrite" element={<Chatwrite />} />
    <Route path="/Profile" element={<Profile />} />
    <Route path="/DetailsEdit" element={<DetailsEdit />} />
    <Route path="/Resetmypassword" element={<Resetpassword />} />
    <Route path="/Notes" element={<Notes />} />
    <Route path="/Audience" element={<Audience />} />
    
  </Routes>
  </Router>

  </AuthContextProvider>

    
  );
}

export default App;
