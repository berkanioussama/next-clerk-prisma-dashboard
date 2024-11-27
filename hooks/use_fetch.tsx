import { handleToast } from "@/lib/handleToast";
import { useState } from "react";

const useFetch = (url: string) => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url, {
        method: "GET",
      })

      if (!response.ok) {
        const errorData = await response.json();
        handleToast(errorData.message, "destructive");
        return;
      }

      const successData = await response.json()

      setData(successData.data)
    } catch {
      handleToast("Client side error", "destructive");
    } finally {
      setIsLoading(false);
    }
  }

  return { data, isLoading, fetchData };
}
 
export default useFetch;