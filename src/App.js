import { Component } from "react";
import AddUser from "./components/Adduser";
import Users from "./components/Users";

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
  this.deleteUser = this.deleteUser.bind(this);
  this.addUser = this.addUser.bind(this)
}

addUser(newUser){
  let updatedUsers = this.state.users;
  updatedUsers.push(newUser);
  this.setState({
    users: updatedUsers
  })
}

deleteUser(id){
  let updatedUsers = this.state.users;
  updatedUsers = updatedUsers.filter(user => user.id !== id);
  this.setState({
    users: updatedUsers
  });
}

  render(){

    return (
      <div className="container">
        <h5>User App</h5>
        <hr />
        <AddUser addUser={this.addUser}/>
        <hr />
        <Users deleteUser={this.deleteUser} users={this.state.users}/>
      </div>
    )
  }
}
export default App;