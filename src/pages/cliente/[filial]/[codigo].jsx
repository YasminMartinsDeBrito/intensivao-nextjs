import Layout from "../../../components/Layout";
import {useRouter} from 'next/router'


export default function ClienteId(){
    const router = useRouter()

    
    return(
        <Layout titulo='Cliente por props navegacao dinamica'>
            <div>Codigo: {router.query.codigo}</div>
            <div>Codigo: {router.query.filial}</div>
        </Layout>
    )
}