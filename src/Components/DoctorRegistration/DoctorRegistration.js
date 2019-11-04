import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';



class DoctorRegistration extends Component {


    render(){
        return(
            <div>
                DoctorRegistration
                <input placeholder='Username'/>
                <input placeholder='Password' type='password'/>
                <input placeholder='First Name'/>
                <input placeholder='Last Name'/>
                <Link to='/patients'><button>Register</button></Link>
                <Link to='/login'><button>Sign In</button></Link>
            </div>
        )
    }
}

export default DoctorRegistration;