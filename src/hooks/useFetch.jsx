import { useCallback, useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    console.log("useFetch");

    const fetchData = useCallback(async () => {
        //console.log("useCallback");
        setLoading(true);
        try {
            //console.log("useCallback try");
            const res = await fetch(url);
            if (!res.ok) throw new Error("Error al consumir la API");
            const data = await res.json();
            setData(data);
        } catch (error) {
            setError(error.message);
            setData([]);
        } finally {
            console.log("finally");
        }
    }, []);

    useEffect(() => {
        console.log("useEffect");
        fetchData();
    }, []);

    return { data, loading, error };
};
