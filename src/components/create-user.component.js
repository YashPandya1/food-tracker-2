import React, {Component} from 'react';
import axios from 'axios';
import { BASE_URL } from '../services/helper';

export default class CreateUser extends Component{
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
        }
    }

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const user = {
            username: this.state.username,
        }

        console.log(user);

        axios.post(`${BASE_URL}/users/add`, user)
            .then(res => console.log(res.data));
        
        this.setState ({
            username: ''
        })
    }

    render() {
        return (
            <div className="container">
                <h3>Create New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div class ="form-group mb-3">
                        <label>Username:</label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                            />
                    </div>
                    <div class="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}