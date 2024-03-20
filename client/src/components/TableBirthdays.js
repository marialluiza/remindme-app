export default function TableBirthdays() {
    const dados = [
        { id: 1, nome: 'João', dataNascimento: '01/01/1990', foto: process.env.PUBLIC_URL + '/logo.svg' },
        { id: 2, nome: 'Maria', dataNascimento: '15/05/1985', foto: 'https://picsum.photos/50' },
        { id: 3, nome: 'Pedro', dataNascimento: '10/10/2000', foto: 'https://picsum.photos/200' },
        { id: 4, nome: 'Carlos', dataNascimento: '17/07/1992', foto: 'https://picsum.photos/200' },
        { id: 5, nome: 'Juliana', dataNascimento: '30/11/1980', foto: 'https://picsum.photos/200' },
        { id: 6, nome: 'Fernando', dataNascimento: '02/06/1975', foto: 'https://picsum.photos/200' },
        { id: 7, nome: 'Renata', dataNascimento: '23/12/1983', foto: 'https://picsum.photos/200' },
        { id: 8, nome: 'Ricardo', dataNascimento: '08/04/1990', foto: 'https://picsum.photos/200' },
        { id: 9, nome: 'Aline', dataNascimento: '14/10/1978', foto: 'https://picsum.photos/200' },
        { id: 10, nome: 'Rozana', dataNascimento: '04/02/1972', foto: 'https://picsum.photos/200' }

    ];

    return (
        <div className="mt-6 overflow-hidden ">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <table className="min-w-full ">
                    <thead className="bg-white border-b-2 ">
                        <tr>
                            <th scope="col" className="text-sm font-semibold text-purple-900 py-4 text-left">

                            </th>
                            <th scope="col" className="text-sm font-semibold text-purple-900 py-4 text-left">
                                Nome
                            </th>
                            <th scope="col" className="text-sm font-semibold text-purple-900 px-6 py-4 text-right">
                                Data de nascimento
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {dados.map((item) => (
                            <tr key={item.id} className="bg-white border-b">
                                <td className="pl-2 left-6 py-4 text-left">
                                    <img src={item.foto} alt={item.nome} className="h-10 w-10 rounded-full" />
                                </td>
                                <td className="pr-16 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {item.nome}
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 text-right">
                                    {item.dataNascimento}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
