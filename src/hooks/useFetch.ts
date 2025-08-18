import { useState, useRef, useEffect } from "react";

export function useFetch(){
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState();

    const controllerRef = useRef<AbortController|null>(null);
    const TimeOutRef = useRef<number|null>(null);


}