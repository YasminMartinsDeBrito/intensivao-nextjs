import Layout from "../components/Layout"

export default function Jsx(){
    const titulo = <h1>Ola eu sou a pagina</h1>
    const a = 1
    const b = 2
    console.log(a * b)

    return(
        <Layout titulo='Entendendo o JSX'>
            <div>
                {titulo}
                <h1>JSX é um conceito central</h1>
                <p>resultado: {a + b}</p>
            </div>
        </Layout>
    )
}