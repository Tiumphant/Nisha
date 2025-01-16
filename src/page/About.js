import React from "react";
 
 class About extends React.Component{
  constructor(props){
   super(props);
   console.log("Constructor...")
   this.state = {
    name : "Nisha",
    age : 22
   }
  }
  static getDerivedStateFromProps(props,state) {
    console.log("GDSP.. props", props);
    console.log("GDSP", state)
    return { name: props.name1}
  }
  componentDidMount(){
    console.log("componentdidmount")
  }
 sendData(){
  console.log("send sata")
  this.setState({name : "Ajay" , age :55})
 }
 shouldComponentUpdate(){
  console.log("should compoenent update")
  return true;
 }
 getSnapshotBeforeUpdate(prep, pres){
  console.log(prep.name1,pres)
  return prep.name1
 }
 componentDidUpdate(){
  console.log("cdu")
 }
 componentWillUnmount(){
  alert(" your component is remove from your dom")
 }
 render (){
  console.log("render..");
  return (
    <>
    <h1>About comppoent {this.state.name}</h1>
    <button onClick ={()=>this.sendData()}>send data in app</button>    
    </>
  )
}
}

    export default About;