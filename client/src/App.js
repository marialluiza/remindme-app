import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import './App.css';
import Home from './pages/home/Home';
import RegisterUser from './pages/register-user/index';

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
        </Routes>
      </Router>
    </div >
  );
}

export default App;