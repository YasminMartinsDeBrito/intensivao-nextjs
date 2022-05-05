import { useState } from 'react'
import Layout from '../components/Layout'
export default function Integracao(){

    const [client, setClient] = useState({})
    const [codigo, setCodigo] = useState(1)

    async function obterClient(){
        // asincrono
        const res = await fetch(`http://localhost:3000/api/clientes/${codigo}`)
        const dados = await res.json()
        setClient(dados)

        // fetch normal
        // fetch(`http://localhost:3000/api/clientes/${codigo}`)
        //     .then(resp => resp.json())
        //     .then(dados =>setClient(dados))
    }

    return(

        <Layout>
            <div>
            <input type="number"  value={codigo}
            onChange={(event) => setCodigo(event.target.value)}/>
            <button onClick={obterClient}>Obter client</button>
            </div>
            <ul>
                <li>codigo: {client.id}</li>
                <li>nome: {client.nome}</li>
                <li>email: {client.email}</li>
            </ul>
        </Layout>
    )
}