import { Component } from "react";
import AddUser from "./components/Adduser";

class App extends Component{


constructor(props){
  super(props);
  this.state = {
    users:[
      {
        id:1,
        name:"Murat Coskun",
        email:"murat@gmail.com"
      },
      {
        id:2,
        name:"Bilal Coskun",
        email:"bilal@gmail.com"
      },
      {
        id:3,
        name:"Serkan Coskun",
        email:"serkan@gmail.com"
      }
    ]
  };
}




  render(){

    return (
      <div className="container">
        <h5>User App</h5>
        <hr />
        <AddUser/>
      </div>
    )
  }
}

export default App;