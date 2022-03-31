import React,{useState,useEffect} from "react";
import axios from 'axios'
import { Link } from "react-router-dom";


export const  Post=()=> {
    
 const [posts, setAppState] = useState();

 useEffect(()=>{
 const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
    axios.get(apiUrl).then((resp) => {
      const allPersons = resp.data;
      setAppState(allPersons);
    });
  }, [setAppState]);
  
  return (
  <>
  <p>ssss</p>
  {posts && posts.map(v=>{
    return <Link key={v.id} to={`/post/${v.id}`}>
      
      {v.title}
      
      </Link>
  })}
  
  </>
  )
}
// ex