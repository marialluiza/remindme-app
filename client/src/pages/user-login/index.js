import { useState } from 'react';
import { Mail } from 'lucide-react';
import { KeyRound } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function UserLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Enviar credenciais para o backend
            const response = await fetch('http://localhost:8080/usuarios/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                // Se a resposta do backend não estiver ok, lançar um erro
                throw new Error('Usuário ou senha incorretos');
            }

            console.log('Login bem-sucedido');
            // Redirecionar para a página desejada após o login
            setIsLoggedIn(true);
            localStorage.setItem('isLoggedIn', 'true');

        } catch (error) {
            console.error('Erro de login:', error.message);
            setLoginError('Usuário ou senha incorretos');
        }
    };

    if (isLoggedIn) {
        window.location.href = '/home';
    }

    return (
        <div className=" w-full h-[100vh] bg-purple-300 flex justify-center items-center">

            <div className="w-[80vh] h-[80vh] bg-white w- rounded-md flex flex-col items-center max-w-[640px] ring-1 ring-purple-400" >
                <img
                    className="w-[65vh] h-[35vh] mt-8"
                    src={process.env.PUBLIC_URL + '/logo-completa.png'} alt="Remind Me"
                />

                {/*<form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST > */}
                <form onSubmit={handleSubmit} className="w-[60vh] max-w-[640px]" >

                    <div className="absolute pointer-events-none z-10  pl-2 pt-2">
                        <Mail className="h-5 w-5 text-gray-400 " />
                    </div>
                    <div className="w-full">
                        <input
                            id="username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            type="text"
                            autoComplete="text"
                            required
                            placeholder="Digite seu email"
                            className="relative block w-full rounded-md border-0 py-1.5 px-9 text-gray-900 ring-1 ring-inset ring-purple-300 placeholder:text-gray-400 focus:ring-yellow-300 sm:text-sm sm:leading-6 outline-none"
                        />
                    </div>

                    <div className="absolute pointer-events-none z-10  pl-2 pt-6">
                        <KeyRound className="h-5 w-5 text-gray-400 " />
                    </div>
                    <div className="mt-4  w-full">
                        <input
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            autoComplete="current-password"
                            required
                            placeholder="Digite sua senha"
                            className="relative block w-full rounded-md border-0 py-1.5 px-9 text-gray-900 ring-1 ring-inset ring-purple-300 placeholder:text-gray-400 focus:ring-yellow-300 sm:text-sm sm:leading-6 outline-none"
                        />
                    </div>

                    <p className="w-max mt-4 text-center text-sm text-gray-500">
                        Ainda não é cadastrado?{' '}
                        <Link to="/" className="font-semibold text-sm leading-6 text-purple-600 hover:text-purple-500">
                            Cadastre-se
                        </Link>
                    </p>


                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center mt-10 rounded-md bg-purple-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Login
                        </button>
                        {loginError && <p>{loginError}</p>}

                    </div>
                </form>
            </div>
        </div>
    )
}