import React, { useState } from 'react';
import { X, Home, CircleUserRound, Cake, BadgeHelp, LogOut } from 'lucide-react';
import BotaoSidebar from './BotaoSidebar';

export default function Sidebarcomp() {

    const [sidebarVisible, setSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    return (
        <div className="flex h-screen fixed top-0 bottom-0 z-50 ">

            {sidebarVisible && (
                <div className="absolute left-52 top-6 z-10" onClick={toggleSidebar}>
                    <X className="h-7 w-7 text-slate-200  cursor-pointer rounded-md hover:bg-purple-400 " />
                </div>
            )}

            {sidebarVisible && (
                <div className=" bg-purple-900 h[100vh] w-[40vh]">
                    <img
                        className="mt-12"
                        src={process.env.PUBLIC_URL + '/logo.svg'} alt="Remind Me"
                    />
                    <div className="h-px bg-slate-500 mt-4" />
                    <div className=" p-3">

                        <div className="absolute flex mt-5 px-4">
                            <Home className="h-6 w-6 text-slate-200 cursor-pointer z-10" />
                        </div>
                        <BotaoSidebar href={"/home"}>Página inicial</BotaoSidebar>
                        
                        <div className="absolute flex mt-5 px-4">
                            <Cake className="h-6 w-6 text-slate-200 cursor-pointer z-10" />
                        </div>
                        <BotaoSidebar href={"/birthdays"}>Aniversariantes</BotaoSidebar>

                        <div className="absolute flex mt-5 px-4">
                            <CircleUserRound className="h-6 w-6 text-slate-200 cursor-pointer z-10" />
                        </div>
                        <BotaoSidebar href={"/user-profile"}>Perfil</BotaoSidebar>


                        <div className="absolute flex mt-5 px-4">
                            <BadgeHelp className="h-6 w-6 text-slate-200 cursor-pointer z-10" />
                        </div>
                        <BotaoSidebar  href={"/help"}>Ajuda</BotaoSidebar>

                        <div className="h-px bg-slate-500 mt-24" />

                        <div className="absolute flex mt-5 px-4">
                            <LogOut className="h-6 w-6 text-slate-200 cursor-pointer z-10" />
                        </div>
                        <BotaoSidebar>Sair</BotaoSidebar>


                    </div>
                </div>
            )}
        </div>
    )
}
