import React, {Component} from "react";
import  "./index.css";
import { Link } from "react-router-dom";
class Listing extends Component{
        constructor(){
         super();
         this.state = {
            data:[]
              }
        }
    
    update (){
        fetch("https://manraj-ors-1.onrender.com/user").then((responce) => responce.json()).then((result) => {
            console.log("result...")
            this.setState({data:result})
        })
        
    }
    componentDidMount(){
        this.update()
    }
    delData(id){
        console.log("del id is a", id);
        fetch("https://manraj-ors-1.onrender.com/user" + id,{ method: 'Delete'}).then((responce)=>responce.json()).then((result) =>{
            console.log("result...");
            this.setState({data:result})  
        })
       
    }
    
    render(){
       console.log(this.state.data);

        return(
           <table>
            <thead>
                <tr>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Email</th>
                    <th>password</th>
                    <th>roleId</th>
                    <th>Operation</th>

                </tr>
            </thead>
            <tbody>
                {
                    this.state.data.map((item) =>{
                        return (
                            <tr key={item._id}>
                             <td>{item.firstName}</td>
                             <td>{item.lastName}</td>
                             <td>{item.logininId}</td>
                             <td>{item.password}</td>
                             <td>{item.roleId}</td>
                             <td>{item._id}</td>
                             <td><Link to={'/listuser/${item._id}'}> Edit</Link>
                             <button onClick={() =>{this.delData(item._id)}}>Del</button></td>
                            </tr>

                        )
                    } )
                }
            </tbody>
           </table>
        )
    }
}
 
    
   
export default Listing;
         


