import { useState } from "react";
import Layout from "../components/Layout";

export default function Estado(){
    const [count, setCount] = useState(1)

    function incrementar(){
        setCount(count + 1)
    }
    function decrementar(){
       count < 1 ? '':  setCount(count - 1)
    }
    return(
        <Layout titulo='component com estado'>
            <button onClick={incrementar}>Mais</button>
            <span>{count}</span>
            <button onClick={decrementar}>Menos</button>
        </Layout>
    )
}