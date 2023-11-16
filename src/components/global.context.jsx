import { createContext, useContext, useEffect, useReducer, useState } from "react";

export const ContextGlobal = createContext(undefined);

//Constantes
//const URL_BASE = 'http://52.201.124.42:8001'
//const URL_BASE = 'http://localhost:8080'
//const URL_BASE = 'http://35.173.235.150:8001'
const URL_BASE = 'http://174.129.92.139:8001'
const initStateApi = []

const apiReducer = (state, action) =>{
    switch(action.type){
    case 'GET_API':
    return action.payload
    default:
        throw new Error()
    }
}

export const ContextProvider = ({ children }) => {



const [apiState, dispatchApi] = useReducer(apiReducer , initStateApi)


const [arr, setArr] = useState([]);
let existArr =  localStorage.getItem("arr") ? true :
localStorage.setItem("arr", JSON.stringify(arr))

useEffect(() => {
  const data = JSON.parse(existArr);
  setArr(data);
}, [existArr]);



const url = URL_BASE+'/api/v1/products';

  useEffect(() => {
      fetch(url)
      .then(res => res.json())
      .then(data => {
        let desordenados = data.content.sort(function() { return Math.random() - 0.5 })
        //let desordenados = data.sort(function() { return Math.random() - 0.5 })
        dispatchApi({type : 'GET_API', payload: desordenados})
      })
      
  }, [])


return (
  <ContextGlobal.Provider value={{apiState, arr, setArr}}>
    {children}
  </ContextGlobal.Provider>
);
};

export default ContextProvider;

export const useGlobalContext = () => useContext(ContextGlobal)