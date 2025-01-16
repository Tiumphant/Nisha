import { Component } from "react"

class Team extends Component
{
   constructor (props){
    super(props);
    console.log("constructor", this.props);

    this.state = {
        name : "Nisha",
        age : 21
    }

   }
    myfunc(){
        console.log ("first");
        this.setState({name: "Anita" , age: 40})

    }
    render() {
        console.log("render...")
        return(
            <>
           <h1> My team Component {this.state.name} and age is {this.state.age}</h1>
           <button onClick={()=> this.myfunc()}>click</button> 
           
            </>
            
 

        )
     }


    }

export default Team;