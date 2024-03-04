import { Mail } from 'lucide-react';
import { KeyRound } from 'lucide-react';

export default function UserLogin() {

    return (
        <div className=" w-full h-[100vh] bg-purple-300 flex justify-center items-center">

            <div className="w-[80vh] h-[80vh] bg-white w- rounded-md flex flex-col items-center max-w-[640px] ring-1 ring-purple-400" >
                <img
                    className="w-[65vh] h-[35vh] mt-8"
                    src={process.env.PUBLIC_URL + '/logo-completa.png'} alt="Remind Me"
                />

                {/*<form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST > */}
                <form className="w-[60vh] max-w-[640px]" >

                    <div className="absolute pointer-events-none z-10  pl-2 pt-2">
                        <Mail className="h-5 w-5 text-gray-400 " />
                    </div>
                    <div className="w-full">
                        <input
                            // id="email"
                            // name="email"
                            // value={email}
                            // onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            autoComplete="email"
                            // required
                            placeholder="Digite seu email"
                            className="relative block w-full rounded-md border-0 py-1.5 px-9 text-gray-900 ring-1 ring-inset ring-purple-300 placeholder:text-gray-400 focus:ring-yellow-300 sm:text-sm sm:leading-6 outline-none"
                        />
                    </div>

                    <div className="absolute pointer-events-none z-10  pl-2 pt-6">
                        <KeyRound className="h-5 w-5 text-gray-400 " />
                    </div>  
                    <div className="mt-4  w-full">
                        <input
                            // id="password"
                            // name="password"
                            // value={password}
                            // onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            autoComplete="current-password"
                            required
                            placeholder="Digite sua senha"
                            className="relative block w-full rounded-md border-0 py-1.5 px-9 text-gray-900 ring-1 ring-inset ring-purple-300 placeholder:text-gray-400 focus:ring-yellow-300 sm:text-sm sm:leading-6 outline-none"
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center mt-10 rounded-md bg-purple-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>



        </div>
    )
}