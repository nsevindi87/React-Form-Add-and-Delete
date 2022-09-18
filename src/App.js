import { Component } from "react";
import AddUser from "./components/Adduser";
import Users from "./components/Users";

class App extends Component{
 
  deleteUser(id){
    let updatedUsers = this.state.users;
    updatedUsers = updatedUsers.filter(user => user.id !== id);
    this.setState({
      users: updatedUsers
    });
  }

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
  this.deleteUser = this.deleteUser.bind(this);
}

  render(){

    return (
      <div className="container">
        <h5>User App</h5>
        <hr />
        <AddUser/>
        <hr />
        <Users deleteUser={this.deleteUser} users={this.state.users}/>
      </div>
    )
  }
}

export default App;