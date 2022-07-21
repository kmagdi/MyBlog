import React,{createContext,useState,useEffect} from 'react';
import axios from 'axios';


export const PostsContext = createContext();

export const PostsProvider = (props) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts()
  },[])

  const fetchPosts=async () => {
    const url='/posts'
    try{
      const resp=await axios.get(url)
      setPosts(resp.data)
    }catch(err){
      console.log(err)
    }
  }
  return (
    <PostsContext.Provider value={{ posts}}>
      {props.children}
    </PostsContext.Provider>
  );
};
