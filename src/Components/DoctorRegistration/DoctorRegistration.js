import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


//redux
// import {updateUser} from '../redux/reducer';
// import {connect} from 'react-redux';



class DoctorRegistration extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
            firstName: '',
            lastName: ''
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleDoctorRegistration = () => {
        axios.post('/auth/doctorRegister', {username: this.state.username, password: this.state.password, firstName:this.state.firstName, lastName:this.state.lastName}).then(res => {
            this.state = {
                username: '',
                password: '',
                firstName: '',
                lastName: ''
            }
            //redux
            // this.props.updateUser(res.data)
            this.props.history.push('/patients')

        })
        .catch(err => console.log(err))
    }


    render(){
        return(
            <div>
                DoctorRegistration
                <input 
                    placeholder='Username'
                    value={this.state.username}
                    name='username'
                    onChange={(e) => this.handleInput(e)}/>

                <input 
                    placeholder='Password'
                    type='password'
                    value={this.state.password}
                    name='password'
                    onChange={(e) => this.handleInput(e)}/>

                <input 
                    placeholder='First Name'
                    value={this.state.firstName}
                    name='firstName'
                    onChange={(e) => this.handleInput(e)}
                    />

                <input 
                    placeholder='Last Name'
                    value={this.state.lastName}
                    name='lastName'
                    onChange={(e) => this.handleInput(e)}
                    />

                {/* <Link to='/patients'><button>Register</button></Link> */}
                <button onClick={this.handleDoctorRegistration}>Register</button>

                <Link to='/login'><button>Sign In</button></Link>
            </div>
        )
    }
}

//redux

export default DoctorRegistration;