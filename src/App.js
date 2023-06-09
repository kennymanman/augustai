
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Dashboard from './Dashboard';
import Chat from "./pages/Chat"
import Meeting from "./pages/Meeting"
import Presentation from './pages/Presentation';
import Webvisit from './pages/Webvisit';
import Reminder from './pages/Reminder';
import Chatfull from './pages/Chatfull';


function App() {

  

  
  return (
    <Router>
    
    <Routes>
      
    <Route path="/" element={<Dashboard/>}/>
    <Route path="/Chat" element={<Chat />} />
    <Route path="/Meeting" element={<Meeting />} />
    <Route path="/Presentation" element={<Presentation />} />
    <Route path="/Reminder" element={<Reminder />} />
    <Route path="/Webvisit" element={<Webvisit />} />
    <Route path="/Chatfull" element={<Chatfull />} />
  
    </Routes>
    
    </Router>

    
  );
}

export default App;
