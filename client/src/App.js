import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import './App.css';
import Home from './pages/home/Home';
import RegisterUser from './pages/register-user/index';
import UserLogin from './pages/user-login';
import Birthday from './pages/birthdays/Birthday';
import { Toaster} from 'sonner'
import UserProfile from './pages/user-profile/UserProfile';
import Help from './pages/help/Help';

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />

function App() {
  return (
    <div className="App">
      <Router>
        <Toaster richColors position="top-right" />
        <Routes>
          <Route path="/" element={<RegisterUser />} /> 
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/birthdays" element={<Birthday/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/user-profile" element={<UserProfile/>} />
          <Route path="/help" element={<Help/>} />
        </Routes>
      </Router>
    </div >
  );
}

export default App;