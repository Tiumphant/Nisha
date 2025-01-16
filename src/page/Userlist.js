import React, {Component} from "react";

import { Link } from "react-router-dom";
class Userlist extends Component{
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
        fetch("https://manraj-ors-1.onrender.com/user/" + id,{ method: 'Delete'}).then((responce)=>responce.json()).then((result) =>{
            console.log("result...");
            this.setState({data:result})  
        })
       
    }
    
    render(){
       console.log(this.state.data);

        return(
            <div>
             <table className="table table-striped ">
            <thead className="thead-dark">
                <tr>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>loginId</th>
                    <th>password</th>
                    <th>roleId</th>
                    <th>dob</th>
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
                             <td>{item.loginId}</td>
                             <td>{item.password}</td>
                             <td>{item.roleId}</td>
                             <td>{item.dob}</td>
                              <td><Link to={`/AddUser/${item._id}`}><button>Edit</button></Link>
                              <button onClick={() =>{this.delData(item._id)}}>Del</button></td>
                            </tr>

                        )
                    } )
                }
            </tbody>
           </table>
           </div>
        )
    }
}
 
    
   
export default Userlist;
         


