import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const DataContext = createContext(null);

const DataContextProvider = ({ children }) => {
  const [data, setData] = useState({
    projects: "",
    stacks: "",
    languages: "",
    partners: "",
    testimonials: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const apiEndpoint = import.meta.env.DEV
    ? "http://localhost:8080/api"
    : import.meta.env.VITE_API_ENDPOINT;

  const fetchData = async (endpoint) => {
    const dataKey = endpoint.split("/")[0];

    try {
      const response = await axios.get(`${apiEndpoint}/${endpoint}`);
      if (response.status === 200) {
        setData((prevData) => ({ ...prevData, [dataKey]: response.data.data }));
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.error(`Error retrieving ${endpoint}:`, error);
      setError(error.message);
    }
  };

  useEffect(() => {
    const endpoints = [
      "projects/list",
      "stacks/list",
      "languages/list",
      "partners/list",
      "testimonials/list",
    ];
    Promise.all(endpoints.map((endpoint) => fetchData(endpoint)))
      .finally(() => setLoading(false));
  }, [apiEndpoint]);

  return (
    <DataContext.Provider value={{ data, error, loading, setLoading }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);

export default DataContextProvider;
