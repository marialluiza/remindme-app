import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import CadastroUsuario from './pages/cadastro-usuario/CadastroUsuario';
import LoginUsuario from './pages/login-usuario/LoginUsuario';
import Container from './pages/Layout';
//import { Toaster } from 'sonner'

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet"/>

function App() {

  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<CadastroUsuario />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<LoginUsuario />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
