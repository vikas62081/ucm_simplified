import { useState } from "react";
import axiosInstance from "../services/shared/AxiosService";

const usePut = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const putData = async (url: string, payload: any) => {
    try {
      setLoading(true);
      const response = await axiosInstance.put(url, payload); 
      setData(response.data);
      return response.data;
    } catch (error: any) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { putData, data, error, loading };
};

export default usePut;
