import { useState } from "react";

interface CouterProps {
    initialValue?: number;
    maxValue?:number;
    minValue?:number;
}

export const Counter =  ({initialValue= 0, maxValue=10, minValue=0}:CouterProps) =>{
    const [counter, setCounter] = useState<number>(initialValue)
    
    const incrementar = () => setCounter((prev) =>{
        if( prev >= maxValue) return prev;
        return prev + 1  
    } )

    const disminuir = () => setCounter((prev) =>{
        if( prev <= minValue) return prev;
        return prev - 1
    } )
    return (<main>
      <span>Contador : {counter}</span>
      <button onClick={incrementar}>+</button>
      <button onClick={disminuir}>-</button>
    </main>

    );
}