import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import Button from './Button';
import Input from './Input';
import Addimage from './Addimage';

export default function Addbirthday() {

    // const handleUploadButtonClick = () => (

    // )

    return (
        <Dialog.Root>
            <div className="flex top-56 p-6 justify-center"> {/* quando clica em um elemnto 'Trigger' ele abre o elemento 'content' */}
                <Dialog.Trigger
                    className="flex justify-center rounded-[10px] bg-white px-3 py-1.5 font-semibold text-sm leading-6 ring-1 ring-purple-400 text-slate-700 shadow-sm  hover:bg-purple-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                >
                    Adicionar aniversariante
                </Dialog.Trigger>
            </div>

            <Dialog.Portal> {/*'Portal' serve pra fazer com que o conteúdo seja "jogado/aberto" no body, pra que ele não fique preso so 'Trigger'*/}
                <Dialog.Overlay className="inset-0 fixed bg-black/50" /> {/*'Overlay' escurece a tela atrás do modal*/} {/*'inset' quando quiser que algo cubra a tela toda*/}
                <Dialog.Content className="fixed flex flex-col left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[540px] w-full h-[70vh] bg-white ring-1 ring-purple-400 rounded-md outline-none justify-center items-center">
                    <div className="flex flex-col max-w-[540px] w-full h-[60vh] p-10 justify-center font-thin">

                        <div className="flex flex-col justify-center items-center">
                            <Addimage />
                            {/* <Button className={"flex justify-center items-center bg-purple-300 w-24 h-6 text-[11px] mt-2"
                            }
                            >Adicionar⠀foto
                            </Button> */}
                        </div>

                        <p className="mt-2">Nome:</p>
                        <Input type="text" className="h-8 px-4" />

                        <p className="mt-3">Data de nascimento:</p>
                        <label>
                            <input type='date' className="bg-white w-full h-8 ring-1 ring-purple-300 rounded-md pl-4 outline-none focus:ring-yellow-200"/>
                        </label>

                        <p className="mt-3 "
                        >
                            Notificação:
                        </p>
                        <select className="w-full rounded-md px-4 py-2 text-gray-900 ring-1 ring-inset ring-purple-300 placeholder:text-gray-400 focus:ring-yellow-300 sm:text-sm sm:leading-6 outline-none">
                            <option value="0">No dia</option>
                            <option value="1">1 dia antes</option>
                            <option value="7">1 semana antes</option>
                            <option value="30">1 mês antes</option>
                            <option value="">1 dia antes e no dia</option>
                        </select>

                        <Button className={"bg-purple-300 items-center justify-center h-8 top-4 text-sm"}
                        >Adicionar aniversariante
                        </Button>

                    </div>
                </Dialog.Content>
            </Dialog.Portal>

        </Dialog.Root>
    )
}
