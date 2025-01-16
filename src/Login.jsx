import React, { Component } from "react";
import "bootstrap"



class Login extends React.Component{
  constructor(){
   super();
   this.state = {
    name : "Nisha",
    age : 22
   }

  }


render (){
    console.log(this.state)
    return(
          <>
          <div className="conainter-fluid bg-dark text-align py-3">
            <header className="text-center">
                <h1 className="display-6">Card</h1>
            </header>
          </div>

          </>

    )
}

}
 export default Login;