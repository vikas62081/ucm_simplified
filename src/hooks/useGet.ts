import { useState } from "react";
import axiosInstance from "../services/shared/AxiosService";

const useGet = () => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (url: string) => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(url);
      setData(response.data);
      return response.data;
    } catch (error: any) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { fetchData, data, error, loading };
};

export default useGet;
