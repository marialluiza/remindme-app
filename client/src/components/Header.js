import React, { useState } from 'react';
import { CircleUserRound, AlignLeft, X } from 'lucide-react';
import Sidebarcomp from './Sidebar';

export default function Header({ user }) {

    const [sidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    return (
        <div>
            <div className="flex w-full bg-purple-950 h-[10vh] justify-between items-center">

                {!sidebarVisible && (
                    <div className="absolute px-5 top-10" onClick={toggleSidebar}>
                        <AlignLeft className="h-7 w-7 text-slate-200 cursor-pointer rounded-md hover:bg-purple-400" />
                    </div>
                )}
                {sidebarVisible && (
                    <div className="absolute" onClick={toggleSidebar}>
                        <Sidebarcomp />
                    </div>
                )}

                <div>
                    
                </div>
                <div className="flex justify-center items-center">
                    <h3 className="text-slate-200 font-semibold text-sm">Olá, {user.name}</h3>
                    <div className="flex px-6">
                        {/* <CircleUserRound className="h-8 w-8 text-slate-200 cursor-pointer" /> */}
                        <img src={user.profileImageURL} alt="User Profile" className="h-8 w-8 rounded-full cursor-pointer" />
                    </div>
                </div>

            </div>
        </div>
    )
}
