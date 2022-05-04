import styles from '../styles/Estiloso.module.css'
import Layout from '../components/Layout'

export default function Estiloso(){
    return (
        <Layout titulo='Exemplo css'>
            <div className={styles.roxo}>
                    <h1>Estilo modulo CSS</h1>
            </div>
        </Layout>
    )
}