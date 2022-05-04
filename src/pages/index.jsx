import Navegador from '../components/Navegador'


export default function Home(){
    return(
        <div style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexWrap:'wrap',
            height: '100vh'
        }}>
            <Navegador cor="crimson" texto='estiloso' destino='/estiloso'/>
            <Navegador cor=" yellow" texto='exemplo' destino='/exemplo'/>
            <Navegador  texto='jsx' destino='/jsx'/>
            <Navegador  cor='green' texto='navegacao #01' destino='/navegacao'/>
            <Navegador  cor='purple' texto='clientId #02' destino='/cliente/hellena/12'/>
            <Navegador  cor='pink' texto='componte estado' destino='/estado'/>
        </div>
    )
}