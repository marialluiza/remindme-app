import Addbirthday from '../../components/Addbirthday';
import Header from '../../components/Header';
import LogoutButton from '../../components/LogoutButton';
import UserLogin from '../user-login';

export default function Home() {

    return (
        <div className="h-[100vh] w-full bg-purple-300" >

            <div>

                <div>
                    <Header user={{ name: 'Malu' }} />
                </div>

                <div className="h-[100vh] w-full bg-gradient-to-t bg-purple-200 flex">

                    <div className="w-full">
                        <div className="flex h-[70vh] mt-10 pl-36 pr-36 justify-center ">

                            <div className="flex flex-col w-full bg-white rounded-[10px] justify-center">
                                <div className=" mt-10 px-14">
                                    <p>Juliana</p>
                                    <div className="h-px bg-slate-300" />
                                    <p>Juliana</p>
                                    <div className="h-px bg-slate-300" />
                                    <p>Juliana</p>
                                    <div className="h-px bg-slate-300 " />
                                    <p>Juliana</p>
                                </div>

                                <Addbirthday />
                                <LogoutButton />
                            </div>
                        </div>
                    </div>

                </div>
                {/* <div className="absolute top-0 left-0 right-0 h-1/2  pointer-events-none"/> */}

            </div>

        </div>
    )
}