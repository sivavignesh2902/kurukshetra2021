import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export default class View extends Component {
    constructor(){
        super();
        this.state = {
            Name: '',
            email: '',
            views:''
        }
        
    }
    addView = (e) => {
        e.preventDefault();
        document.getElementById('sno').innerHTML = "4";
        document.getElementById('name').innerHTML = this.state.Name;
        document.getElementById('email').innerHTML = this.state.email;
        document.getElementById('views').innerHTML = this.state.views;




    }
    render() {
        return (
            <div className="mt-5" style={{backgroundImage: "linear-gradient(to right, green, yellow)"}} >
                <h1 style={{}} >Share your views on agriculture</h1>
                <form className="col-md-6 offset-4 mt-5" style={{width:"500px"}} onSubmit={this.addView} id="viewform">
                    <label>Name</label>
                    <input type="text" className="form-control" value={this.state.Name} onChange={(e) =>{ 
                        this.setState({ Name:e.target.value });
                    }} />
                    <label>Email</label>
                    <input type="text" className="form-control" value={this.state.email} onChange={(e) =>{ 
                        this.setState({ email:e.target.value });
                    }} />
                    <label>Your Views on Agriculture</label>
                    <input type="text" className="form-control" value={this.state.views} onChange={(e) =>{ 
                        this.setState({ views:e.target.value });
                    }} />
                    <button className="btn btn-outline-danger mt-2">Submit</button>
                </form>
                <h3>Latest Views on agriculture</h3>
                <div>
                <Table striped bordered hover>
  <thead>
    <tr>
      <th>S.No</th>
      <th>Name</th>
      <th>Email</th>
      <th>View</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>mark@gmail.com</td>
      <td>Agriculture is the best</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Jacob@gmail.com</td>
      <td>Farmer is great</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Larry the Bird</td>
      <td>Larry@gmail.com</td>
      <td>Agriculture is our wisest pursuit, because it will in the end contribute most to real wealth, good morals</td>
    </tr>
    <tr>
      <td id="sno"></td>
      <td id="Name"></td>
      <td id="email"></td>
      <td id="views"></td>
    </tr>
  </tbody>
</Table>
</div>
</div>
        )
    }
}