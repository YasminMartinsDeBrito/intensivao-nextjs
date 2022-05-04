import Cabecalho from "../components/Cabecalho";
import Layout from "../components/Layout";
export default function Exemplo() {

    return (
        <Layout titulo='exemplos de next'>
        <Cabecalho titulo='Fundamentos de Next.js & React' name='yasmin' idade={22} />
        </Layout>
    )
}