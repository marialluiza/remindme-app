import Addbirthday from '../../components/Addbirthday';
import Header from '../../components/Header';
import TableBirthdays from '../../components/TableBirthdays';

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

                                <h1 className="px-8 mt-6 text-xl font-semibold text-purple-950">Próximos aniversariantes</h1>

                                <TableBirthdays />

                                <Addbirthday />

                            </div>
                        </div>
                    </div>

                </div>
                {/* <div className="absolute top-0 left-0 right-0 h-1/2  pointer-events-none"/> */}

            </div>

        </div>
    )
}

