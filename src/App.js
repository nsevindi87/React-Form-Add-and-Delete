import { Component } from "react";

class App extends Component{
  render(){
    const title = "User App"

    return (
      <div className="container">
        <h5>{title}</h5>
        <label htmlFor="name">Name</label>
        <p className="lead">This is sample text</p>
      </div>
    )
  }
}

export default App;