import React, { Component } from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';

class AddClient extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        project: '',

    }

    handleInput = (e) => {
        this.setState({

            [e.target.name]: e.target.value
        });
    }

    saveClient = async (e) => {
        e.preventDefault();
        
        const res = await axios.post('http://127.0.0.1:8000/api/add-client', this.state);
        if(res.data.status === 200)
        {
            console.log(res.data.message);
            this.setState({
                name: '',
                email: '',
                phone: '',
                project: '',
            });
        }
    }

    render(){
        return(
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Add Client
                                        <Link to={'/'} className="btn btn-primary btn-sm float-end">Back</Link>
                                    </h4>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={this.saveClient}>
                                        <div className="form-group mb-3">
                                            <label>Client Name</label>
                                            <input type="text" name='name' onChange={this.handleInput} value={this.state.name} className="form-control"/>
                                        </div>
                                        <div className="form-group mb-3">
                                            <label>Client Email</label>
                                            <input type="text" name='email' onChange={this.handleInput} value={this.state.email} className="form-control"/>
                                        </div>
                                        <div className="form-group mb-3">
                                            <label>Client Phone</label>
                                            <input type="text" name='phone' onChange={this.handleInput} value={this.state.phone} className="form-control"/>
                                        </div>
                                        <div className="form-group mb-3">
                                            <label>Client Project</label>
                                            <input type="text" name='project' onChange={this.handleInput} value={this.state.project} className="form-control"/>
                                        </div>
                                        <div className="form-group mb-3">
                                            <button type='submit' className='btn btn-primary'>Save Client</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default AddClient;