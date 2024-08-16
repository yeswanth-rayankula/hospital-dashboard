import React, { createContext, useState,useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { toast } from "react-toastify";
import axios from "axios";

export const Context = createContext({ isAuthenticated: false });

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [admin, setAdmin] = useState({});
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    if(isAuthenticated)
      {
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/v1/user/doctors`
         
        );
        console.log("hi");
        console.log(data);
        setDoctors(data.doctors);
      } catch (error) {
        toast.error(error.response.data.message);
      }
      
    };
    fetchDoctors();
  }
  },[isAuthenticated]);
  return (
    <Context.Provider
      value={{ isAuthenticated, setIsAuthenticated, admin, setAdmin,doctors,setDoctors }}
    >
      <App />
    </Context.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
