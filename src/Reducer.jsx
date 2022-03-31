import React,{useReducer} from 'react'
import {init,reducer} from './reducer'
export default function Reducer() {
const [state,dispatch] = useReducer(reducer ,init.count)
    console.log(state);
  return (
    <div>
        <h1>{state}</h1>
        <button style={{color:"black"}} onClick={()=>{
            dispatch({type:'Increment'})
        }}>klik</button>
        
    </div>
  )
}
