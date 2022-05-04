export default function Cabecalho(props){

    return(
        <header>
            
            <h1>{props.titulo}</h1>
            <h3>{props.name}</h3>
            <strong>{props.idade}</strong>
       
        </header>
    )
}