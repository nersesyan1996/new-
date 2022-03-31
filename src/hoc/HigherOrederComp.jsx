import { Component } from "react";

const HigherOrederComp=(NewCounter)=>{
    class Counter extends Component{
        constructor(props){
          super(props);
          this.state={
             
              rating:null,
              hover :null
          }
          this.ratingfn=this.ratingfn.bind(this)
          this.hoverfn=this.hoverfn.bind(this)
        }


        ratingfn(){
            this.setState({rating:this.state.rating})
        }
        hoverfn(){
            this.setState({hover:this.state.hover})
        }


        render(){
            return(
                <NewCounter rating={this.state.rating} hover={this.hover}/>
                
            )

            
        }
    }
    return Counter
}
export default HigherOrederComp;

