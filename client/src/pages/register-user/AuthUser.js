import React, { useState } from 'react';

import { UserRound } from 'lucide-react'; 
import { Mail } from 'lucide-react';
import { KeyRound } from 'lucide-react';
//import { toast } from 'sonner'; 

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function AuthUser() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const userRegister = await fetch('http://localhost:8080/salvar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            });

            if (userRegister.ok) {
                alert('Usuário cadastrado com sucesso!');

                //toast.success('Usuário cadastrado com sucesso!')


                // Limpar os campos do formulário após o cadastro
                setName('');
                setEmail('');
                setPassword('');

            } else {
                alert('Ocorreu um erro ao cadastrar o usuário.');
            }
        } catch (error) {
            console.error('Erro ao enviar requisição:', error);
            alert('Ocorreu um erro ao cadastrar o usuário.');
        }
    };

    return (
        <>
            {/*

            This example requires updating your template:
  
            ```
            <html class="h-full bg-white">
            <body class="h-full">
            ```
            */}
            <div className="flex flex-1 justify-center ">

                <div className="bg-purple-300 flex flex-col text-center px-6 h-[100vh] w-[90vh]">
                    <p className="text-slate-800 mt-48 text-sm"> 
                        NUNCA DEIXE O CARINHO PASSAR DESAPERCEBIDO COM
                    </p>

                    <img 
                        className=""
                        src={process.env.PUBLIC_URL + '/name-logo.png'} alt="Remind Me"
                        />
                        
                    <p className="mt-48 text-sm"> Terms of Use | Browser and Display Compatibility </p>
                    <p className="text-sm"> Copyright © 2023 remind.com.br </p>
                    <p className="text-sm"> Entry to this site is restricted to employees and affiliates. </p>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm p-6">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <img
                            className="mx-auto h-28 w-auto"
                            src={process.env.PUBLIC_URL + '/logo.png'} alt="Remind Me logo"
                        />
                        <h2 className="mt-6 mb-6 text-center text-2xl font-medium leading-9 tracking-tight text-slate-700">
                            Cadastre-se
                        </h2>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST ">
                        <div>
                            {/* <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                name
                            </label> */}
                            <div>
                                <div className="absolute pointer-events-none z-10  pl-2 pt-2">
                                    <UserRound className="h-5 w-5 text-gray-400 " />
                                </div>

          This example requires updating your template:
  
          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
        */}
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Cadastre-se
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                Nome
                            </label>
                            <div className="mt-2">

                                <input
                                    id="name"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    type="text"
                                    autoComplete="name"
                                    required

                                    placeholder="Digite seu name"
                                    className="relative block w-full rounded-md border-0 py-1.5 px-9 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-yellow-300 sm:text-sm sm:leading-6 outline-none"
                                /> 

                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />

                            </div>
                        </div>

                        <div>

                            {/* <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email
                            </label> */}
                                <div className="absolute pointer-events-none z-10  pl-2 pt-2">
                                    <Mail className="h-5 w-5 text-gray-400 " />
                                </div>

                            <div className="mt-4">
=======
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email
                            </label>
                            <div className="mt-2">

                                <input
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    autoComplete="email"
                                    required

                                    placeholder="Digite seu email"
                                    className="relative block w-full rounded-md border-0 py-1.5 px-9 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-yellow-300 sm:text-sm sm:leading-6 outline-none"

                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                                />
                            </div>
                        </div>

                        <div>

                            {/* <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    password
                                </label> 
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Esqueceu a password?
                                    </a>
                                </div>
                            </div> */}
                            <div className="absolute pointer-events-none z-10  pl-2 pt-2">
                                <KeyRound className="h-5 w-5 text-gray-400 " />
                            </div>    

                            <div className="mt-4">

                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Senha
                                </label>
                                {/* <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Esqueceu a password?
                                    </a>
                                </div> */}
                            </div>
                            <div className="mt-2">

                                <input
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    autoComplete="current-password"
                                    required

                                    placeholder="Digite sua password"
                                    className="relative block w-full rounded-md border-0 py-1.5 px-9 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-yellow-300 sm:text-sm sm:leading-6 outline-none"

                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                                />
                            </div>
                        </div>

                        {/* <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Digite sua password novamente
                                </label>

                                    <div className="text-sm">

                                {/* <div className="text-sm">

                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Esqueceu a password?
                                    </a>
                                </div> 
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>*/}

                        <div>
                            <button
                                type="submit"

                                className="flex w-full justify-center mt-6 rounded-md bg-purple-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Cadastrar

                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in

                            </button>
                        </div>
                    </form>


                    <p className="w-max mt-10 text-center text-sm text-gray-500">
                        Já é cadastrado?{' '}
                        <a href="" className="font-semibold leading-6 text-purple-600 hover:text-purple-500">

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Já é cadastrado?{' '}
                        <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">

                            Faça login na sua conta RemindMe
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}
