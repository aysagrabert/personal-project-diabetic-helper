import React, {Component} from 'react';
import {Link} from 'react-router-dom'


class PatientRegistration extends Component {

    render(){
        return(
            <div>
                PatientRegistration
                <Link to='/doctor-registration'><button>Doctor Registration</button></Link>
                <Link to='/dashboard/tracker'><button>Register</button></Link>

            </div>
        )
    }
}

export default PatientRegistration;