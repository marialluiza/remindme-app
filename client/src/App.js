import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import './App.css';
import Home from './pages/home/Home';
import RegisterUser from './pages/register-user/index';
import UserLogin from './pages/user-login';
//import { Toaster } from 'sonner'

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <nav>
            <Link to="/">Cadastre-se</Link>
            <Link to="/home">Home</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<RegisterUser />} />
          <Route path="/home" element={<Home />} />
          <Route path="/user-login" element={<UserLogin />} />
        </Routes>
      </Router>
    </div >
  );
}

export default App;