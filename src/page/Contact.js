import { Component} from "react";
class Contact extends Component{
constructor() {
    super()
    this.state = {
        count : 1 ,
        istrue : true
}
}
inc(){
    console.log(this.state.count)
    this.setState({count : this.state.count+1})
}
render() {
    console.log(this.state.count);
    return(
       <>
         {this.state.istrue && <h1>Contact component Count is :- {this.state.count}</h1>}
         
        
          <button onClick={()=>this.inc()}>Increament</button>
          <button onClick={()=>this.setState({istrue: this.state.istrue})}>Toggle</button>
       </>
   )
}
}

export default Contact;