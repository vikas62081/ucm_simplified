import { useState } from "react";
import axiosInstance from "../services/shared/AxiosService";


const useDelete = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const deleteData = async (url: string) => {
    try {
      setLoading(true);
      const response = await axiosInstance.delete(url); // Use axiosInstance.delete for DELETE requests
      setData(response.data);
      return response.data;
    } catch (error: any) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { deleteData, data, error, loading };
};

export default useDelete;
