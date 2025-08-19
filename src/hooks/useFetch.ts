import { useState, useRef, useEffect } from "react";

export function useFetch(){
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState();

    const controllerRef = useRef<AbortController|null>(null);
    const TimeOutRef = useRef<number|null>(null);

    useEffect(()=>{
        fetchData()
        // return cuando el componente se desmonta
        return () => cancelRequest();
    },[])

    const fetchData = () =>{
        controllerRef.current = new AbortController()
        const signal = controllerRef.current.signal;
        setLoading(true)
        setError(null)
        TimeOutRef.current = setTimeout(()=>{
            fetch("http://localhost:3000/api/libro",{signal})
            .then(response => response.json())
            .then(data => setData(data))
            .catch((error) => {setError(error.message)})
            .finally(()=>setLoading(false))
        }, 2000)

    }

    const cancelRequest = () =>{
        if (controllerRef.current) {
                controllerRef.current.abort();
        }
        if(TimeOutRef.current !== null) clearTimeout(TimeOutRef.current);
        setLoading(false)
    }

    return {cancelRequest, error, loading, data,fetchData}

}