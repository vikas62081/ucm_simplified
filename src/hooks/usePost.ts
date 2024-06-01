import { useState } from "react";
import axiosInstance from "../services/shared/AxiosService";

const usePost = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const postData = async (url: string, payload: any) => {
    try {
      setLoading(true);
      const response = await axiosInstance.post(url, payload);
      setData(response.data);
      return response.data;
    } catch (error: any) {
      const msg = error.response?.data?.message || error.message;
      setError(msg);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { postData, data, error, loading };
};

export default usePost;
