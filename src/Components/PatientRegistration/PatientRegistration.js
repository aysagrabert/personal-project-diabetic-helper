import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


class PatientRegistration extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            doctor: ''
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    componentDidMount(){
    }

    handlePatientRegister = () => {
        axios.post('/auth/patientRegister', {username: this.state.username, password: this.state.password, firstName:this.state.firstName, lastName:this.state.lastName, doctor:this.state.doctor}).then(res => {
            this.state = {
                username: '',
                password: '',
                firstName: '',
                lastName: '',
                doctor: ''
            }
            //redux
            // this.props.updateUser(res.data)
            this.props.history.push('/dashboard/tracker')

        })
        .catch(err => console.log(err))
    }

    render(){
        return(
            <div>
                PatientRegistration
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

                <input 
                    placeholder='Doctor'
                    value={this.state.doctor}
                    name='doctor'
                    onChange={(e) => this.handleInput(e)}/>

                <Link to='/doctor-registration'><button>Doctor Registration</button></Link>

                <button onClick={this.handlePatientRegister}>Register</button>
                
                <Link to='/login'><button>Sign In</button></Link>

            </div>
        )
    }
}

export default PatientRegistration;