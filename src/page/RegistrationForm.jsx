import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      errors: {}
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
     
    fetch('https://manraj-ors-1.onrender.com/user/6760100a4afe68928ac496e7', {
      method: 'Post',
      body: JSON.stringify(this.state),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

  }
  


 render(){
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h2>Registration Form</h2>
            <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label>Name:</label>
                <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.handleChange} />
                {this.state.errors.name && <div className="text-danger">{this.state.errors.name}</div>}
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.handleChange} />
                {this.state.errors.email && <div className="text-danger">{this.state.errors.email}</div>}
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input  className="form-control" name="password" value={this.state.password} onChange={this.handleChange} />
                {this.state.errors.password && <div className="text-danger">{this.state.errors.password}</div>}
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input  className="form-control" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} />
                
              </div>
              <button type="submit" className="btn btn-primary" onClick={this.handleSubmit} >Register</button>
            </form>
          </div>
        </div>
      </div>
  
   )
  }
}


export default RegistrationForm;
