import { Component } from "react";

class AddUser extends Component{
    render(){
        return(
            <div className="card">
                <h4 className="card-header">Add New User</h4>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" placeholder="Enter Name" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" id="email" placeholder="Enter Email" className="form-control"/>
                        </div>
                        <button type="submit" className="btn btn-danger btn-block">Add New User</button>
                    </form>
                </div>


            </div>
        )
    }
}

export default AddUser;