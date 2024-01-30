import {useState,useEffect} from 'react'
import axios from 'axios';
// import {REACT_APP_KEY} from '@env';

// const rapidApikey=REACT_APP_KEY;

const useFetch = (endpoint,query) => {

    const [data,setData]=useState([]);
    const [isLoading,setisLoading]=useState(false);
    const [error,setError]=useState(null)
    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key':  '0a8a203c9amsh44a118dabecfd92p159a6djsn086d69ba0e8b',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
            },
        params: {...query},
      };

      const fetchData=async()=>{
        setisLoading(true);
        try{
            const response=await axios.request
            (options);
            setData(response.data.data);
            setisLoading(false)
        }catch(error){
            setError(error);
            alert('There is an error')
        }finally{
            setisLoading(false)
        }
      }

    useEffect(()=>{
        fetchData();
    },[]);

    const refetch=()=>{
        setisLoading(true);
        fetchData();
    }
      return {data,isLoading,error,refetch}
}
export default useFetch;