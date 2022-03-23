import { useState, useEffect } from "react";
import axios from 'axios';
////////////////////////////
const useFetch = (endpoint) => {
    const [data, setData] = useState([]);

    async function fetchData() {
        const response = await axios.get(endpoint);
        setData(response.data); //Envia lo que esta en response
    }

    useEffect(() => {
        try{
            fetchData();
        } catch (error) {
            console.log(error);
        };
    },[endpoint]); // [] = le pasamos un array vacio para que no quede en bucle y traiga infinitamente los productos
    return data;
};

export default useFetch;