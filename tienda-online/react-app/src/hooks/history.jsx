import { useEffect, useState } from "react"

export const useHistory = ()=>{
    const formatHistory = {
        products:[],
        category:[],
        search:[]
    }

    const [history,setHistory] = useState(formatHistory);

    const getHistory = ()=>{
        try{

            let tempLocalStorage = localStorage.getItem("HISTORY");

            return JSON.parse(tempLocalStorage);

        }catch(err){

        }
    }

    const addHistory = ({item,type}) => {

        if(type){

            
            let searchItem = history[type].find(item_object => item_object.id == item.id);

            searchItem ?console.log("Ya está en el historial")
            :history[type].push(item);
            
            localStorage.setItem("HISTORY",JSON.stringify(history));

        }else{
            throw new Error("is need type item");
        }

    }

    useEffect(()=>{
        setHistory(getHistory() || formatHistory)
    },[])
    

    return {history,setHistory,getHistory,addHistory}
} 