import { useParams } from "react-router-dom";
import React,{useState,useEffect} from "react";
import axios from 'axios'

 export const SinglePost = ()=>{

const {id} =useParams()
const [single,setSingle] = useState(null)



 useEffect(()=>{
 const apiUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;
    axios.get(apiUrl).then((resp) => {
      const allPersons = resp.data;
     setSingle(allPersons);
    });
  }, [id]);
    return (
            <>
              {single ?  <div>
                  <h1>{single.title}</h1>
                <p>{single.body}</p>
              </div>:<p>Loading</p>}
            </>
    )
}
  