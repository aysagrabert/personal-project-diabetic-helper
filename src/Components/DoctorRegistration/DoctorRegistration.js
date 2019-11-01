import React, {Component} from 'react';
import {Link} from 'react-router-dom'


class DoctorRegistration extends Component {

    render(){
        return(
            <div>
                DoctorRegistration
                <input placeholder='Username'/>
                <input placeholder='Password'/>
                <input placeholder='First Name'/>
                <input placeholder='Last Name'/>
                <Link to='/patients'><button>Register</button></Link>
            </div>
        )
    }
}

export default DoctorRegistration;