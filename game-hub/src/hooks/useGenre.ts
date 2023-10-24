import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

interface Genre{
    id: number;
    name : string;   
}

interface FetchGenresResponse{
    count : number;
    results : Genre[];
}

const useGenre = ()=>{
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState([]);
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      const controler = new AbortController();
      setLoading(true);
      apiClient
        .get<FetchGenresResponse>("/genres", { signal: controler.signal })
        .then((res) => {
          setGenres(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });
  
      return () => controler.abort();
    }, []);
    return { genres, error, isLoading };
}

export default useGenre;