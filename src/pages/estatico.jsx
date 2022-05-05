import Layout from "../components/Layout";

export async function getStaticProps(){
    return{
        props: {
            numero: Math.random()
        }
    
    }
}
export default function Estatico(props){
    return(
        <Layout titulo="conteudo gerado">
            <div>{props.numero}x</div>
        </Layout>
    )
}