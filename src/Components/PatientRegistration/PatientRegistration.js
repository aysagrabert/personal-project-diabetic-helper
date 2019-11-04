import React, {Component} from 'react';
import {Link} from 'react-router-dom'


class PatientRegistration extends Component {

    render(){
        return(
            <div>
                PatientRegistration
                <input placeholder='Username'/>
                <input placeholder='Password' type='password'/>
                <input placeholder='First Name'/>
                <input placeholder='Last Name'/>
                <Link to='/doctor-registration'><button>Doctor Registration</button></Link>
                <Link to='/dashboard/tracker'><button>Register</button></Link>
                
                <Link to='/login'><button>Sign In</button></Link>

            </div>
        )
    }
}

export default PatientRegistration;