import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import { CanceledError } from "axios";
const useData = (endpoint, requestConfig, deps = []) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        apiClient.get(endpoint, { signal: controller.signal, ...requestConfig })
            .then(res => {
            setData(res.data.results);
            setLoading(false);
        })
            .catch((err) => {
            if (err instanceof CanceledError)
                setError(err.message);
            setLoading(false);
        });
        return () => controller.abort();
    }, deps);
    return ({ data, error, isLoading });
};
export default useData;
