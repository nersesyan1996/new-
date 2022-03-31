import { Component } from "react";
import HigherOrederComp from "./HigherOrederComp.jsx";
import StarBorderIcon from '@mui/icons-material/StarBorder';

class CounterHover extends Component{
    
    render(){
        return(
          
        <div >
                  {[...Array(5)].map((star,index)=>{
                    const ratingValue = index+1
                    
                    return <label key={index}>

                      <input type='radio' name='rating' value={ratingValue}
                      style={{display:"none"}}
                      onClick={()=>{
                        this.setState({rating:ratingValue})
                      }}
                      />
                      <StarBorderIcon style={ratingValue <=(this.state.hover || this.state.rating)?{color:'yellow'}:{color:'#E3E4E5'}}
                      onMouseEnter={()=> this.setState({hover:ratingValue})}
                      onMouseLeave={()=>this.setState({hover:null})}
                      ></StarBorderIcon>
                    </label>
                })}
        </div>
        )
     
    }
}
export default HigherOrederComp(CounterHover)