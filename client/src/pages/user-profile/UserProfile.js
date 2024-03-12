import Addimage from "../../components/Addimage";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";

export default function UserProfile() {
    
    return (

        <>
            <div>
            <Header user={{ name: 'Malu' }} />
            </div>

            <div className="flex justify-center items-center font-thin">
                <div className="flex flex-col h-[80vh] w-[90vh] justify-center items-center mt-4 rounded-md ring-2 ring-purple-200">

                    <div className="flex">
                        <div className="flex flex-col justify-center px-10">
                            <h1 className="font-bold">Maria Luiza Gonçalves Pereira</h1>
                            <p className="text-sm">Por aqui desde outubro de 2023</p>
                            <p className="text-sm">Aniversário: 13/03/2003</p>
                        </div>

                        <div className="flex flex-col justify-center items-center px-12">
                            <Addimage />
                            <Button className={"flex justify-center items-center bg-purple-300 w-24 h-6 text-[11px] mt-1"
                            }
                            >Adicionar⠀foto
                            </Button>
                        </div>
                    </div>

                    <div className="max-w-[450px] w-full">
                        <div className="flex justify-center text-sm items-baseline mt-4 gap-2">
                            <p className="mt-3">Nome</p>
                            <Input type="text" className={"bg-white w-full h-8 ring-1 ring-purple-300 rounded-md pl-4 outline-none focus:ring-yellow-200"} />
                        </div>
                        <div className="flex justify-center text-sm items-baseline mt-4 gap-2">
                            <p className="mt-3">Email</p>
                            <Input type="email" className={"bg-white w-full h-8 ring-1 ring-purple-300 rounded-md pl-4 outline-none focus:ring-yellow-200"} />
                        </div>
                        <div className="flex justify-center text-sm items-baseline mt-4 gap-4">
                            <p className="mt-3">Data de nascimento</p>
                            <input type='date' className="bg-white w-[309px] h-8 ring-1 ring-purple-300 rounded-md pl-4 outline-none focus:ring-yellow-200" />
                        </div>

                        <div className="flex justify-end">
                            <Button className={"bg-purple-300 w-[310px] h-8 text-sm "}>Salvar alterações</Button>
                        </div>
                    </div>
                </div>



            </div>
        </>
    )
}