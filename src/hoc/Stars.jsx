import React, { useState } from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';

export default function Stars() {

       const [rating,setRating] =useState(null)
       const [hover,setHover] =useState(null)


  return (
  
    <div>
        
        <h2>Stars</h2>
    
        <div >
                  {[...Array(5)].map((star,index)=>{
                    const ratingValue = index+1
                    
                    return <label key={index}>

                      <input type='radio' name='rating' value={ratingValue}
                      style={{display:"none"}}
                      onClick={()=>{
                        setRating(ratingValue)
                      }}
                      />
                      <StarBorderIcon style={ratingValue <=(hover || rating)?{color:'yellow'}:{color:'#E3E4E5'}}
                      onMouseEnter={()=>setHover(ratingValue)}
                      onMouseLeave={()=>setHover(null)}
                      ></StarBorderIcon>
                    </label>
                })}
        </div>

    </div>
  )
}
