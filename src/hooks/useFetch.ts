import { useEffect, useState } from "react";
import type { ApiResponse, EstimateData } from "../types/type";

const useFetch = () => {
  const [data, setData] = useState<ApiResponse<EstimateData> | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("./estimate_detail.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result: ApiResponse<EstimateData> = await response.json();
        setData(result);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, error, loading };
};

export default useFetch;
