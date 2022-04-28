import React,{createContext,useState,useEffect} from 'react';
import axios from 'axios';


export const MyContext = createContext();

export const MyContextProvider = (props) => {
  const [categ, setCateg] = useState([]);
  const [selCateg,setSelCateg]=useState(0)

  useEffect(() => {
    fetchCateg()
  },[])

  const fetchCateg=async () => {
    let url='/categ'
    try{
      const resp=await axios.get(url)
      setCateg(resp.data)
    }catch(err){
      console.log(err)
    }
  }
  return (
    <MyContext.Provider value={{ categ ,selCateg,setSelCateg}}>
      {props.children}
    </MyContext.Provider>
  );
};
