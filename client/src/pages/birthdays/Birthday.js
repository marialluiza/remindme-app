import { Search } from 'lucide-react';
import Header from '../../components/Header';

export default function Birthdays() {

    return (

        <>

            <div className="w-full h-full">
                <div>
                    <Header user={{ name: 'Malu' }} />
                </div>

                <div className="justify-center top-10 pl-36 pr-36">

                    <div className="absolute flex mt-2.5 pl-4 cursor-pointer">
                        <Search className=" h-5 w-5 text-slate-600 z-10" />
                    </div>
                    <input
                        type="text"
                        placeholder='Buscar aniversariante...'
                        className="relative block w-full mt-12 rounded-[10px] p-2 bg-white px-14 ring-1 ring-purple-200 outline-none focus:ring-yellow-300"
                    />
                </div>

                <div className="flex w-full h-full justify-center items-center">
                    <div className="w-full h-[75vh] bg-slate-500">
                        

                    </div>
                </div>
            </div>
        </>
    )
}